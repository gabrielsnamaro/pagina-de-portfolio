import { Footer, Shell } from "./ResumeShared";
import { getContent, labels } from "./ResumeUtils.jsx";

export default function ProjectsPage({ language }) {
  const t = labels[language];
  const data = getContent(language);

  return (
    <>
      <Shell
        eyebrow={t.projects}
        title={t.projectsTitle}
        description={t.projectsDesc}
      >
        <div className="mt-10 border-l border-[#ddd] pl-6">
          {data.projects.map((project, index) => (
            <article key={project.title} className="relative mb-10">
              <span
                className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white ${index ? "bg-[#ccc]" : "bg-[#171717]"}`}
              />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <span className="bg-[#f1f1f1] px-2 py-1 text-[10px]">
                  {t.project} {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-xs leading-relaxed text-[#666]">
                {project.description}
              </p>
              <div className="mt-3 flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#ddd] px-2 py-1 text-[10px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#171717] px-4 py-2 text-[10px] text-white"
                >
                  ↗ {t.view}
                </a>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[#ddd] px-4 py-2 text-[10px]"
                >
                  ⌘ {t.github}
                </a>
              </div>
            </article>
          ))}
        </div>
      </Shell>
      <Footer language={language} />
    </>
  );
}
