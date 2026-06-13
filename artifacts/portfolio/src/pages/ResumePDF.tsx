import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// react-pdf built-in fonts: Helvetica | Helvetica-Bold | Helvetica-Oblique | Helvetica-BoldOblique
const ACCENT = "#0d9488";
const BLACK  = "#111111";
const DARK   = "#222222";
const GRAY   = "#555555";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: BLACK,
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 36,
    lineHeight: 1.4,
  },

  // ── Header ─────────────────────────────────────────
  nameRow:     { textAlign: "center", marginBottom: 3 },
  name:        { fontFamily: "Helvetica-Bold", fontSize: 22, color: BLACK, letterSpacing: 1 },
  title:       { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: ACCENT, marginTop: 2, letterSpacing: 0.4 },
  contactRow:  { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", marginTop: 5, gap: 14 },
  contactItem: { fontSize: 8.5, color: GRAY },

  // ── Dividers ───────────────────────────────────────
  thickLine: { borderBottomWidth: 2, borderBottomColor: ACCENT, marginTop: 6, marginBottom: 9 },

  // ── Section ────────────────────────────────────────
  section: { marginBottom: 9 },
  sectionHeading: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9, color: ACCENT,
    letterSpacing: 0.7,
    borderBottomWidth: 1, borderBottomColor: ACCENT,
    paddingBottom: 2, marginBottom: 5,
  },

  // ── Summary ────────────────────────────────────────
  summaryText: { fontSize: 9.5, color: DARK, lineHeight: 1.45 },

  // ── Skills ─────────────────────────────────────────
  skillRow:   { flexDirection: "row", marginBottom: 3 },
  skillLabel: { fontFamily: "Helvetica-Bold", fontSize: 9.5, color: BLACK, width: 92, flexShrink: 0 },
  skillItems: { fontSize: 9.5, color: "#333333", flex: 1, lineHeight: 1.38 },

  // ── Experience / Project block ──────────────────────
  block:          { marginBottom: 6 },
  blockHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  blockTitle:     { fontFamily: "Helvetica-Bold", fontSize: 10, color: BLACK, flex: 1 },
  blockDate:      { fontSize: 8.5, color: GRAY, textAlign: "right" },
  blockSub:       { fontFamily: "Helvetica-Bold", fontSize: 9, color: ACCENT, marginBottom: 2 },
  blockStack:     { fontFamily: "Helvetica-Oblique", fontSize: 8.5, color: ACCENT, marginBottom: 2.5 },
  bullet:         { flexDirection: "row", marginBottom: 2, paddingLeft: 10 },
  bulletDot:      { fontSize: 9, color: DARK, width: 10, marginTop: 0.5 },
  bulletText:     { fontSize: 9.5, color: DARK, flex: 1, lineHeight: 1.38 },

  // ── Education ──────────────────────────────────────
  eduRow:   { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  eduLeft:  { flex: 1 },
  eduDeg:   { fontFamily: "Helvetica-Bold", fontSize: 10, color: BLACK },
  eduUni:   { fontSize: 9, color: GRAY, marginTop: 1 },
  eduRight: { flexDirection: "row", gap: 16, alignItems: "flex-end" },
  eduCGPA:  { fontFamily: "Helvetica-Bold", fontSize: 9, color: ACCENT },
  eduYear:  { fontSize: 9, color: GRAY },

  // ── Certifications ─────────────────────────────────
  certRow:    { flexDirection: "row", justifyContent: "space-between", marginBottom: 2.5 },
  certName:   { fontSize: 9.5, color: DARK, flex: 1 },
  certIssuer: { fontSize: 8.5, color: GRAY, textAlign: "right", marginLeft: 10 },
});

