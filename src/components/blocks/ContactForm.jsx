import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FORM_ENDPOINT, GROUP } from "../../content/company.js";

const BUSINESS_OPTIONS = [
  "General enquiry",
  "Pengana Properties",
  "Tishino Ventures",
  "Sunab Telecoms Services",
];

export default function ContactForm({
  eyebrow = "Send a message",
  title = "Tell us what you need.",
  intro = "Give us enough context to route your enquiry to the right team.",
  defaultBusiness = "General enquiry",
  defaultTopic = "",
  topics = [],
  business = "concept",
}) {
  const [searchParams] = useSearchParams();
  const queryBusiness = searchParams.get("business");
  const queryTopic = searchParams.get("topic");
  const initialBusiness = BUSINESS_OPTIONS.includes(queryBusiness)
    ? queryBusiness
    : defaultBusiness;
  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: initialBusiness,
    topic: queryTopic || defaultTopic,
    message: "",
  });

  const endpoint = useMemo(
    () => import.meta.env.VITE_FORM_ENDPOINT || FORM_ENDPOINT,
    [],
  );

  const update = (event) =>
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  async function handleSubmit(event) {
    event.preventDefault();
    const subject = `Website enquiry — ${values.company}${
      values.topic ? ` — ${values.topic}` : ""
    }`;
    const body =
      `Name: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Phone: ${values.phone || "Not provided"}\n` +
      `Business: ${values.company}\n` +
      `Subject: ${values.topic || "General"}\n\n` +
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
          body: JSON.stringify({ subject, ...values }),
        });
        setStatus(response.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    window.location.href = `mailto:${GROUP.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <section className="contact-form contact-form--done" data-site={business}>
        <div className="contact-form__head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>Thank you. Your enquiry is ready to send.</h2>
        </div>
        <div className="contact-form__success">
          <p>
            {endpoint
              ? "It has been submitted to the team. They can reply using the details you provided."
              : "Your email app should have opened with the complete enquiry. Review it there and press send."}
          </p>
          <button
            type="button"
            className="action action--ghost"
            onClick={() => setStatus("idle")}
          >
            <span>Send another enquiry</span>
            <span className="action__arrow" aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form" data-site={business}>
      <div className="contact-form__head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{intro}</p>
        <div className="contact-form__route">
          <span>01</span>
          <p>Choose a subject</p>
          <span>02</span>
          <p>Share your details</p>
          <span>03</span>
          <p>We route it to the right team</p>
        </div>
      </div>

      <form className="contact-form__body" onSubmit={handleSubmit}>
        {topics.length ? (
          <fieldset className="topic-picker">
            <legend className="field__label">What can we help with?</legend>
            <div>
              {topics.map((topic) => (
                <button
                  type="button"
                  className={values.topic === topic ? "is-active" : ""}
                  aria-pressed={values.topic === topic}
                  onClick={() =>
                    setValues((prev) => ({ ...prev, topic }))
                  }
                  key={topic}
                >
                  {topic}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

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
              placeholder="+234"
            />
          </label>
          <label className="field">
            <span className="field__label">Enquiry for</span>
            <select name="company" value={values.company} onChange={update}>
              {BUSINESS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="field field--full">
            <span className="field__label">Subject</span>
            <input
              name="topic"
              value={values.topic}
              onChange={update}
              required
              placeholder="What is this about?"
            />
          </label>
          <label className="field field--full">
            <span className="field__label">Message</span>
            <textarea
              name="message"
              value={values.message}
              onChange={update}
              required
              rows={5}
              placeholder="Tell us what you need, where, and when."
            />
          </label>
        </div>

        <div className="contact-form__foot">
          <button
            type="submit"
            className="action action--solid"
            disabled={status === "sending"}
          >
            <span>{status === "sending" ? "Sending…" : "Send enquiry"}</span>
            <span className="action__arrow" aria-hidden="true">↗</span>
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
      </form>
    </section>
  );
}
