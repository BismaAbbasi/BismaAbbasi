import React from "react";
import { Printer, ArrowLeft } from "lucide-react";

const ACCENT = "#0d9488";
const LINE   = "#d1d5db";
const GRAY   = "#444444";

export default function Resume() {
  return (
    <>
      {/* ── Screen toolbar (hidden when printing) ─────── */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-900 border-b border-zinc-800">
        <a href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </a>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">Ctrl+P → Save as PDF</span>
          <button onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-sm"
            style={{ background: ACCENT }}>
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* ── Resume document ───────────────────────────── */}
      <div id="resume-root" style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        paddingTop: "70px",
        paddingBottom: "40px",
      }}>
        <div id="resume-page" style={{
          fontFamily: "'Calibri', 'Arial', 'Helvetica Neue', sans-serif",
          fontSize: "10.5pt",
          lineHeight: "1.42",
          color: "#111111",
          background: "#ffffff",
          width: "215.9mm",
          margin: "0 auto",
          padding: "13mm 16mm 12mm",
          boxShadow: "0 2px 32px rgba(0,0,0,0.14)",
        }}>

          {/* ── NAME & TITLE ────────────────────────── */}
          <div style={{ textAlign: "center", marginBottom: "8px" }}>
            <h1 style={{
              fontFamily: "'Calibri', 'Arial', sans-serif",
              fontSize: "24pt", fontWeight: 700, color: "#0f0f0f",
              margin: 0, letterSpacing: "1px", textTransform: "uppercase",
            }}>
              Bisma Abbasi
            </h1>
            <p style={{
              fontSize: "11pt", fontWeight: 600, color: ACCENT,
              margin: "3px 0 7px", letterSpacing: "0.6px",
            }}>
              Software Engineer &nbsp;·&nbsp; Backend Developer &nbsp;·&nbsp; AI Integration Specialist
            </p>

            {/* ── CONTACT ROW ─────────────────────── */}
            <div style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center",
              gap: "0 18px", fontSize: "9.5pt", color: GRAY,
            }}>
              <span>+92 318-3094477</span>
              <span>engineerbismaabbasi@gmail.com</span>
              <span>linkedin.com/in/bisma-abbasi-softwareengineer</span>
              <span>github.com/BismaAbbasi</span>
              <span>Pakistan</span>
            </div>
          </div>

          <HR />

          {/* ── PROFESSIONAL SUMMARY ────────────────── */}
          <Section title="Professional Summary">
            <p style={{ margin: 0, fontSize: "10pt", color: "#222" }}>
              Results-driven Software Engineer with hands-on production experience in NestJS, TypeScript, Node.js, and MongoDB Atlas. Specialized in building scalable REST APIs with JWT Authentication, RBAC, and CI/CD pipelines. Proven track record integrating large language models (Groq LLaMA 3.3, OpenAI, Gemini) via LangGraph and LangChain, deployed on Railway and Vercel. CGPA 3.70 / 4.00.
            </p>
          </Section>

          {/* ── TECHNICAL SKILLS ────────────────────── */}
          <Section title="Technical Skills">
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <SkillRow label="Languages"       items="TypeScript, JavaScript (ES6+), Python, SQL, C++, Java" />
              <SkillRow label="Backend"         items="NestJS, Node.js, Express.js, REST API Design, JWT Authentication, RBAC, Guards, DTOs, Pipes, Middleware, Microservices" />
              <SkillRow label="AI & LLM"        items="Groq LLaMA 3.3, OpenAI API, Gemini API, LangGraph, LangChain, Prompt Engineering, RAG, Agentic Workflows" />
              <SkillRow label="Databases"       items="MongoDB Atlas, Mongoose ODM, PostgreSQL, MySQL, Supabase, Firebase" />
              <SkillRow label="Cloud & DevOps"  items="Railway, Vercel, Docker, Git, GitHub, CI/CD, Swagger / OpenAPI, Cloudinary CDN, Multer" />
              <SkillRow label="Core Concepts"   items="Object-Oriented Programming, Data Structures & Algorithms, System Design, API Security, Agile / Scrum" />
            </div>
          </Section>

          {/* ── EXPERIENCE ──────────────────────────── */}
          <Section title="Professional Experience">

            <ExpBlock
              role="Software Engineer Intern — IT & Database Infrastructure"
              company="Pakistan Television Corporation (PTV)"
              period="Jul 2025 – Aug 2025"
              bullets={[
                "Re-architected relational enterprise database schemas, reducing data inconsistency by 40% through targeted normalization and integrity-check procedures.",
                "Authored comprehensive network workflow guides and SOPs, improving documentation coverage by 60%.",
                "Maintained 99.9% system uptime through proactive infrastructure monitoring and troubleshooting.",
              ]}
            />

            <ExpBlock
              role="Microsoft Learn Student Ambassador"
              company="Microsoft — Technical Leadership (Remote)"
              period="Sep 2023 – Aug 2024"
              bullets={[
                "Upskilled 100+ students across 5 hands-on workshops covering Python, Microsoft Azure Cloud, and backend development.",
                "Accelerated peer onboarding by 35% by developing structured technical learning guides and backend architecture resources.",
              ]}
            />

          </Section>

          {/* ── PROJECTS ────────────────────────────── */}
          <Section title="Key Projects">

            <ProjBlock
              title="CareerPilot AI"
              stack="NestJS · TypeScript · LangGraph · Groq LLaMA 3.3 · MongoDB Atlas · JWT"
              year="2025"
              link="github.com/BismaAbbasi/CareerPilot-AI"
              bullets={[
                "Engineered a multi-step agentic AI system using LangGraph that analyzes CV-to-job fitness, identifies skill gaps, and auto-generates tailored cover letters.",
                "Integrated Groq LLaMA 3.3 inference with structured prompt pipelines; deployed a production NestJS REST API secured with JWT authentication.",
              ]}
            />

            <ProjBlock
              title="AI Study & Interview Prep API"
              stack="NestJS · TypeScript · Groq LLaMA 3.3 70B · MongoDB Atlas · JWT · RBAC · Swagger"
              year="2025"
              link="github.com/BismaAbbasi/AI-Prep-API"
              bullets={[
                "Reduced interview preparation time by 70% by building a production REST API that generates structured mock Q&A with Groq LLaMA 3.3.",
                "Achieved sub-2-second LLM latency through rigid prompt engineering; secured all endpoints with JWT Auth and RBAC guards.",
              ]}
            />

            <ProjBlock
              title="NestJS Users Management REST API"
              stack="NestJS · TypeScript · MongoDB Atlas · JWT · bcrypt · Railway · CI/CD"
              year="2025"
              link="github.com/BismaAbbasi/nestjs-users-api"
              bullets={[
                "Deployed production-grade REST API on Railway with full CRUD, Mongoose validation, bcrypt password hashing, and automated CI/CD pipelines.",
                "Cut request validation errors by 95% using class-validator DTOs and global NestJS ValidationPipe.",
              ]}
            />

            <ProjBlock
              title="Apex Engine Hub"
              stack="React · TypeScript · Vite · Tailwind CSS · pnpm Monorepo · JSON-LD"
              year="2025"
              link="github.com/BismaAbbasi/apex-engine-hub"
              bullets={[
                "Built a mobile-first automotive quotation platform with multi-variant data grids, JSON-LD schema markup for SEO, and production-grade pnpm monorepo architecture.",
              ]}
            />

            <ProjBlock
              title="ViewTube Backend API"
              stack="Node.js · Express.js · MongoDB Atlas · Cloudinary CDN · Multer · JWT"
              year="2024"
              link="github.com/BismaAbbasi/ViewTube-Backend"
              bullets={[
                "Reduced media upload latency by 45% using Cloudinary CDN with Multer stream processing; built complex MongoDB aggregation pipelines for video feed queries.",
              ]}
            />

            <ProjBlock
              title="AI-Driven Smart Pediatric Health Advisor"
              stack="Python · Flask · LLM APIs · Agile / Scrum — Team Lead (4-Sprint Capstone)"
              year="2024–2025"
              link="github.com/BismaAbbasi/AI-Driven-Smart-Pediatric-Health-Advisor-"
              bullets={[
                "Led a 4-person team through Agile sprints to deliver an AI-powered pediatric diagnostic advisor providing personalized health guidance and nutrition recommendations via LLM APIs.",
              ]}
            />

          </Section>

          {/* ── EDUCATION ───────────────────────────── */}
          <Section title="Education">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: "10.5pt", color: "#111" }}>B.E. Software Engineering</span>
                <span style={{ color: GRAY, fontSize: "9.5pt" }}>&nbsp;—&nbsp;Quaid-e-Awam University of Engineering, Pakistan</span>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "baseline", whiteSpace: "nowrap" }}>
                <span style={{ fontSize: "9pt", color: ACCENT, fontWeight: 600 }}>CGPA: 3.70 / 4.00</span>
                <span style={{ fontSize: "9pt", color: GRAY }}>2021 – 2025</span>
              </div>
            </div>
          </Section>

          {/* ── CERTIFICATIONS ──────────────────────── */}
          <Section title="Certifications">
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5px" }}>
              {[
                { name: "Meta Back-End Developer Professional Certificate",   issuer: "Meta" },
                { name: "Google Advanced Data Analytics Certificate",          issuer: "Google" },
                { name: "ChatGPT Prompt Engineering for Developers",           issuer: "DeepLearning.AI" },
                { name: "Generative AI for Everyone",                          issuer: "DeepLearning.AI" },
                { name: "Back-End Development and APIs",                       issuer: "freeCodeCamp" },
                { name: "MongoDB Basics — M001 Database Credential",           issuer: "MongoDB University" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "9.5pt", color: "#222" }}>{c.name}</span>
                  <span style={{ fontSize: "8.5pt", color: GRAY, whiteSpace: "nowrap", marginLeft: "12px" }}>{c.issuer}</span>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>

      {/* ── Print styles ──────────────────────────────── */}
      <style>{`
        @media print {
          .no-print  { display: none !important; }
          #resume-root {
            background: white !important;
            padding: 0 !important;
            min-height: unset !important;
          }
          #resume-page {
            box-shadow: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 10mm 14mm !important;
            font-size: 9.5pt !important;
          }
          @page { size: A4; margin: 0; }
        }
      `}</style>
    </>
  );
}

