export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      toggleMenu: "Alternar menú",
      switchLang: "English",
    },
    hero: {
      status: "Disponible para nuevos proyectos",
      greeting: "Hola, soy",
      name: "Andrés Cortés",
      role: "Desarrollador Full-Stack",
      subrole: "Ingeniería de IA, React y Backend",
      description:
        "Construyendo sistemas impulsados por IA, backends resilientes con .NET y Python, interfaces reactivas en React y soluciones analíticas con datos accionables.",
      viewWork: "Ver mi trabajo",
      downloadCv: "Descargar CV",
      stats: {
        years: { key: "5+", val: "Años programando" },
        react: { key: "React", val: "Stack Frontend" },
        data: { key: "Datos", val: "Analítica & Python" },
        english: { key: "C2", val: "Nivel de inglés" },
      },
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Ingeniería de sistemas, IA, interfaces y datos",
      bio1: "Soy <name>Andrés Cortés</name>, desarrollador full-stack e ingeniero de IA con <exp>5 años de experiencia programando</exp>. Me especializo en construir soluciones digitales integrales: desde arquitecturas backend escalables (.NET / Python) y <ai>sistemas potenciados por IA (RAG / LLMs)</ai> hasta aplicaciones frontend reactivas en <react>React</react>.",
      bio2: "Con un fuerte enfoque en <focus>Ingeniería de IA y Analítica de Datos</focus>, diseño flujos inteligentes, integro bases de datos vectoriales y aplico Python, Pandas y SQL para depurar, procesar, analizar y visualizar datos que generan conclusiones estratégicas.",
      bio3: "Soy <bilingual>completamente bilingüe (Inglés C2)</bilingual>, con una mentalidad enfocada en arquitectura limpia (Clean Architecture), aprendizaje continuo y colaboración de alto impacto en equipos globales.",
      terminal: {
        ready: "Listo para construir",
        roleVal: "Full-Stack & AI Engineer",
        expVal: "5+ Años",
        languagesVal: ["Español (Nativo)", "Inglés (C2 Fluido)"],
        mindsetVal: "Clean architecture, sistemas robustos & data insights",
      },
      highlights: [
        {
          title: "Ingeniería de IA & Sistemas LLM",
          body: "Desarrollo de aplicaciones inteligentes, pipelines RAG, búsqueda vectorial y agentes autónomos impulsados por LLMs modernos.",
        },
        {
          title: "React Moderno & Frontend",
          body: "Diseño de interfaces rápidas, responsivas e intuitivas con React, TypeScript y Tailwind CSS, priorizando la experiencia de usuario y accesibilidad.",
        },
        {
          title: "Análisis de Datos & Insights",
          body: "Extracción de valor y patrones en conjuntos de datos complejos mediante Python, Pandas y SQL para fundamentar decisiones estratégicas.",
        },
        {
          title: "Formación Académica & Intensiva",
          body: "Estudios universitarios complementados con formación intensiva en RIWI, afianzando buenas prácticas de ingeniería en flujos reales de colaboración.",
        },
        {
          title: "Completamente Bilingüe",
          body: "Inglés C2. Trabajo, redacto documentación técnica y me comunico con equipos internacionales con total fluidez.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack técnico",
      title: "Herramientas y tecnologías con las que trabajo",
      categories: [
        {
          title: "AI Engineering & LLMs",
          tagline: "Sistemas inteligentes, RAG y agentes",
          items: [
            "LLM APIs & Prompting",
            "Arquitectura RAG",
            "Semantic Kernel & LangChain",
            "Vector DBs (pgvector / Qdrant)",
            "Agentes IA & Function Calling",
          ],
        },
        {
          title: "Backend & Arquitectura de APIs",
          tagline: "Servicios escalables, seguros y limpios",
          items: [
            "C# / .NET 8+",
            "Python / FastAPI",
            "RESTful Clean Architecture",
            "Entity Framework & Dapper",
            "Microservicios & Auth (JWT)",
          ],
        },
        {
          title: "Frontend & React",
          tagline: "Interfaces interactivas, fluidas y modernas",
          items: [
            "React & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite & State Management",
            "UI Responsiva & Accesible",
          ],
        },
        {
          title: "Analítica de Datos & Insights",
          tagline: "Pipelines ETL y valor basado en datos",
          items: [
            "Python (Pandas, NumPy)",
            "Optimización SQL",
            "Limpieza de Datos & ETL",
            "Dashboards Interactivos",
            "Estadística Descriptiva",
          ],
        },
        {
          title: "Cloud & DevOps",
          tagline: "Contenedores, CI/CD y entornos Linux",
          items: [
            "Docker & Contenedores",
            "CI/CD (GitHub Actions)",
            "Linux (Xubuntu / Xfce)",
            "Automatización Fish Shell",
            "Despliegue Cloud & Edge",
          ],
        },
        {
          title: "Bases de Datos & Rendimiento",
          tagline: "Alto rendimiento, caché y modelado",
          items: [
            "PostgreSQL & SQL Server",
            "Modelado de Datos",
            "Redis (Caché & Colas)",
            "WebSockets & Event-Driven",
            "Optimización de Rendimiento",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Trabajos destacados",
      items: [
        {
          title: "Plataforma API Modular",
          description:
            "API REST en .NET 8 con Clean Architecture, autenticación JWT y endpoints versionados que dan servicio a múltiples clientes.",
          tags: ["C#", ".NET", "REST"],
        },
        {
          title: "Motor de Sincronización de Datos",
          description:
            "Worker en segundo plano que concilia registros entre bases de datos con reintentos, idempotencia y registro de auditoría completo.",
          tags: ["Python", "PostgreSQL", "Workers"],
        },
        {
          title: "Toolkit de Operaciones Linux",
          description:
            "Herramientas y scripts en Fish Shell que automatizan el aprovisionamiento, respaldos y despliegues en servidores Xubuntu.",
          tags: ["Linux", "Fish", "Infra"],
        },
      ],
      repoAria: "Repositorio GitHub de",
      demoAria: "Demostración en vivo de",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo sólido",
      description:
        "¿Tienes una plataforma de IA por construir, una API backend por diseñar, datos por analizar o buscas un ingeniero dedicado? Contáctame directamente a través de cualquiera de estos canales:",
      emailCopy: "Copiar correo",
      emailCopied: "¡Copiado!",
      emailToastSuccess: "¡Correo copiado al portapapeles!",
      emailToastError: "No se pudo copiar automáticamente",
      emailDirectPrompt: "Por favor escribe directamente a",
      linkedinBtn: "Conectar",
      githubBtn: "Repositorios",
      remoteStatus: "Disponible para oportunidades remotas en todo el mundo · UTC-5",
    },
    footer: {
      role: "Desarrollador Full-Stack",
      tagline: "Construido en Linux, con demasiado café.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      toggleMenu: "Toggle menu",
      switchLang: "Español",
    },
    hero: {
      status: "Available for new projects",
      greeting: "Hi, I'm",
      name: "Andrés Cortés",
      role: "Full-Stack Developer",
      subrole: "AI Engineering, React & Backend",
      description:
        "Building AI-driven systems, resilient backends with .NET & Python, dynamic React frontends, and insightful data solutions.",
      viewWork: "View My Work",
      downloadCv: "Download CV",
      stats: {
        years: { key: "5+", val: "Years coding" },
        react: { key: "React", val: "Frontend stack" },
        data: { key: "Data", val: "Analytics & Python" },
        english: { key: "C2", val: "English level" },
      },
    },
    about: {
      eyebrow: "About me",
      title: "Engineering systems, AI, interfaces & data",
      bio1: "I'm <name>Andrés Cortés</name>, a full-stack developer and AI engineer with <exp>5 years of programming experience</exp>. I specialize in building complete digital solutions — from scalable backend architectures (.NET / Python) and <ai>AI-powered systems (RAG / LLMs)</ai> to reactive frontend applications in <react>React</react>.",
      bio2: "With a strong focus on <focus>AI Engineering and Data Analysis</focus>, I design intelligent workflows, integrate vector databases, and utilize Python, Pandas, and SQL to clean, process, analyze, and visualize data that uncovers actionable insights.",
      bio3: "I'm <bilingual>completely bilingual (C2 English)</bilingual>, with a mindset geared towards clean architecture, continuous learning, and high-impact collaboration with international teams.",
      terminal: {
        ready: "Ready to build",
        roleVal: "Full-Stack & AI Engineer",
        expVal: "5+ Years",
        languagesVal: ["Spanish (Native)", "English (C2 Fluent)"],
        mindsetVal: "Clean architecture, robust systems & data insights",
      },
      highlights: [
        {
          title: "AI Engineering & LLM systems",
          body: "Building intelligent applications, RAG pipelines, vector search integration, and autonomous agents powered by modern LLMs.",
        },
        {
          title: "Modern React & frontend",
          body: "Designing fast, responsive, and intuitive interfaces with React, TypeScript, and Tailwind CSS, keeping user experience smooth and accessible.",
        },
        {
          title: "Data analysis & insights",
          body: "Extracting value and patterns from complex datasets using Python, Pandas, and SQL to support data-informed decision-making.",
        },
        {
          title: "Academic & intensive foundation",
          body: "University studies combined with intensive training at RIWI, grounding solid engineering practices in real collaborative workflows.",
        },
        {
          title: "Completely bilingual",
          body: "C2 English. I work, document, and communicate with international teams without friction.",
        },
      ],
    },
    skills: {
      eyebrow: "Tech stack",
      title: "Tools & technologies I work with",
      categories: [
        {
          title: "AI Engineering & LLMs",
          tagline: "Intelligent systems, RAG & agents",
          items: [
            "LLM APIs & Prompting",
            "RAG Architecture",
            "Semantic Kernel & LangChain",
            "Vector DBs (pgvector / Qdrant)",
            "AI Agents & Function Calling",
          ],
        },
        {
          title: "Backend & API Architecture",
          tagline: "Scalable, secure & clean services",
          items: [
            "C# / .NET 8+",
            "Python / FastAPI",
            "RESTful Clean Architecture",
            "Entity Framework & Dapper",
            "Microservices & Auth (JWT)",
          ],
        },
        {
          title: "Frontend & React",
          tagline: "Interactive, fluid & modern UI",
          items: [
            "React & Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vite & State Management",
            "Responsive & Accessible UI",
          ],
        },
        {
          title: "Data Analytics & Insights",
          tagline: "ETL pipelines & data-driven value",
          items: [
            "Python (Pandas, NumPy)",
            "SQL Query Optimization",
            "Data Cleaning & ETL",
            "Interactive Dashboards",
            "Statistical Insights",
          ],
        },
        {
          title: "Cloud & DevOps",
          tagline: "Containers, CI/CD & Linux environments",
          items: [
            "Docker & Containers",
            "CI/CD (GitHub Actions)",
            "Linux (Xubuntu / Xfce)",
            "Fish Shell Automation",
            "Cloud Deployment & Edge",
          ],
        },
        {
          title: "Databases & Performance",
          tagline: "High throughput, caching & modeling",
          items: [
            "PostgreSQL & SQL Server",
            "Database Modeling",
            "Redis (Cache & Queues)",
            "WebSockets & Event-Driven",
            "Performance Tuning",
          ],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      items: [
        {
          title: "Modular API Platform",
          description:
            "A .NET 8 REST API with clean architecture, JWT auth and versioned endpoints serving multiple client apps.",
          tags: ["C#", ".NET", "REST"],
        },
        {
          title: "Data Sync Engine",
          description:
            "Background worker that reconciles records across databases with retries, idempotency and full audit logging.",
          tags: ["Python", "PostgreSQL", "Workers"],
        },
        {
          title: "Linux Ops Toolkit",
          description:
            "Fish-shell tooling and scripts that automate provisioning, backups and deploys on Xubuntu servers.",
          tags: ["Linux", "Fish", "Infra"],
        },
      ],
      repoAria: "GitHub repository for",
      demoAria: "Live demo for",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something solid",
      description:
        "Have an AI platform to build, a backend API to architect, data to analyze, or looking for a dedicated engineer? Feel free to reach out directly through any of these channels:",
      emailCopy: "Copy Email",
      emailCopied: "Copied!",
      emailToastSuccess: "Email copied to clipboard!",
      emailToastError: "Could not copy email",
      emailDirectPrompt: "Please write directly to",
      linkedinBtn: "Connect",
      githubBtn: "Repositories",
      remoteStatus: "Available for remote opportunities worldwide · UTC-5",
    },
    footer: {
      role: "Full-Stack Developer",
      tagline: "Built on Linux, with too much coffee.",
    },
  },
};
