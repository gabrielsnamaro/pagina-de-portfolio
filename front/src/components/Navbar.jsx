import { resume } from './resumeData'

export default function Navbar({ page, navigate }) {
  const links = [['home', 'Início'], ['about', 'Sobre Mim'], ['projects', 'Projetos'], ['experience', 'Experiência'], ['contact', 'Contato']]
  return <header className="border-b border-[#e5e8f0] bg-white"><nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Navegação principal"><button onClick={() => navigate('home')} className="text-xl font-bold tracking-tight text-[#3157c8]">Gabriel<span className="text-[#151b2d]">.</span></button><div className="hidden items-center gap-8 text-sm font-medium md:flex">{links.map(([key, label]) => <button key={key} onClick={() => navigate(key)} className={page === key ? 'text-[#3157c8]' : 'text-[#596176] hover:text-[#3157c8]'}>{label}</button>)}</div><a href={`mailto:${resume.email}`} className="rounded-lg bg-[#3157c8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2547aa]">Vamos conversar</a></nav></header>
}
