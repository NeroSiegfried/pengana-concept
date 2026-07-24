import { useState } from "react";
import { FORM_ENDPOINT, GROUP } from "../../content/company.js";

const BUSINESS_OPTIONS = [
  "General enquiry",
  "Pengana Properties",
  "Tishino Ventures",
  "Sunab Telecoms Services",
];

// Contact form. With no backend configured it composes an email in the
// visitor's mail client; set FORM_ENDPOINT to POST submissions to a service.
export default function ContactForm({
  eyebrow = "Send a message",
  title = "Tell us what you need.",
  defaultBusiness = "General enquiry",
  business = "concept",
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: defaultBusiness,
    message: "",
  });

  const update = (event) =>
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    const subject = `Website enquiry — ${values.company}`;
    const body =
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone}\n` +
      `Business: ${values.company}\n\n` +
      `${values.message}\n`;

    if (FORM_ENDPOINT) {
      try {
        setStatus("sending");
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ subject, ...values }),
        });
        setStatus(response.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    // No endpoint: hand off to the visitor's mail client.
    window.location.href = `mailto:${GROUP.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form--done" data-site={business}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>Thank you — your message is on its way.</h2>
        <p className="contact-form__note">
          {FORM_ENDPOINT
            ? "We'll come back to you on the details you provided."
            : "Your email app should have opened with the message ready to send. Prefer to call? The shared lines are listed above."}
        </p>
        <button
          type="button"
          className="action action--ghost"
          onClick={() => setStatus("idle")}
        >
          <span>Send another</span>
          <span className="action__arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" data-site={business} onSubmit={handleSubmit}>
      <div className="contact-form__head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="contact-form__grid">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            name="name"
            value={values.name}
            onChange={update}
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label className="field">
          <span className="field__label">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={update}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label className="field">
          <span className="field__label">Phone</span>
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={update}
            autoComplete="tel"
            placeholder="Optional"
          />
        </label>
        <label className="field">
          <span className="field__label">Enquiry about</span>
          <select name="company" value={values.company} onChange={update}>
            {BUSINESS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field field--full">
          <span className="field__label">Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={update}
            required
            rows={5}
            placeholder="How can we help?"
          />
        </label>
      </div>

      <div className="contact-form__foot">
        <button type="submit" className="action action--solid" disabled={status === "sending"}>
          <span>{status === "sending" ? "Sending…" : "Send message"}</span>
          <span className="action__arrow" aria-hidden="true">↗</span>
        </button>
        {status === "error" ? (
          <p className="contact-form__error">
            Something went wrong. Please use the telephone lines above.
          </p>
        ) : null}
      </div>
    </form>
  );
}
