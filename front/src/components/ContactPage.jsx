import { useState } from "react";
import { Footer, Shell, Arrow } from "./ResumeShared";
import { getContent, handleContactSubmit, labels } from "./ResumeUtils.jsx";

export default function ContactPage({ language }) {
  const t = labels[language];
  const data = getContent(language);
  const [mailtoLink, setMailtoLink] = useState("");
  const contactItems = [
    [t.email, data.email, `mailto:${data.email}`],
    [t.phone, data.phone, `tel:${data.phone.replace(/[^\d+]/g, "")}`],
    ["LinkedIn", "linkedin.com/in/gabrielamaro2006", data.linkedin],
  ];

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
            onSubmit={(event) => setMailtoLink(handleContactSubmit(event, language))}
          >
            <h2 className="text-base font-bold">{t.message}</h2>
            <label className="mt-5 block text-[10px] font-bold">
              {t.name} <em className="font-normal text-[#999]">{t.required}</em>
              <input
                name="name"
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
                required
                className="mt-2 block w-full rounded border border-[#ddd] px-3 py-2 text-xs font-normal outline-none focus:border-[#555]"
                placeholder={t.email}
              />
            </label>
            <label className="mt-5 block text-[10px] font-bold">
              {t.messageField}{" "}
              <textarea
                name="message"
                required
                className="mt-2 block h-24 w-full resize-y rounded border border-[#ddd] px-3 py-2 text-xs font-normal outline-none focus:border-[#555]"
                placeholder={t.messageField}
              />
            </label>
            <button
              type="submit"
              className="mt-5 w-full bg-[#171717] py-3 text-xs font-semibold text-white"
            >
              {t.send} ↗
            </button>
            {mailtoLink && (
              <p className="mt-4 text-center text-[10px] text-[#777]">
                {language === "en"
                  ? "If your email app did not open, use this link:"
                  : "Se o cliente de e-mail não abriu, use este link:"}{" "}
                <a className="font-bold underline" href={mailtoLink}>
                  {language === "en" ? "Open email" : "Abrir e-mail"}
                </a>
              </p>
            )}
          </form>
        </div>
      </Shell>
      <Footer language={language} />
    </>
  );
}
