const PT_BR = {
  name: "Heitor Albuquerque de Oliveira",
  links: [
    { label: "albuquerquedeoliveiraheitor@gmail.com", url: "mailto:albuquerquedeoliveiraheitor@gmail.com" },
    {
      label: "linkedin.com/in/heitoralbuoliveira/",
      url: "https://www.linkedin.com/in/heitoralbuoliveira/",
    },
    { label: "github.com/heitor-oliveira03", url: "https://github.com/heitor-oliveira03" },
  ],
  about: "Resumo Profissional",
  aboutText:
    "Desenvolvedor FullStack com 1+ ano de experiência prática em projetos de alta complexidade, desenvolvendo aplicações web utilizando IA como parte do fluxo. Trabalho de forma independente, com forte atenção a detalhes, traduzindo regras de negócio em código limpo, escalável e manutenível, e também modernizando sistemas legados, elevando-os à nível de produção. Experiência comprovada no desenvolvimento de aplicações web críticas, integrações sensíveis, validações precisas e velocidade de entrega. Conhecimento de nível avançado em Typescript, React, Next.js, Node.js, NestJS, PostgreSQL, Docker, CI/CD e AWS, com foco em testes, validação e refinamento de soluções geradas com IA.",
  skillsHeader: "Habilidades técnicas",
  skills: [
    {
      label: "Linguagens",
      value: "TypeScript, JavaScript, Node.js, Python.",
    },
    {
      label: "Frontend & UI",
      value:
        "React, Next.js, Vite, Tailwind, Sass, Shadcn/ui, Zustand, React Query, TanStack Table, React Hook Form, Zod, Server Actions, Framer Motion, GSAP, Three.js — com foco em acessibilidade, responsividade e Mobile First.",
    },
    {
      label: "Backend & Infraestrutura",
      value:
        "Python, Django, Express.js, REST APIs, WebSockets",
    },
    {
      label: "Cloud & DevOps",
      value:
        "AWS (S3, CloudFront), Docker, CI/CD (GitHub Actions, Vercel), Git, GitHub, BitBucket, Azure.",
    },
    {
      label: "Dados",
      value: "SQL (PostgreSQL)",
    },
    {
      label: "IA & Desenvolvimento",
      value:
        "Configuração de agentes, subagentes, regras e skills específicas por projeto, integração com LLMs (OpenAI, Claude), Prompt Engineering, validação e refinamento de código gerado por IA.",
    },
  ],
  experienceHeader: "Experiência Profissional",
  experience: [
    {
      role: "Desenvolvedor Fullstack",
      company: "NOCLAF",
      period: "Jun. 2025 – Atual",
      projects: [
        {
          name: "Licita Premium — Plataforma de Pregão Eletrônico",
          bullets: [
            "Atuei como full-stack na construção de uma plataforma de pregão eletrônico regida pela Lei 14.133/2021, cobrindo back (Django REST + Channels, 55 models e 48 viewsets) e front (React + TypeScript, 110 rotas e ~50 serviços de API), com quatro perfis distintos — pregoeiro, fornecedor, cidadão (controle social) e admin — em produção.",
            "Projetei a sala de disputa em tempo real com WebSocket (Django Channels + Redis): 25 tipos de evento em canais segregados por lote, leilão, staff e usuário, com anonimato dos fornecedores garantido no servidor via payload mascarado por perfil, recuperação de gap na reconexão e ticket de handshake de curta duração substituindo o JWT exposto na URL.",
            "Implementei o rito recursal e os prazos legais da Lei 14.133 (intenção de recurso → recurso → contrarrazão → julgamento) com contagem em dias úteis e feriados nacionais, deadlines absolutos à prova de drift de relógio e jobs agendados (APScheduler) para transição automática de fase.",
          ],
        },
        {
          name: "Plataforma de E-commerce 360° — GOATCOM",
          bullets: [
            "Atuei em todos os micro-frontends (Angular e Next.js) de uma plataforma completa de gestão de e-commerce similar ao Shopify, com 10+ lojas em produção e R$50K+ transacionados.",
            "Contribuí no desenvolvimento de uma plataforma com 17+ integrações cobrindo publicidade, ERP, marketing, pagamentos, pixels, emissão de notas, fretes e notificações, entregando visibilidade 360° das operações para profissionais de marketing digital.",
          ],
        },
        {
          name: "Sistema de Avaliação Socioeconômica - PUC-Rio",
          bullets: [
            "Assumi sozinho projeto estagnado há 6 meses, entregando em produção em menos de 2 meses com Next.js e Express.js, atendendo todos os alunos inscritos e 25+ coordenadores e assistentes.",
            "Modernizei um sistema majoritariamente manual, centralizando e automatizando toda a lógica de negócio e reduzindo significativamente o tempo do processo de avaliação.",
            "Refatorei o sistema de validações com schema global em Zod compartilhado entre front e back, aplicando tipagem avançada e inferência de tipos para eliminar inconsistências entre camadas e facilitar manutenções futuras.",
          ],
        },
      ],
    },
  ],
  educationHeader: "Educação",
  education: [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "UNIFESO - Centro Educacional Serra dos Órgãos",
      period: "Ago. 2024 – Dez. 2026",
    },
  ],
  languageHeader: "Linguagens",
  languages: ["Inglês: Fluente", "Português: Nativo"],
};
