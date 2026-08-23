import { resume, resumeEnglish } from "./resumeData";

export const labels = {
  pt: {
    about: "Sobre Mim",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
    quick: "Links Rápidos",
    social: "Social",
    portfolio: "Portfólio",
    rights: "Todos os direitos reservados.",
    hello: "Olá, eu sou",
    seeProjects: "Ver Projetos",
    profile: "Perfil profissional",
    objective: "Objetivo profissional",
    education: "Formação Acadêmica",
    area: "Área de Atuação",
    interests: "Principais Interesses",
    skills: "Habilidades",
    projectsTitle: "Meus Projetos",
    projectsDesc:
      "Conheça projetos desenvolvidos ao longo da minha formação e experiência profissional.",
    project: "Projeto",
    view: "Ver Projeto",
    github: "GitHub",
    history: "Histórico profissional",
    experienceDesc:
      "Minha trajetória profissional e as principais atividades desenvolvidas em cada posição.",
    exp: "Experiência",
    academic: "Formação acadêmica",
    contactDesc:
      "Entre em contato para conversarmos sobre oportunidades, projetos e tecnologia.",
    contactInfo: "Informações de Contato",
    message: "Envie uma mensagem",
    required: "(Obrigatório)",
    name: "Nome",
    email: "E-mail",
    phone: "Telefone",
    messageField: "Mensagem",
    send: "Enviar",
    age: "anos",
    license: "CNH",
  },
  en: {
    about: "About Me",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    quick: "Quick Links",
    social: "Social",
    portfolio: "Portfolio",
    rights: "All rights reserved.",
    hello: "Hello, I am",
    seeProjects: "View Projects",
    profile: "Professional profile",
    objective: "Professional objective",
    education: "Education",
    area: "Area of expertise",
    interests: "Main interests",
    skills: "Skills",
    projectsTitle: "My Projects",
    projectsDesc:
      "Explore projects developed throughout my education and professional experience.",
    project: "Project",
    view: "View Project",
    github: "GitHub",
    history: "Professional experience",
    experienceDesc:
      "My professional journey and the main activities developed in each position.",
    exp: "Experience",
    academic: "Academic background",
    contactDesc:
      "Get in touch to discuss opportunities, projects and technology.",
    contactInfo: "Contact information",
    message: "Send a message",
    required: "(Required)",
    name: "Name",
    email: "Email",
    phone: "Phone",
    messageField: "Message",
    send: "Send",
    age: "years old",
    license: "License",
  },
};

export const getContent = (language) =>
  language === "en" ? resumeEnglish : resume;

export function handleContactSubmit(event, language) {
  event.preventDefault();
  
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";
  const data = getContent(language);
  
  // Verifica se o email existe
  if (!data.email) {
    console.error("Email não encontrado nos dados do currículo");
    alert("Erro: email de destino não configurado");
    return;
  }
  
  const subject = language === "en"
    ? `Contact from ${name}`
    : `Contato de ${name}`;
    
  const labelName = language === "en" ? "Name" : "Nome";
  const labelEmail = language === "en" ? "Email" : "E-mail";
  
  const body = `${labelName}: ${name}\n${labelEmail}: ${email}\n\n${message}`;
  
  const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  console.log("Abrindo mailto:", mailtoLink);

  const mailtoAnchor = document.createElement("a");
  mailtoAnchor.href = mailtoLink;
  mailtoAnchor.click();

  return mailtoLink;
}
