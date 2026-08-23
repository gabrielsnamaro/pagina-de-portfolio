import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  ProjectsPage,
} from "./ResumePages";

const pages = {
  home: HomePage,
  about: AboutPage,
  projects: ProjectsPage,
  experience: ExperiencePage,
  contact: ContactPage,
};

function getPage() {
  return window.location.pathname.replace("/", "") || "home";
}

export default function ResumePage() {
  const [page, setPage] = useState(() =>
    pages[getPage()] ? getPage() : "home",
  );
  const [language, setLanguage] = useState("pt");
  const navigate = (nextPage) => {
    window.history.pushState(
      {},
      "",
      nextPage === "home" ? "/" : `/${nextPage}`,
    );
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const onPopState = () => setPage(pages[getPage()] ? getPage() : "home");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const Page = pages[page];
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#151b2d]">
      <Navbar
        page={page}
        language={language}
        setLanguage={setLanguage}
        navigate={navigate}
      />
      <Page navigate={navigate} language={language} />
      <footer className="border-t border-[#e5e8f0] bg-[#151b2d] px-6 py-6 text-center text-xs text-[#9aa4bc]">
        © 2026 Gabriel Silva Neiva Amaro
      </footer>
    </main>
  );
}
