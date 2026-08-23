import { Arrow, Footer, Info, SkillGroups } from "./ResumeShared";
import { getContent, labels } from "./ResumeUtils.jsx";

export default function HomePage({ language, navigate }) {
  const t = labels[language];
  const data = getContent(language);

  return (
    <>
      <section className="mx-auto grid max-w-[1020px] items-center gap-10 px-6 py-14 lg:grid-cols-[1fr_300px] lg:px-10 lg:py-16">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-wide text-[#777]">
            {t.hello}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-2 text-base italic text-[#777]">{data.title}</p>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#555]">
            {data.objective}
          </p>
          <div className="mt-7 flex gap-3">
            <button
              onClick={() => navigate("projects")}
              className="bg-[#171717] px-5 py-3 text-xs font-semibold text-white"
            >
              {t.seeProjects} <Arrow />
            </button>
            <button
              onClick={() => navigate("contact")}
              className="border border-[#ddd] px-5 py-3 text-xs font-semibold"
            >
              {t.contact}
            </button>
          </div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-[300px] overflow-hidden border border-dashed border-[#ccc] bg-[#f2f2f2]">
          <img
            src="/profile.png"
            alt={
              language === "en"
                ? "Gabriel Silva Neiva Amaro profile photo"
                : "Foto de Gabriel Silva Neiva Amaro"
            }
            className="h-full w-full object-contain"
          />
        </div>
      </section>
      <section className="border-y border-[#eee]">
        <div className="mx-auto max-w-[1020px] px-6 py-12 lg:px-10">
          <h2 className="text-xl font-bold underline decoration-[#ddd] decoration-2 underline-offset-8">
            {t.about}
          </h2>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#555]">
            {data.summary}
          </p>
          <div className="mt-8 grid gap-6 text-xs sm:grid-cols-2">
            <Info title={t.education} text={data.education[0][1]} />
            <Info
              title={t.area}
              text={
                language === "en"
                  ? "Software development, automation and QA"
                  : "Desenvolvimento, automação e QA"
              }
            />
            <Info
              title={t.interests}
              text={
                language === "en"
                  ? "Technology and software development"
                  : "Tecnologia e desenvolvimento de software"
              }
            />
            <Info title={t.objective} text={data.objective} />
          </div>
          <h2 className="mt-12 text-xl font-bold">{t.skills}</h2>
          <SkillGroups language={language} />
        </div>
      </section>
      <Footer language={language} />
    </>
  );
}