// ─── Document ─────────────────────────────────────────────────────────────────
export function ResumeDocument() {
  return (
    <Document
      title="Bisma Abbasi — Resume"
      author="Bisma Abbasi"
      subject="Software Engineer | Backend Developer | AI Integration Specialist"
    >
      <Page size="A4" style={s.page}>

        {/* NAME & CONTACT */}
        <View style={s.nameRow}>
          <Text style={s.name}>BISMA ABBASI</Text>
          <Text style={s.title}>Software Engineer  ·  Backend Developer  ·  AI Integration Specialist</Text>
          <View style={s.contactRow}>
            {[
              "+92 318-3094477",
              "engineerbismaabbasi@gmail.com",
              "linkedin.com/in/bisma-abbasi-softwareengineer",
              "github.com/BismaAbbasi",
              "Pakistan",
            ].map(c => <Text key={c} style={s.contactItem}>{c}</Text>)}
          </View>
        </View>
        <View style={s.thickLine} />

        {/* SUMMARY */}
        <Sec title="Professional Summary">
          <Text style={s.summaryText}>
            Results-driven Software Engineer with hands-on production experience in NestJS, TypeScript, Node.js, and MongoDB Atlas. Specialized in building scalable REST APIs with JWT Authentication, RBAC, and CI/CD pipelines. Proven track record integrating large language models (Groq LLaMA 3.3, OpenAI, Gemini) via LangGraph and LangChain, deployed on Railway and Vercel. CGPA 3.70 / 4.00.
          </Text>
        </Sec>

        {/* SKILLS */}
        <Sec title="Technical Skills">
          <SR label="Languages"      v="TypeScript, JavaScript (ES6+), Python, SQL, C++, Java" />
          <SR label="Backend"        v="NestJS, Node.js, Express.js, REST API Design, JWT Authentication, RBAC, Guards, DTOs, Pipes, Middleware, Microservices" />
          <SR label="AI & LLM"       v="Groq LLaMA 3.3, OpenAI API, Gemini API, LangGraph, LangChain, Prompt Engineering, RAG, Agentic Workflows" />
          <SR label="Databases"      v="MongoDB Atlas, Mongoose ODM, PostgreSQL, MySQL, Supabase, Firebase" />
          <SR label="Cloud & DevOps" v="Railway, Vercel, Docker, Git, GitHub, CI/CD, Swagger / OpenAPI, Cloudinary CDN, Multer" />
          <SR label="Core Concepts"  v="Object-Oriented Programming, Data Structures & Algorithms, System Design, API Security, Agile / Scrum" />
        </Sec>

        {/* EXPERIENCE */}
        <Sec title="Professional Experience">
          <Exp
            role="Software Engineer Intern — IT & Database Infrastructure"
            company="Pakistan Television Corporation (PTV)"
            period="Jul 2025 – Aug 2025"
            bullets={[
              "Re-architected relational enterprise database schemas, reducing data inconsistency by 40% through normalization and integrity-check procedures.",
              "Authored comprehensive network workflow guides and SOPs, improving documentation coverage by 60%.",
              "Maintained 99.9% system uptime through proactive infrastructure monitoring and troubleshooting.",
            ]}
          />
          <Exp
            role="Microsoft Learn Student Ambassador"
            company="Microsoft — Technical Leadership (Remote)"
            period="Sep 2023 – Aug 2024"
            bullets={[
              "Upskilled 100+ students across 5 hands-on workshops covering Python, Microsoft Azure Cloud, and backend development.",
              "Accelerated peer onboarding by 35% by developing structured technical learning guides and backend architecture resources.",
            ]}
          />
        </Sec>

        {/* PROJECTS */}
        <Sec title="Key Projects">
          <Proj
            title="CareerPilot AI"
            stack="NestJS · TypeScript · LangGraph · Groq LLaMA 3.3 · MongoDB Atlas · JWT"
            year="2025"
            link="github.com/BismaAbbasi/CareerPilot-AI"
            bullets={[
              "Engineered a multi-step agentic AI system using LangGraph that analyzes CV-to-job fitness, identifies skill gaps, and auto-generates tailored cover letters.",
              "Integrated Groq LLaMA 3.3 inference with structured prompt pipelines; deployed production NestJS REST API secured with JWT authentication.",
            ]}
          />
          <Proj
            title="AI Study & Interview Prep API"
            stack="NestJS · TypeScript · Groq LLaMA 3.3 70B · MongoDB Atlas · JWT · RBAC · Swagger"
            year="2025"
            link="github.com/BismaAbbasi/AI-Prep-API"
            bullets={[
              "Reduced interview prep time by 70% building a REST API that generates structured mock Q&A using Groq LLaMA 3.3.",
              "Achieved sub-2-second LLM latency via rigid prompt engineering; secured all endpoints with JWT Auth and RBAC guards.",
            ]}
          />
          <Proj
            title="NestJS Users Management REST API"
            stack="NestJS · TypeScript · MongoDB Atlas · JWT · bcrypt · Railway · CI/CD"
            year="2025"
            link="github.com/BismaAbbasi/nestjs-users-api"
            bullets={[
              "Deployed production REST API on Railway with full CRUD, Mongoose validation, bcrypt hashing, and automated CI/CD pipelines.",
              "Cut request validation errors by 95% using class-validator DTOs and global NestJS ValidationPipe.",
            ]}
          />
          <Proj
            title="Apex Engine Hub"
            stack="React · TypeScript · Vite · Tailwind CSS · pnpm Monorepo · JSON-LD"
            year="2025"
            link="github.com/BismaAbbasi/apex-engine-hub"
            bullets={[
              "Built a mobile-first automotive quotation platform with multi-variant data grids, JSON-LD schema markup, and production-grade pnpm monorepo architecture.",
            ]}
          />
          <Proj
            title="ViewTube Backend API"
            stack="Node.js · Express.js · MongoDB Atlas · Cloudinary CDN · Multer · JWT"
            year="2024"
            link="github.com/BismaAbbasi/ViewTube-Backend"
            bullets={[
              "Reduced media upload latency by 45% using Cloudinary CDN with Multer stream processing; built MongoDB aggregation pipelines for video feed queries.",
            ]}
          />
          <Proj
            title="AI-Driven Smart Pediatric Health Advisor"
            stack="Python · Flask · LLM APIs · Agile / Scrum — Team Lead (4-Sprint Capstone)"
            year="2024–2025"
            link="github.com/BismaAbbasi/AI-Driven-Smart-Pediatric-Health-Advisor-"
            bullets={[
              "Led a 4-person team through Agile sprints to deliver an AI-powered pediatric diagnostic advisor with personalized health guidance via LLM APIs.",
            ]}
          />
        </Sec>

        {/* EDUCATION */}
        <Sec title="Education">
          <View style={s.eduRow}>
            <View style={s.eduLeft}>
              <Text style={s.eduDeg}>B.E. Software Engineering</Text>
              <Text style={s.eduUni}>Quaid-e-Awam University of Engineering, Pakistan</Text>
            </View>
            <View style={s.eduRight}>
              <Text style={s.eduCGPA}>CGPA: 3.70 / 4.00</Text>
              <Text style={s.eduYear}>2021 – 2025</Text>
            </View>
          </View>
        </Sec>

        {/* CERTIFICATIONS */}
        <Sec title="Certifications">
          {[
            { name: "Meta Back-End Developer Professional Certificate",   issuer: "Meta" },
            { name: "Google Advanced Data Analytics Certificate",          issuer: "Google" },
            { name: "ChatGPT Prompt Engineering for Developers",           issuer: "DeepLearning.AI" },
            { name: "Generative AI for Everyone",                          issuer: "DeepLearning.AI" },
            { name: "Back-End Development and APIs",                       issuer: "freeCodeCamp" },
            { name: "MongoDB Basics — M001 Database Credential",           issuer: "MongoDB University" },
          ].map((c, i) => (
            <View key={i} style={s.certRow}>
              <Text style={s.certName}>{c.name}</Text>
              <Text style={s.certIssuer}>{c.issuer}</Text>
            </View>
          ))}
        </Sec>

      </Page>
    </Document>
  );
}

