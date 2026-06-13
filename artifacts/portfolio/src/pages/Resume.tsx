import React from "react";
import { Printer, ArrowLeft } from "lucide-react";

export default function Resume() {
  const accent = "#0d9488"; // teal-600

  return (
    <>
      {/* ── Screen-only toolbar ─────────────────────── */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-900 border-b border-zinc-800">
        <a href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </a>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">Print / Save as PDF → Ctrl+P (or Cmd+P)</span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-sm transition-colors"
            style={{ background: accent }}
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Resume page ──────────────────────────────── */}
      <div
        id="resume-page"
        style={{
          fontFamily: "'Calibri', 'Arial', 'Helvetica', sans-serif",
          fontSize: "10.5pt",
          lineHeight: "1.38",
          color: "#111111",
          background: "#ffffff",
          width: "210mm",
          minHeight: "297mm",
          margin: "80px auto 40px",
          padding: "14mm 14mm 10mm",
          boxShadow: "0 4px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* ── Header ─────────────────────────────────── */}
        <div style={{ borderBottom: `3px solid ${accent}`, paddingBottom: "8px", marginBottom: "10px" }}>
          <h1 style={{ fontFamily: "'Calibri', 'Arial', sans-serif", fontSize: "22pt", fontWeight: 700, color: "#111", margin: 0, letterSpacing: "-0.3px" }}>
            BISMA ABBASI
          </h1>
          <p style={{ fontSize: "11pt", fontWeight: 600, color: accent, margin: "2px 0 6px", letterSpacing: "0.5px" }}>
            SOFTWARE ENGINEER  ·  BACKEND DEVELOPER  ·  AI INTEGRATION SPECIALIST
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", fontSize: "9pt", color: "#444" }}>
            {[
              { label: "+92 318-3094477" },
              { label: "engineerbismaabbasi@gmail.com" },
              { label: "linkedin.com/in/bisma-abbasi-softwareengineer" },
              { label: "github.com/BismaAbbasi" },
              { label: "Pakistan" },
            ].map(item => (
              <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>

        {/* ── Two columns ────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "14px" }}>

          {/* ── LEFT COLUMN ────────────────────────── */}
          <div style={{ borderRight: `1px solid #e5e7eb`, paddingRight: "12px" }}>

            {/* Skills */}
            <Section title="TECHNICAL SKILLS" accent={accent}>
              <SkillGroup label="Languages" items={["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "C++", "Java"]} />
              <SkillGroup label="Backend" items={["NestJS", "Node.js", "Express.js", "REST API Design", "JWT Auth", "RBAC Guards", "Middleware", "DTOs", "Microservices"]} />
              <SkillGroup label="AI & LLM" items={["Groq LLaMA 3.3", "OpenAI API", "Gemini API", "LangGraph", "LangChain", "Prompt Engineering", "RAG"]} />
              <SkillGroup label="Databases" items={["MongoDB Atlas", "Mongoose ODM", "PostgreSQL", "MySQL", "Supabase", "Firebase"]} />
              <SkillGroup label="Cloud & DevOps" items={["Railway", "Vercel", "Docker", "Git", "GitHub", "CI/CD", "Swagger/OpenAPI", "Multer"]} />
              <SkillGroup label="Core Concepts" items={["OOP", "DSA", "System Design", "API Security", "Agile/Scrum"]} />
            </Section>

            {/* Education */}
            <Section title="EDUCATION" accent={accent}>
              <p style={{ fontWeight: 700, fontSize: "9.5pt", color: "#111", margin: "0 0 1px" }}>B.E. Software Engineering</p>
              <p style={{ fontSize: "9pt", color: "#333", margin: "0 0 1px" }}>Quaid-e-Awam University, Pakistan</p>
              <p style={{ fontSize: "9pt", color: "#555", margin: "0 0 2px" }}>2021 – 2025</p>
              <p style={{ fontSize: "9pt", color: accent, fontWeight: 600, margin: 0 }}>CGPA: 3.70 / 4.00</p>
            </Section>

            {/* Certifications */}
            <Section title="CERTIFICATIONS" accent={accent}>
              {[
                "Meta Back-End Developer Professional Certificate",
                "Google Advanced Data Analytics Certificate",
                "ChatGPT Prompt Engineering for Developers – DeepLearning.AI",
                "Generative AI for Everyone – DeepLearning.AI",
                "Back-End Development and APIs – freeCodeCamp",
                "MongoDB Basics M001 – MongoDB University",
              ].map((cert, i) => (
                <p key={i} style={{ fontSize: "8.8pt", color: "#333", margin: "0 0 3px", paddingLeft: "8px", borderLeft: `2px solid ${accent}40` }}>
                  {cert}
                </p>
              ))}
            </Section>
          </div>

          {/* ── RIGHT COLUMN ───────────────────────── */}
          <div>

            {/* Summary */}
            <Section title="PROFESSIONAL SUMMARY" accent={accent}>
              <p style={{ fontSize: "9.5pt", color: "#222", margin: 0, lineHeight: "1.45" }}>
                Results-driven Software Engineer with hands-on production experience in NestJS, TypeScript, Node.js, and MongoDB Atlas. Specialized in building scalable REST APIs with JWT Authentication, RBAC, and CI/CD pipelines. Proven track record integrating large language models (Groq LLaMA 3.3, OpenAI, Gemini) via LangGraph and LangChain on Railway and Vercel. CGPA 3.70 / 4.00.
              </p>
            </Section>

            {/* Projects */}
            <Section title="KEY PROJECTS" accent={accent}>

              <Project
                title="CareerPilot AI"
                year="2025"
                stack="NestJS · TypeScript · LangGraph · Groq LLaMA 3.3 · MongoDB"
                accent={accent}
                bullets={[
                  "Built agentic multi-step AI system using LangGraph that analyzes CV-to-job fit, detects skill gaps, and auto-generates tailored cover letters.",
                  "Integrated Groq LLaMA 3.3 inference with structured prompt pipelines; deployed production-ready NestJS REST API with JWT auth.",
                ]}
              />

              <Project
                title="AI Study & Interview Prep API"
                year="2025"
                stack="NestJS · TypeScript · Groq LLaMA 3.3 70B · MongoDB Atlas · JWT · Swagger/OpenAPI"
                accent={accent}
                bullets={[
                  "Reduced preparation time by 70% by architecting a production REST API generating structured mock interview questions using Groq LLaMA 3.3.",
                  "Achieved sub-2-second LLM latency via rigid Prompt Engineering templates; secured all endpoints with JWT Auth and RBAC guards.",
                ]}
              />

              <Project
                title="NestJS Users Management REST API"
                year="2025"
                stack="NestJS · TypeScript · MongoDB Atlas · JWT · bcrypt · Railway · CI/CD"
                accent={accent}
                bullets={[
                  "Deployed production REST API on Railway with full CRUD, Mongoose validation, CI/CD automation, and startup scripts.",
                  "Reduced request validation errors by 95% via DTO validation with class-validator and global ValidationPipe middleware.",
                ]}
              />

              <Project
                title="Apex Engine Hub"
                year="2025"
                stack="React · TypeScript · Vite · Tailwind CSS · pnpm Monorepo · JSON-LD"
                accent={accent}
                bullets={[
                  "Built mobile-first automotive quotation platform with multi-variant data grids, JSON-LD schema markup, and SEO-optimized architecture as a production-grade pnpm monorepo.",
                ]}
              />

              <Project
                title="ViewTube Backend API"
                year="2024"
                stack="Node.js · Express.js · MongoDB Atlas · Cloudinary CDN · Multer · JWT"
                accent={accent}
                bullets={[
                  "Reduced media upload latency by 45% via Cloudinary CDN and Multer file-parsing stream pipelines; used MongoDB Aggregation Pipelines for complex queries.",
                ]}
              />

            </Section>

            {/* Experience */}
            <Section title="PROFESSIONAL EXPERIENCE" accent={accent}>

              <div style={{ marginBottom: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <p style={{ fontWeight: 700, fontSize: "10pt", color: "#111", margin: 0 }}>Software Engineer Intern — IT & Database Infrastructure</p>
                  <p style={{ fontSize: "8.5pt", color: "#555", margin: 0, whiteSpace: "nowrap" }}>Jul 2025 – Aug 2025</p>
                </div>
                <p style={{ fontSize: "9pt", color: accent, fontWeight: 600, margin: "0 0 3px" }}>Pakistan Television Corporation (PTV)</p>
                <ul style={{ margin: "2px 0 0", paddingLeft: "14px", listStyleType: "disc" }}>
                  {[
                    "Reduced data inconsistency by 40% by re-architecting relational enterprise database schemas and writing custom integrity-check procedures.",
                    "Improved documentation coverage by 60% by authoring network workflow guides and standard operating procedures (SOPs).",
                    "Maintained 99.9% system uptime through rigorous network monitoring and proactive infrastructure health checks.",
                  ].map((b, i) => (
                    <li key={i} style={{ fontSize: "9pt", color: "#222", marginBottom: "2px" }}>{b}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <p style={{ fontWeight: 700, fontSize: "10pt", color: "#111", margin: 0 }}>Microsoft Learn Student Ambassador</p>
                  <p style={{ fontSize: "8.5pt", color: "#555", margin: 0, whiteSpace: "nowrap" }}>Sep 2023 – Aug 2024</p>
                </div>
                <p style={{ fontSize: "9pt", color: accent, fontWeight: 600, margin: "0 0 3px" }}>Microsoft (Remote) — Technical Leadership</p>
                <ul style={{ margin: "2px 0 0", paddingLeft: "14px", listStyleType: "disc" }}>
                  {[
                    "Upskilled 100+ students across 5 technical workshops on Python, Microsoft Azure Cloud, and backend development.",
                    "Accelerated onboarding by 35% by developing clear learning guides for backend architecture and cloud deployment.",
                  ].map((b, i) => (
                    <li key={i} style={{ fontSize: "9pt", color: "#222", marginBottom: "2px" }}>{b}</li>
                  ))}
                </ul>
              </div>
            </Section>

          </div>
        </div>
      </div>

      {/* ── Print CSS ────────────────────────────────── */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          #resume-page {
            margin: 0 !important;
            padding: 10mm 12mm !important;
            box-shadow: none !important;
            width: 100% !important;
            min-height: unset !important;
            font-size: 9.5pt !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
}

// ─── Helper sub-components ───────────────────────────────────────────────────

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h2 style={{
        fontFamily: "'Calibri', 'Arial', sans-serif",
        fontSize: "8.5pt",
        fontWeight: 700,
        letterSpacing: "0.9px",
        color: accent,
        margin: "0 0 5px",
        paddingBottom: "2px",
        borderBottom: `1px solid ${accent}50`,
        textTransform: "uppercase",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div style={{ marginBottom: "4px" }}>
      <span style={{ fontSize: "8.5pt", fontWeight: 700, color: "#111" }}>{label}: </span>
      <span style={{ fontSize: "8.5pt", color: "#333" }}>{items.join(", ")}</span>
    </div>
  );
}

function Project({ title, year, stack, bullets, accent }: {
  title: string; year: string; stack: string; bullets: string[]; accent: string;
}) {
  return (
    <div style={{ marginBottom: "7px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <p style={{ fontWeight: 700, fontSize: "10pt", color: "#111", margin: 0 }}>{title}</p>
        <p style={{ fontSize: "8.5pt", color: "#666", margin: 0, whiteSpace: "nowrap" }}>{year}</p>
      </div>
      <p style={{ fontSize: "8.5pt", color: accent, margin: "1px 0 3px", fontStyle: "italic" }}>{stack}</p>
      <ul style={{ margin: "0", paddingLeft: "14px", listStyleType: "disc" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: "9pt", color: "#222", marginBottom: "1.5px" }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
