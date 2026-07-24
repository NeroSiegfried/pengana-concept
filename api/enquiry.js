// Vercel serverless function — receives every website enquiry form and emails
// it to the right business inbox via Resend.
//
// The site posts JSON here (see src/components/blocks/ContactForm.jsx). Routing
// is by the stable `business` id (concept | properties | tishino | sunab).
// All addresses and keys are read from environment variables — nothing secret
// lives in the repo. If RESEND_API_KEY is unset the function returns 5xx, and
// the form transparently falls back to opening the visitor's mail client, so
// deploying this before configuration never breaks the live forms.
//
// Required env (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY          Resend API key
//   ENQUIRY_FROM            verified sender, e.g. "Pengana Concept <enquiries@penganaconcept.com>"
//   ENQUIRY_TO_CONCEPT      inbox for group / concept enquiries
//   ENQUIRY_TO_PROPERTIES   inbox for Pengana Properties
//   ENQUIRY_TO_TISHINO      inbox for Tishino Ventures
//   ENQUIRY_TO_SUNAB        inbox for Sunab Telecoms
//   ENQUIRY_TO_DEFAULT      fallback inbox (optional)

import { Resend } from "resend";

const RECIPIENTS = {
  concept: process.env.ENQUIRY_TO_CONCEPT,
  properties: process.env.ENQUIRY_TO_PROPERTIES,
  tishino: process.env.ENQUIRY_TO_TISHINO,
  sunab: process.env.ENQUIRY_TO_SUNAB,
};
const FALLBACK_TO =
  process.env.ENQUIRY_TO_DEFAULT || "enquiries@penganaconcept.com";
const FROM =
  process.env.ENQUIRY_FROM ||
  "Pengana Concept <enquiries@penganaconcept.com>";

// Best-effort in-memory rate limit. Resets on cold start and is per-instance,
// which is plenty for a low-traffic brochure site; the honeypot does the heavy
// lifting against bots.
const HITS = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const recent = (HITS.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  HITS.set(ip, recent);
  if (HITS.size > 1000) {
    for (const [key, times] of HITS) {
      if (!times.some((t) => now - t < WINDOW_MS)) HITS.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const isEmail = (s) =>
  typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const clean = (s, max = 2000) => String(s ?? "").slice(0, max);
const esc = (s) =>
  String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body || {};

  // Honeypot: real users never see or fill this field. Pretend success so bots
  // don't learn they were caught.
  if (clean(body.company_url).trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 200).trim();
  const email = clean(body.email, 320).trim();
  const message = clean(body.message, 5000).trim();
  const subject = clean(body.subject, 300).trim();
  const phone = clean(body.phone, 60).trim();
  const businessId = clean(body.business, 40).trim().toLowerCase();
  const recipientName = clean(body.recipient, 200).trim() || "Pengana Concept";
  const contextLabel = clean(body.contextLabel, 120).trim();
  const context = clean(body.context, 500).trim();

  if (!name || !isEmail(email) || !message) {
    return res.status(400).json({
      error: "Please provide your name, a valid email, and a message.",
    });
  }

  const ip =
    clean(req.headers["x-forwarded-for"]).split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  if (rateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many submissions. Please try again shortly." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — enquiry not sent.");
    return res.status(503).json({ error: "Email is not configured yet." });
  }

  const to = RECIPIENTS[businessId] || FALLBACK_TO;
  const subjectLine = `Website enquiry — ${recipientName}${subject ? ` — ${subject}` : ""}`;

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["Business", recipientName],
    ["Subject", subject || "—"],
    ...(context ? [[contextLabel || "Context", context]] : []),
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}\n`;
  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#15191e">` +
    rows
      .map(([k, v]) => `<p style="margin:0 0 4px"><strong>${esc(k)}:</strong> ${esc(v)}</p>`)
      .join("") +
    `<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>` +
    `<p style="white-space:pre-wrap;margin:0">${esc(message)}</p></div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      replyTo: email,
      subject: subjectLine,
      text,
      html,
    });
    if (error) {
      console.error("Resend error", error);
      return res.status(502).json({ error: "Could not send your enquiry." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Enquiry send failed", err);
    return res.status(502).json({ error: "Could not send your enquiry." });
  }
}
