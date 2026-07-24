import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FORM_ENDPOINT, GROUP } from "../../content/company.js";
import { ActionContent } from "../ui/ActionLink.jsx";

export default function ContactForm({
  recipient = GROUP.name,
  defaultTopic = "",
  contextLabel = "",
  contextName = "context",
  contextPlaceholder = "",
  subjectPlaceholder = "What would you like to discuss?",
  messagePlaceholder = "Tell us what you need, where, and when.",
  submitLabel = "Send enquiry",
  submissionEndpoint = "",
  business = "concept",
}) {
  const [searchParams] = useSearchParams();
  const queryTopic = searchParams.get("topic");
  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: queryTopic || defaultTopic,
    ...(contextLabel ? { [contextName]: "" } : {}),
    message: "",
    company_url: "", // honeypot — real users never fill this
  });

  const endpoint = useMemo(
    () =>
      submissionEndpoint ||
      import.meta.env.VITE_FORM_ENDPOINT ||
      FORM_ENDPOINT,
    [submissionEndpoint],
  );

  const update = (event) =>
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    const emailSubject = `Website enquiry — ${recipient} — ${values.subject}`;
    const context = contextLabel
      ? `${contextLabel}: ${values[contextName] || "Not provided"}\n`
      : "";
    const body =
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone || "Not provided"}\n` +
      `Business: ${recipient}\n` +
      `Subject: ${values.subject}\n` +
      context +
      "\n" +
      `${values.message}\n`;

    if (endpoint) {
      try {
        setStatus("sending");
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.phone,
            subject: values.subject,
            message: values.message,
            business, // stable id: concept | properties | tishino | sunab
            recipient, // display name
            contextLabel: contextLabel || "",
            context: contextLabel ? values[contextName] || "" : "",
            company_url: values.company_url || "",
            _subject: emailSubject,
          }),
        });
        if (response.ok) {
          setStatus("sent");
          return;
        }
        // A 4xx is a validation / rate-limit issue — let the visitor retry.
        if (response.status >= 400 && response.status < 500) {
          setStatus("error");
          return;
        }
        // 5xx / unconfigured endpoint: fall through to the mail-client path so
        // enquiries are never lost before the backend is fully set up.
      } catch {
        // Network failure: fall through to the mail-client path.
      }
    }

    window.location.href = `mailto:${GROUP.email}?subject=${encodeURIComponent(
      emailSubject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form--done" data-site={business}>
        <div className="contact-form__success">
          <h2>Thank you. Your enquiry is ready to send.</h2>
          <p>
            {endpoint
              ? `It has been submitted to ${recipient}. The team can reply using the details you provided.`
              : "Your email app should have opened with the complete enquiry. Review it there and press send."}
          </p>
          <button
            type="button"
            className="action action--ghost"
            onClick={() => setStatus("idle")}
          >
            <ActionContent variant="ghost">Send another enquiry</ActionContent>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="contact-form"
      data-site={business}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="business" value={recipient} />
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={values.company_url}
        onChange={update}
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
        }}
      />
      <div className="contact-form__body">
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
          <label className="field field--phone">
            <span className="field__label">Phone</span>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={update}
              autoComplete="tel"
              placeholder="+234"
            />
          </label>
          <label className="field field--full">
            <span className="field__label">Subject</span>
            <input
              name="subject"
              value={values.subject}
              onChange={update}
              required
              placeholder={subjectPlaceholder}
            />
          </label>
          {contextLabel ? (
            <label className="field field--full">
              <span className="field__label">{contextLabel}</span>
              <input
                name={contextName}
                value={values[contextName]}
                onChange={update}
                placeholder={contextPlaceholder}
              />
            </label>
          ) : null}
          <label className="field field--full">
            <span className="field__label">Message</span>
            <textarea
              name="message"
              value={values.message}
              onChange={update}
              required
              rows={5}
              placeholder={messagePlaceholder}
            />
          </label>
        </div>

        <div className="contact-form__foot">
          <button
            type="submit"
            className="action action--solid"
            disabled={status === "sending"}
          >
            <ActionContent variant="solid">
              {status === "sending" ? "Sending…" : submitLabel}
            </ActionContent>
          </button>
          <p className="contact-form__privacy">
            Your details are used only to respond to this enquiry.
          </p>
          {status === "error" ? (
            <p className="contact-form__error">
              We could not submit that. Please use one of the telephone lines.
            </p>
          ) : null}
        </div>
      </div>
    </form>
  );
}
