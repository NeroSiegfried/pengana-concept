import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FORM_ENDPOINT, GROUP } from "../../content/company.js";

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
            ...values,
            business: recipient,
            _subject: emailSubject,
          }),
        });
        setStatus(response.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
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
            <span>Send another enquiry</span>
            <span className="action__arrow" aria-hidden="true">→</span>
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
            <span>{status === "sending" ? "Sending…" : submitLabel}</span>
            <span className="action__arrow" aria-hidden="true">→</span>
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
