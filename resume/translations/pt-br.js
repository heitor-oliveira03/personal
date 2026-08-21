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
    "Desenvolvedor FullStack com 1+ ano de experiência prática em projetos de alta complexidade, usando IA como parte do fluxo. Trabalho de forma independente, traduzindo regras de negócio em código limpo e manutenível e modernizando sistemas legados até nível de produção, em aplicações web críticas, integrações sensíveis e validações precisas. Conhecimento avançado em TypeScript, React, Next.js, Node.js, PostgreSQL, CI/CD e AWS, com foco em testes e refinamento de soluções geradas com IA.",
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
            "Implementei o rito recursal da Lei 14.133 (intenção → recurso → contrarrazão → julgamento) com contagem em dias úteis e feriados nacionais, deadlines à prova de drift de relógio e jobs (APScheduler) para transição automática de fase.",
          ],
        },
        {
          name: "BMP (MoneyP) — Site institucional",
          bullets: [
            "Atuei como full-stack na reconstrução do site e do CMS de uma fintech de banking-as-a-service, cobrindo back (Django REST, sobre MySQL) e front (Next.js 15 App Router + TypeScript), com deploy em ECS Fargate provisionado por Terraform.",
            "Construí um importador de WordPress do 0 (XML WXR → News/Tag/Author/ImageVideo): parse com defusedxml contra XXE, download de mídia com guarda anti-SSRF (só IP público, sem seguir redirect, teto de tamanho), correção de mojibake e shortcodes do conteúdo legado, e reescrita das URLs de imagem para uma rota que assina a chave do S3 a cada request",
            "Projetei o modelo de páginas do admin (Menu + Page): o CMS cria o item de navegação e a página, e a rota nasce no site sem deploy — slug com desempate por sufixo, allowlist de slugs reservados contra colisão com rota do Next e HTML sanitizado com nh3 na escrita."
          ],
        },
        {
          name: "Passos Verdes — Site e Plataforma de Inscrições para Corridas de Rua",
          bullets: [
            "Construí sozinho, front e back, a plataforma de uma organizadora de corridas de rua: site institucional em Next.js 16 (App Router, React 19, TypeScript strict), e uma API REST em Express 5 + Postgres 17 (auth, eventos, banners, inscrições).",
            "Blindei a fronteira da API contra erros silenciosos de data e de escrita: parser de date desligado no driver para 2026-04-12 não virar 2026-04-11T21:00Z no JSON, validação de ISO obrigatória contra leitura MM/DD, whitelist de colunas em todo INSERT/UPDATE contra mass assignment, e 6 códigos SQLSTATE traduzidos em respostas HTTP acionáveis sem vazar a linha do banco.",
            "Cuidei do acabamento do front como parte do produto: design system em variáveis CSS do Tailwind v4 com tema escuro do admin por troca de tokens, prefers-reduced-motion em todas as animações, e planilha de participantes em CSV que abre direto no Excel pt-BR com a idade calculada na data da prova.",
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