// ─── Tiny helper components ───────────────────────────────────────────────────

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={s.section}>
      <Text style={s.sectionHeading}>{title.toUpperCase()}</Text>
      {children}
    </View>
  );
}

function SR({ label, v }: { label: string; v: string }) {
  return (
    <View style={s.skillRow}>
      <Text style={s.skillLabel}>{label}:</Text>
      <Text style={s.skillItems}>{v}</Text>
    </View>
  );
}

function Exp({ role, company, period, bullets }: {
  role: string; company: string; period: string; bullets: string[];
}) {
  return (
    <View style={s.block}>
      <View style={s.blockHeaderRow}>
        <Text style={s.blockTitle}>{role}</Text>
        <Text style={s.blockDate}>{period}</Text>
      </View>
      <Text style={s.blockSub}>{company}</Text>
      {bullets.map((b, i) => (
        <View key={i} style={s.bullet}>
          <Text style={s.bulletDot}>{"\u2022"}</Text>
          <Text style={s.bulletText}>{b}</Text>
        </View>
      ))}
    </View>
  );
}

function Proj({ title, stack, year, link, bullets }: {
  title: string; stack: string; year: string; link: string; bullets: string[];
}) {
  return (
    <View style={s.block}>
      <View style={s.blockHeaderRow}>
        <Text style={s.blockTitle}>{title}</Text>
        <Text style={s.blockDate}>{year}  |  {link}</Text>
      </View>
      <Text style={s.blockStack}>{stack}</Text>
      {bullets.map((b, i) => (
        <View key={i} style={s.bullet}>
          <Text style={s.bulletDot}>{"\u2022"}</Text>
          <Text style={s.bulletText}>{b}</Text>
        </View>
      ))}
    </View>
  );
}
