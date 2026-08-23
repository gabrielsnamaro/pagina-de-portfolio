import { Footer, Shell } from './ResumeShared'
import { getContent, labels } from './ResumeUtils.jsx'

export default function AboutPage({ language }) {
  const t = labels[language]
  const data = getContent(language)

  return (
    <>
      <Shell
        eyebrow={t.about}
        title={language === 'en' ? 'Get to know my journey' : 'Conheça minha trajetória'}
        description={language === 'en' ? 'Learn about my education, professional profile and the technologies in my path.' : 'Um pouco sobre minha formação, perfil profissional e as tecnologias que fazem parte do meu caminho.'}
      >
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-xl font-bold">{t.profile}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#555]">{data.summary}</p>
            <h2 className="mt-10 text-xl font-bold">{t.objective}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#555]">{data.objective}</p>
          </div>
          <div className="border border-[#e3e3e3] bg-white p-6">
            <h2 className="text-xl font-bold">{language === 'en' ? 'Personal information' : 'Informações pessoais'}</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <div><dt className="text-xs uppercase text-[#999]">{language === 'en' ? 'Nationality' : 'Nacionalidade'}</dt><dd className="mt-1">{language === 'en' ? 'Brazilian' : 'Brasileiro'}</dd></div>
              <div><dt className="text-xs uppercase text-[#999]">{t.age}</dt><dd className="mt-1">20</dd></div>
              <div><dt className="text-xs uppercase text-[#999]">{t.license}</dt><dd className="mt-1">{language === 'en' ? 'Category B' : 'Categoria B'}</dd></div>
            </dl>
          </div>
        </div>
        <h2 className="mt-14 text-xl font-bold">{t.skills}</h2>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={t.skills}>
          {data.skills.map((skill) => <li key={skill} className="border border-[#ddd] bg-white px-3 py-2 text-xs">{skill}</li>)}
        </ul>
      </Shell>
      <Footer language={language} />
    </>
  )
}
