import { getContent, labels } from './ResumeUtils.jsx'

export const Arrow = () => <span aria-hidden="true">↗</span>

export function Shell({ eyebrow, title, description, children }) {
  return (
    <section className="mx-auto max-w-[1020px] px-6 pb-20 pt-12 lg:px-10 lg:pt-16">
      <p className="text-xs font-bold uppercase tracking-wide text-[#777]">{eyebrow}</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#666]">{description}</p>}
      {children}
    </section>
  )
}

export function Footer({ language }) {
  const t = labels[language]
  const data = getContent(language)

  return (
    <footer className="border-t border-[#eee] bg-[#fafafa] px-6 py-10 text-xs text-[#777]">
      <div className="mx-auto grid max-w-[1020px] gap-8 sm:grid-cols-3">
        <div>
          <strong className="text-sm text-[#222]">{t.portfolio}</strong>
          <p className="mt-3 leading-relaxed">{data.name}</p>
        </div>
        <div>
          <strong className="text-sm text-[#222]">{t.quick}</strong>
          <div className="mt-3 grid gap-2">
            <a href="/about">{t.about}</a>
            <a href="/projects">{t.projects}</a>
            <a href="/experience">{t.experience}</a>
            <a href="/contact">{t.contact}</a>
          </div>
        </div>
        <div>
          <strong className="text-sm text-[#222]">{t.social}</strong>
          <div className="mt-3 flex gap-4 text-base">
            <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={`mailto:${data.email}`} aria-label={t.email}>✉</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1020px] border-t border-[#e5e5e5] pt-5 text-[10px]">
        © 2026 {data.name}. {t.rights}
      </div>
    </footer>
  )
}

export function Info({ title, text }) {
  return (
    <div>
      <h3 className="font-bold">◉ {title}</h3>
      <p className="mt-2 leading-relaxed text-[#777]">{text}</p>
    </div>
  )
}

export function SkillGroups({ language }) {
  const groups = language === 'en'
    ? [['Front-end', 'HTML', 'CSS', 'JavaScript', 'React'], ['Back-end', 'Java', 'Spring Boot', 'Node.js', 'C#'], ['Databases', 'PostgreSQL', 'MySQL', 'MongoDB'], ['Tools', 'Docker', 'Cloudflare', 'Git'], ['Other Technologies', 'GCP', 'BigQuery', 'Apps Script']]
    : [['Front-end', 'HTML', 'CSS', 'JavaScript', 'React'], ['Back-end', 'Java', 'Spring Boot', 'Node.js', 'C#'], ['Banco de Dados', 'PostgreSQL', 'MySQL', 'MongoDB'], ['Ferramentas', 'Docker', 'Cloudflare', 'Git'], ['Outras Tecnologias', 'GCP', 'BigQuery', 'Apps Script']]

  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {groups.map(([title, ...items]) => (
        <div key={title} className="border border-[#e3e3e3] p-4">
          <strong className="text-xs">{title}</strong>
          <div className="mt-3 flex flex-wrap gap-1">
            {items.map((item) => <span key={item} className="bg-[#f1f1f1] px-2 py-1 text-[10px] text-[#555]">{item}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}
