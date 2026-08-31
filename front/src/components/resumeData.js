export const resume = {
  name: 'Gabriel Silva Neiva Amaro',
  title: 'Desenvolvedor de Software',
  objective: 'Crescimento profissional na área de TI por meio de estágio, com foco em desenvolvimento de software e automação de processos.',
  summary: 'Sou dinâmico, responsável e comprometido com o trabalho. Compreendo a importância do trabalho em equipe para o alcance das metas e entrega de resultados. Aprendo com facilidade e sou persistente diante dos desafios.',
  phone: '(31) 99317-3717',
  email: 'gabrielsn.amaro@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielamaro2006/',
  experience: [
    ['Ago/2025 - atual', 'Estagiário de Desenvolvimento de Software, Automações e QA', 'Smart Leilões', 'Desenvolvimento de soluções em software e automação de processos com Node.js, Google Apps Script, Google Cloud Platform e Cloudflare. Atuação como QA, realizando testes caixa branca e caixa preta, validação de funcionalidades e garantia de qualidade.'],
    ['Jan/2025 - Jun/2025', 'Atendente Júnior', 'VGX Contact Center', 'Atendimento ao cliente e suporte às rotinas operacionais da empresa.'],
  ],
  education: [
    ['Fev/2025 - Dez/2028', 'Bacharelado em Engenharia de Software', 'PUC Lourdes · 4º período'],
    ['Concluído em Dez/2024', 'Técnico em Informática para Internet - Desenvolvimento de Software', 'SENAI'],
    ['Concluído em Dez/2024', 'Ensino Médio', 'SESI Horto'],
  ],
  skills: ['Java · Spring Boot', 'C#', 'C++', 'C', 'Node.js', 'HTML', 'CSS · Bootstrap', 'JavaScript · React', 'PHP', 'PostgreSQL', 'MySQL', 'BigQuery', 'MongoDB', 'Docker', 'Google Cloud Platform', 'Cloudflare', 'Google Apps Script', 'Pacote Office avançado', 'Inglês avançado', 'Codex', 'Claude Code'],
  projects: [
    { title: 'Simulador de Algoritmos de Escalonamento', description: 'Aplicação em Java que simula o escalonamento de processos na CPU para comparar diferentes políticas de gerenciamento. O projeto acompanha a chegada e a execução dos processos, as filas de prioridade e eventos de E/S, e calcula métricas como tempo médio de espera, turnaround médio e throughput.', tags: ['Java', 'Sistemas Operacionais'], url: 'https://github.com/gabrielsnamaro/Scheduling_Algorithms_Simulator_OS.git' },
    { title: 'Portfólio pessoal web', description: 'Aplicação web dinâmica e responsiva criada para apresentar a trajetória profissional, formação, habilidades, experiências e projetos de Gabriel em uma navegação organizada.', tags: ['React', 'JavaScript', 'Web'], url: 'https://github.com/gabrielsnamaro/pagina-de-portfolio' },
    { 
      title: 'Notion Dynamic Manager', 
      description: 'Seu workspace pessoal para automatizar fluxos de estudo, organizar tarefas e planejar suas revisões ativas (Revisões Espaçadas).', 
      tags: ['Notion', 'Automations', 'API'], 
      url: 'https://github.com/gabrielsnamaro/Personal_Academic_Notion_Automations',
      images: ['/notion1.png', '/notion2.png', '/notion3.png']
    }
  ],
}

export const resumeEnglish = {
  ...resume,
  title: 'Software Developer',
  objective: 'Professional growth in Information Technology through an internship, focused on software development and process automation.',
  summary: 'I am dynamic, responsible, and committed to my work. I understand the importance of teamwork to achieve goals and deliver results. I learn quickly and remain persistent when facing challenges.',
  experience: [
    ['Aug/2025 - present', 'Software Development, Automation and QA Intern', 'Smart Leilões', 'Developing software solutions and process automations with Node.js, Google Apps Script, Google Cloud Platform and Cloudflare. Also working in QA through white-box and black-box testing, feature validation and delivery quality assurance.'],
    ['Jan/2025 - Jun/2025', 'Junior Customer Service Representative', 'VGX Contact Center', 'Customer service and support for the company\'s operational routines.'],
  ],
  education: [
    ['Feb/2025 - Dec/2028', 'Bachelor\'s Degree in Software Engineering', 'PUC Lourdes · 4th semester'],
    ['Completed in Dec/2024', 'Technical Degree in Internet Computing - Software Development', 'SENAI'],
    ['Completed in Dec/2024', 'High School', 'SESI Horto'],
  ],
  skills: ['Java · Spring Boot', 'C#', 'C++', 'C', 'Node.js', 'HTML', 'CSS · Bootstrap', 'JavaScript · React', 'PHP', 'PostgreSQL', 'MySQL', 'BigQuery', 'MongoDB', 'Docker', 'Google Cloud Platform', 'Cloudflare', 'Google Apps Script', 'Advanced Office', 'Advanced English', 'Codex', 'Claude Code'],
  projects: [
    { title: 'Scheduling Algorithms Simulator', description: 'Java application that simulates CPU process scheduling to compare different management policies. It tracks process arrivals, execution, priority queues and I/O events, and calculates average waiting time, average turnaround time and throughput.', tags: ['Java', 'Operating Systems'], url: 'https://github.com/gabrielsnamaro/Scheduling_Algorithms_Simulator_OS.git' },
    { title: 'Personal web portfolio', description: 'Dynamic and responsive web application created to present Gabriel\'s professional background, education, skills, experience and projects through an organized navigation.', tags: ['React', 'JavaScript', 'Web'], url: 'https://github.com/gabrielsnamaro/pagina-de-portfolio' },
    { 
      title: 'Notion Dynamic Manager', 
      description: 'Your personal workspace to automate study workflows, organize tasks, and plan your active revisions (Spaced Repetition).', 
      tags: ['Notion', 'Automations', 'API'], 
      url: 'https://github.com/gabrielsnamaro/Personal_Academic_Notion_Automations',
      images: ['/notion1.png', '/notion2.png', '/notion3.png']
    }
  ],
}