// ─── Small reusable pieces ────────────────────────────────────────────────────

function HR() {
  return <div style={{ borderTop: `2px solid ${ACCENT}`, margin: "6px 0 10px" }} />;
}

function SectionDivider() {
  return <div style={{ borderTop: `1px solid ${LINE}`, margin: "7px 0 6px" }} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <h2 style={{
        fontFamily: "'Calibri', 'Arial', sans-serif",
        fontSize: "10.5pt", fontWeight: 700,
        color: ACCENT, margin: "0 0 4px",
        textTransform: "uppercase", letterSpacing: "0.6px",
        borderBottom: `1.5px solid ${ACCENT}55`,
        paddingBottom: "2px",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillRow({ label, items }: { label: string; items: string }) {
  return (
    <div style={{ display: "flex", gap: "4px", fontSize: "9.5pt", lineHeight: "1.4" }}>
      <span style={{ fontWeight: 700, color: "#111", minWidth: "110px", flexShrink: 0 }}>{label}:</span>
      <span style={{ color: "#333" }}>{items}</span>
    </div>
  );
}

function ExpBlock({ role, company, period, bullets }: {
  role: string; company: string; period: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom: "7px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontWeight: 700, fontSize: "10.5pt", color: "#111" }}>{role}</span>
        <span style={{ fontSize: "9pt", color: GRAY, whiteSpace: "nowrap", marginLeft: "8px" }}>{period}</span>
      </div>
      <p style={{ fontSize: "9.5pt", color: ACCENT, fontWeight: 600, margin: "0 0 3px" }}>{company}</p>
      <ul style={{ margin: 0, paddingLeft: "16px", listStyleType: "disc" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: "9.5pt", color: "#222", marginBottom: "2px" }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjBlock({ title, stack, year, link, bullets }: {
  title: string; stack: string; year: string; link: string; bullets: string[];
}) {
  return (
    <div style={{ marginBottom: "6px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontWeight: 700, fontSize: "10.5pt", color: "#111" }}>{title}</span>
        <span style={{ fontSize: "8.5pt", color: GRAY, whiteSpace: "nowrap", marginLeft: "8px" }}>{year} &nbsp;|&nbsp; {link}</span>
      </div>
      <p style={{ fontSize: "9pt", color: ACCENT, fontStyle: "italic", margin: "1px 0 3px" }}>{stack}</p>
      <ul style={{ margin: 0, paddingLeft: "16px", listStyleType: "disc" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: "9.5pt", color: "#222", marginBottom: "2px" }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
