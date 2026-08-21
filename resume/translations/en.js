const EN = {
  name: "Heitor Albuquerque de Oliveira",
  links: [
    { label: "albuquerquedeoliveiraheitor@gmail.com", url: "mailto:albuquerquedeoliveiraheitor@gmail.com" },
    {
      label: "linkedin.com/in/heitoralbuoliveira/",
      url: "https://www.linkedin.com/in/heitoralbuoliveira/",
    },
    { label: "github.com/heitor-oliveira03", url: "https://github.com/heitor-oliveira03" },
  ],
  about: "Professional Summary",
  aboutText:
    "Full-stack developer with 1+ year of hands-on experience on high-complexity projects, using AI as part of the workflow. I work independently, translating business rules into clean, maintainable code and modernizing legacy systems up to production grade, on business-critical applications with sensitive integrations and precise validation. Advanced knowledge of TypeScript, React, Next.js, Node.js, PostgreSQL, Docker, CI/CD, and AWS, with a focus on testing and refining AI-generated solutions.",
  skillsHeader: "Technical Skills",
  skills: [
    {
      label: "Languages",
      value: "TypeScript, JavaScript, Node.js, Python.",
    },
    {
      label: "Frontend & UI",
      value:
        "React, Next.js, Vite, Tailwind, Sass, Shadcn/ui, Zustand, React Query, TanStack Table, React Hook Form, Zod, Server Actions, Framer Motion, GSAP, Three.js — with a focus on accessibility, responsiveness, and Mobile First.",
    },
    {
      label: "Backend & Infrastructure",
      value: "Python, Django, Express.js, REST APIs, WebSockets",
    },
    {
      label: "Cloud & DevOps",
      value:
        "AWS (S3, CloudFront), Docker, CI/CD (GitHub Actions, Vercel), Git, GitHub, BitBucket, Azure.",
    },
    {
      label: "Data",
      value: "SQL (PostgreSQL)",
    },
    {
      label: "AI & Development",
      value:
        "Setting up project-specific agents, subagents, rules, and skills, LLM integration (OpenAI, Claude), prompt engineering, validation and refinement of AI-generated code.",
    },
  ],
  experienceHeader: "Professional Experience",
  experience: [
    {
      role: "Fullstack Developer",
      company: "NOCLAF",
      period: "Jun. 2025 – Present",
      projects: [
        {
          name: "Licita Premium — Public E-Procurement Auction Platform",
          bullets: [
            "Worked full-stack building a public e-procurement auction platform governed by Brazilian Law 14.133/2021, covering the back end (Django REST + Channels, 55 models and 48 viewsets) and the front end (React + TypeScript, 110 routes and ~50 API services), with four distinct roles in production — auctioneer, supplier, citizen (public oversight), and admin.",
            "Designed the real-time bidding room over WebSocket (Django Channels + Redis): 25 event types on channels segregated by lot, auction, staff, and user, with supplier anonymity enforced server-side via a role-masked payload, gap recovery on reconnect, and a short-lived handshake ticket replacing the JWT exposed in the URL.",
            "Implemented the appeal rite of Law 14.133 (notice of appeal → appeal → counterargument → ruling) with business-day counting against holidays, deadlines immune to clock drift, and scheduled jobs (APScheduler) for automatic phase transitions.",
          ],
        },
        {
          name: "BMP (MoneyP) — Corporate Website",
          bullets: [
            "Worked full-stack rebuilding the website and CMS of a banking-as-a-service fintech, covering the back end (Django REST over MySQL) and the front end (Next.js 15 App Router + TypeScript), deployed to ECS Fargate provisioned with Terraform.",
            "Built a WordPress importer from scratch (XML WXR → News/Tag/Author/ImageVideo): parsing with defusedxml against XXE, media download behind an anti-SSRF guard (public IPs only, no redirect following, size ceiling), mojibake and shortcode cleanup of the legacy content, and image URL rewriting to a route that signs the S3 key on every request.",
            "Designed the admin-driven page model (Menu + Page): the CMS creates the nav item and the page, and the route goes live with no deploy — slug with suffix tie-breaking, an allowlist of reserved slugs against Next route collisions, and editor HTML sanitized with nh3 on write.",
          ],
        },
        {
          name: "Passos Verdes — Website and Registration Platform for Road Races",
          bullets: [
            "Built the platform for a road-race organizer single-handedly, front and back: a corporate site in Next.js 16 (App Router, React 19, TypeScript strict) and a REST API in Express 5 + Postgres 17 (auth, events, banners, registrations).",
            "Hardened the API boundary against silent date and write errors: the driver's date-type parser disabled so 2026-04-12 doesn't turn into 2026-04-11T21:00Z in the JSON, mandatory ISO validation against MM/DD misreads, column whitelisting on every INSERT/UPDATE against mass assignment, and 6 SQLSTATE codes translated into actionable HTTP responses without leaking the database row.",
            "Treated front-end finish as part of the product: a design system in Tailwind v4 CSS variables where the admin's dark theme swaps tokens, prefers-reduced-motion across animations, and a participant CSV that opens in pt-BR Excel with age computed at race day.",
          ],
        },
      ],
    },
  ],
  educationHeader: "Education",
  education: [
    {
      degree: "Associate Degree in Systems Analysis and Development",
      institution: "UNIFESO - Centro Educacional Serra dos Órgãos",
      period: "Aug. 2024 – Dec. 2026",
    },
  ],
  languageHeader: "Languages",
  languages: ["English: Fluent", "Portuguese: Native"],
};
