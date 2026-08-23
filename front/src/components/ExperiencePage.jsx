import { Footer, Shell } from './ResumeShared'
import { getContent, labels } from './ResumeUtils.jsx'

export default function ExperiencePage({ language }) {
  const t = labels[language]
  const data = getContent(language)

  return (
    <>
      <Shell eyebrow={t.experience} title={t.history} description={t.experienceDesc}>
        <div className="mt-10 grid gap-7">
          {data.experience.map(([period, role, company, description]) => (
            <article key={role} className="rounded-xl border border-[#ddd] p-6">
              <div className="flex flex-wrap-reverse items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase text-[#888]">{t.exp}</p>
                  <h2 className="mt-2 text-lg font-bold">{company}</h2>
                  <p className="text-xs text-[#555]">{role}</p>
                </div>
                <span className="bg-[#171717] px-2 py-1 text-[10px] text-white">{period}</span>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-[#666]">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-xl font-bold">{t.academic}</h2>
          <div className="mt-6 grid gap-5">
            {data.education.map(([period, course, institution]) => (
              <article key={course} className="border-l-2 border-[#171717] pl-5">
                <p className="text-[10px] uppercase text-[#888]">{period}</p>
                <h3 className="mt-2 text-sm font-bold">{course}</h3>
                <p className="mt-1 text-xs text-[#777]">{institution}</p>
              </article>
            ))}
          </div>
        </div>
      </Shell>
      <Footer language={language} />
    </>
  )
}
