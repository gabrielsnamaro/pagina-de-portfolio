import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Footer, Shell, Arrow } from "./ResumeShared";
import { getContent, labels } from "./ResumeUtils.jsx";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function ContactPage({ language }) {
  const t = labels[language];
  const data = getContent(language);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const contactItems = [
    [t.email, data.email, `mailto:${data.email}`],
    [t.phone, data.phone, `tel:${data.phone.replace(/[^\d+]/g, "")}`],
    ["LinkedIn", "linkedin.com/in/gabrielamaro2006", data.linkedin],
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(language === "en" ? "en-US" : "pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }),
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text:
              language === "en"
                ? "Message sent successfully!"
                : "Mensagem enviada com sucesso!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatusMessage({
            type: "error",
            text:
              language === "en"
                ? "Failed to send message. Please try again."
                : "Erro ao enviar mensagem. Tente novamente.",
          });
        }
      );
  };

  return (
    <>
      <Shell eyebrow={t.contact} title={t.contact} description={t.contactDesc}>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h2 className="text-base font-bold">{t.contactInfo}</h2>
            <div className="mt-6 grid gap-4">
              {contactItems.map(([label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  target={label === "LinkedIn" ? "_blank" : undefined}
                  rel={label === "LinkedIn" ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-lg border border-[#eee] p-4 text-xs hover:border-[#aaa]"
                >
                  <span>
                    <small className="block text-[10px] uppercase text-[#999]">
                      {label}
                    </small>
                    <strong className="mt-1 block">{value}</strong>
                  </span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>

          <form
            className="rounded-xl border border-[#ddd] p-5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-base font-bold">{t.message}</h2>

            <label className="mt-5 block text-[10px] font-bold">
              {t.name} <em className="font-normal text-[#999]">{t.required}</em>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded border border-[#ddd] px-3 py-2 text-xs font-normal outline-none focus:border-[#555]"
                placeholder={t.name}
              />
            </label>

            <label className="mt-5 block text-[10px] font-bold">
              {t.email}{" "}
              <em className="font-normal text-[#999]">{t.required}</em>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded border border-[#ddd] px-3 py-2 text-xs font-normal outline-none focus:border-[#555]"
                placeholder={t.email}
              />
            </label>

            <label className="mt-5 block text-[10px] font-bold">
              {t.messageField}{" "}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 block h-24 w-full resize-y rounded border border-[#ddd] px-3 py-2 text-xs font-normal outline-none focus:border-[#555]"
                placeholder={t.messageField}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full bg-[#171717] py-3 text-xs font-semibold text-white disabled:opacity-50"
            >
              {loading
                ? language === "en"
                  ? "Sending..."
                  : "Enviando..."
                : `${t.send} ↗`}
            </button>

            {statusMessage && (
              <p
                className={`mt-4 text-center text-[10px] font-semibold ${
                  statusMessage.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage.text}
              </p>
            )}
          </form>
        </div>
      </Shell>
      <Footer language={language} />
    </>
  );
}