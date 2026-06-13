import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiNestjs,
  SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit,
  SiOpenai, SiVercel, SiReact, SiVite,
} from "react-icons/si";
import {
  Terminal, Code2, Cpu, Server, Lock,
  ChevronRight, ExternalLink, Github, Linkedin, Mail,
  GraduationCap, Award, Briefcase, ArrowUpRight, Sparkles, Zap, Globe,
} from "lucide-react";

// ─── CSS variable helpers ────────────────────────────────────────────────────
const CLR = {
  teal:   "hsl(173 80% 44%)",
  green:  "hsl(142 72% 46%)",
  blue:   "hsl(217 90% 60%)",
  purple: "hsl(271 70% 62%)",
  zinc:   "hsl(240 4% 52%)",
};

// ─── Grid / Orb Background ──────────────────────────────────────────────────
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,185,166,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,185,166,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
    <motion.div
      className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full"
      style={{ background: `radial-gradient(circle, ${CLR.teal}22, transparent 68%)` }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] rounded-full"
      style={{ background: `radial-gradient(circle, ${CLR.purple}18, transparent 68%)` }}
      animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
    <motion.div
      className="absolute top-2/3 right-1/3 w-[200px] h-[200px] rounded-full"
      style={{ background: `radial-gradient(circle, ${CLR.blue}15, transparent 68%)` }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />
  </div>
);

// ─── Typewriter (multi-role cycling) ────────────────────────────────────────
const roles = [
  "Backend Engineer",
  "AI / LLM Integration Specialist",
  "NestJS & Node.js Developer",
  "Distributed Systems Builder",
];

const TypewriterCycle = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 52);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 26);
    } else {
      setDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="font-jetmono text-base md:text-lg" style={{ color: CLR.zinc }}>
      <span style={{ color: CLR.teal }}>{">"}</span>{" "}
      <span className="text-foreground/80">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.85 }}
        className="inline-block w-[2px] h-[1.1em] ml-0.5 align-middle"
        style={{ background: CLR.teal }}
      />
    </span>
  );
};

// ─── Section Header ──────────────────────────────────────────────────────────
type AccentColor = "teal" | "green" | "blue" | "purple";
const SectionHeader = ({
  num, title, color = "teal",
}: { num: string; title: string; color?: AccentColor }) => {
  const accentColor = CLR[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mb-16"
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-orbitron text-[9px] tracking-[0.35em] opacity-60" style={{ color: accentColor }}>
          {num}
        </span>
        <h2 className="font-syne text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${accentColor}80, transparent)` }} />
    </motion.div>
  );
};

// ─── Projects Data ───────────────────────────────────────────────────────────
const projects = [
  {
    title: "CareerPilot AI",
    subtitle: "Agentic AI Career Intelligence System",
    year: "2025",
    stack: ["NestJS", "TypeScript", "LangGraph", "Groq LLaMA 3.3", "MongoDB"],
    description: "Agentic multi-step AI system that analyzes CV-to-job fitness, detects skill gaps, and auto-generates tailored cover letters using LangGraph orchestration and Groq inference.",
    github: "https://github.com/BismaAbbasi/CareerPilot-AI",
    tagLabel: "Agentic AI",
    tagStyle: { color: CLR.teal,   background: `${CLR.teal}18`,   border: `1px solid ${CLR.teal}40` },
    cardStyle: "card-glow",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Apex Engine Hub",
    subtitle: "High-Performance Automotive Platform",
    year: "2025",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "pnpm Monorepo"],
    description: "Mobile-first automotive quotation platform with JSON-LD schema markup, multi-variant data grids, and SEO-optimized architecture. Built as a production-grade monorepo.",
    github: "https://github.com/BismaAbbasi/apex-engine-hub",
    tagLabel: "Full-Stack",
    tagStyle: { color: CLR.blue,   background: `${CLR.blue}18`,   border: `1px solid ${CLR.blue}40` },
    cardStyle: "card-glow-blue",
    icon: Zap,
    featured: true,
  },
  {
    title: "AI Interview Prep API",
    subtitle: "LLM-Powered Study & Interview Assistant",
    year: "2025",
    stack: ["NestJS", "TypeScript", "Groq LLaMA 3.3 70B", "MongoDB Atlas", "JWT", "Swagger"],
    description: "Production REST API generating structured mock interview questions with model answers. Rigid prompt templates achieve sub-2-second LLM response latency.",
    github: "https://github.com/BismaAbbasi/AI-Prep-API",
    stat: { value: 70, suffix: "%", label: "prep time saved" },
    tagLabel: "AI / LLM",
    tagStyle: { color: CLR.teal,   background: `${CLR.teal}18`,   border: `1px solid ${CLR.teal}40` },
    cardStyle: "card-glow",
    icon: Cpu,
    featured: false,
  },
  {
    title: "NestJS Users REST API",
    subtitle: "Production-Grade User Management System",
    year: "2025",
    stack: ["NestJS", "TypeScript", "MongoDB Atlas", "JWT", "bcrypt", "Railway", "CI/CD"],
    description: "Fully deployed REST API on Railway with CRUD, bcrypt password hashing, stateless JWT flows, RBAC guards, Swagger docs, and CI/CD automation.",
    github: "https://github.com/BismaAbbasi/nestjs-users-api",
    stat: { value: 95, suffix: "%", label: "fewer validation errors" },
    tagLabel: "Backend API",
    tagStyle: { color: CLR.green,  background: `${CLR.green}15`,  border: `1px solid ${CLR.green}35` },
    cardStyle: "card-glow",
    icon: Server,
    featured: false,
  },
  {
    title: "ViewTube Backend",
    subtitle: "YouTube-Inspired Video Platform API",
    year: "2024",
    stack: ["Node.js", "Express.js", "MongoDB Atlas", "Cloudinary CDN", "Multer", "JWT"],
    description: "Modular video-sharing backend with MongoDB aggregation pipelines, Cloudinary CDN integration, and Multer stream processing.",
    github: "https://github.com/BismaAbbasi/ViewTube-Backend",
    stat: { value: 45, suffix: "%", label: "upload latency cut" },
    tagLabel: "Backend API",
    tagStyle: { color: CLR.green,  background: `${CLR.green}15`,  border: `1px solid ${CLR.green}35` },
    cardStyle: "card-glow",
    icon: Globe,
    featured: false,
  },
  {
    title: "CSV Data Manager",
    subtitle: "Secure Data Import & Mapping System",
    year: "2023",
    stack: ["Node.js", "Express.js", "MongoDB", "Multer", "JWT Auth", "Stream Processing"],
    description: "High-throughput CSV ingestion engine with concurrent insertMany() pipelines and dynamic schema mapping. Eliminated runtime schema-mismatch crashes entirely.",
    github: "https://github.com/BismaAbbasi/csv-data-manager",
    stat: { value: 10, suffix: "×", label: "ingestion speed" },
    tagLabel: "Data Engineering",
    tagStyle: { color: CLR.blue,   background: `${CLR.blue}18`,   border: `1px solid ${CLR.blue}40` },
    cardStyle: "card-glow-blue",
    icon: Code2,
    featured: false,
  },
  {
    title: "AI Pediatric Health Advisor",
    subtitle: "Capstone — Intelligent Diagnostic System",
    year: "2024–2025",
    stack: ["Python", "Flask", "LLM APIs", "Agile / Scrum"],
    description: "Team Lead on 4-sprint Agile project. AI-powered diagnostic advisor providing intelligent health guidance and nutrition recommendations via LLM APIs.",
    github: "https://github.com/BismaAbbasi/AI-Driven-Smart-Pediatric-Health-Advisor-",
    tagLabel: "AI / Healthcare",
    tagStyle: { color: CLR.purple, background: `${CLR.purple}15`, border: `1px solid ${CLR.purple}40` },
    cardStyle: "card-glow-purple",
    highlight: "Team Lead",
    icon: Sparkles,
    featured: false,
  },
];

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 35 });

  useEffect(() => {
    const ids = ["hero","about","projects","experience","education","contact"];
    const onScroll = () => {
      const y = window.scrollY + 260;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActiveSection(id); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "hero",       label: "// INIT",        color: CLR.teal },
    { id: "about",      label: "// SYS_INFO",    color: CLR.green },
    { id: "projects",   label: "// DEPLOYMENTS", color: CLR.blue },
    { id: "experience", label: "// RUNTIME",     color: CLR.purple },
    { id: "education",  label: "// EDUCATION",   color: CLR.teal },
    { id: "contact",    label: "// PING",        color: CLR.green },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Scroll bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX, transformOrigin: "0%", position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 100 }}
      />

      {/* ── Side Nav ───────────────────────────────────── */}
      <nav className="fixed top-0 left-0 h-screen w-14 md:w-56 border-r border-border/40 bg-background/85 backdrop-blur-xl z-50 hidden sm:flex flex-col py-8">
        {/* Logo */}
        <div className="px-5 mb-10 hidden md:block">
          <span className="font-orbitron text-[9px] tracking-[0.4em] uppercase" style={{ color: CLR.teal }}>
            bisma.dev
          </span>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col justify-center gap-1">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`nav-${item.id}`}
                className="relative flex items-center gap-3 px-5 py-2.5 transition-all duration-300 group"
              >
                {active && (
                  <motion.div
                    layoutId="nav-bar"
                    className="absolute left-0 top-0 bottom-0 w-[2px]"
                    style={{ background: item.color }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className="font-orbitron text-[9px] tracking-[0.18em] hidden md:block transition-all duration-300"
                  style={{ color: active ? item.color : "hsl(240 4% 40%)", textShadow: active ? `0 0 12px ${item.color}80` : "none" }}
                >
                  {item.label}
                </span>
                <ChevronRight
                  className="md:hidden w-3 h-3 transition-colors"
                  style={{ color: active ? item.color : "hsl(240 4% 40%)" }}
                />
              </a>
            );
          })}
        </div>

        {/* Social icons */}
        <div className="px-5 hidden md:flex flex-col gap-3 pb-2">
          <a href="https://github.com/BismaAbbasi" target="_blank" rel="noreferrer"
            className="transition-colors duration-300 hover:scale-110" style={{ color: "hsl(240 4% 40%)" }}
            onMouseEnter={e => (e.currentTarget.style.color = CLR.teal)}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(240 4% 40%)")}>
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/bisma-abbasi-softwareengineer" target="_blank" rel="noreferrer"
            className="transition-colors duration-300 hover:scale-110" style={{ color: "hsl(240 4% 40%)" }}
            onMouseEnter={e => (e.currentTarget.style.color = CLR.blue)}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(240 4% 40%)")}>
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ── Main ───────────────────────────────────────── */}
      <main className="sm:ml-14 md:ml-56">

        {/* ── HERO ─────────────────────────────────────── */}
        <section id="hero" className="relative min-h-screen flex items-center p-6 md:p-16 overflow-hidden scan-effect">
          <GridBackground />

          <div className="max-w-5xl w-full z-10 relative">
            {/* Terminal prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-2 mb-7"
            >
              <Terminal className="w-4 h-4" style={{ color: CLR.teal }} />
              <span className="font-jetmono text-xs" style={{ color: CLR.teal }}>root@bisma.dev:~$</span>
              <span className="font-jetmono text-xs text-muted-foreground">cat profile.json</span>
              <motion.span animate={{ opacity: [1,0,1] }} transition={{ repeat: Infinity, duration: 0.9 }}
                className="w-[7px] h-3.5 rounded-sm ml-1" style={{ background: CLR.teal }} />
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none"
              >
                Bisma
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-7">
              <motion.h1
                initial={{ y: 90, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.72, delay: 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${CLR.teal} 0%, ${CLR.blue} 50%, ${CLR.purple} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(20,185,166,0.4))",
                }}
              >
                Abbasi
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="mb-8 h-8">
              <TypewriterCycle />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10 pl-4"
              style={{ borderLeft: `2px solid ${CLR.teal}60` }}
            >
              Software Engineer specializing in Backend Architecture, RESTful API Design,
              and AI/LLM Integration. CGPA 3.70 — building production systems that scale.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-14">
              <a href="#projects" data-testid="btn-view-projects"
                className="group px-6 py-3 font-syne font-semibold text-sm tracking-wide flex items-center gap-2 rounded-sm transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${CLR.teal}22, ${CLR.blue}22)`,
                  border: `1px solid ${CLR.teal}60`,
                  color: CLR.teal,
                  boxShadow: `0 0 20px ${CLR.teal}25`,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 32px ${CLR.teal}50`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 20px ${CLR.teal}25`)}
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://github.com/BismaAbbasi" target="_blank" rel="noreferrer" data-testid="btn-github-hero"
                className="px-6 py-3 font-syne font-medium text-sm tracking-wide flex items-center gap-2 rounded-sm transition-all duration-300 border border-border hover:border-opacity-80 text-muted-foreground hover:text-foreground"
                style={{ background: "hsl(240 5% 10%)" }}>
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="mailto:engineerbismaabbasi@gmail.com" data-testid="btn-email-hero"
                className="px-6 py-3 font-syne font-medium text-sm tracking-wide flex items-center gap-2 rounded-sm border border-border text-muted-foreground hover:text-foreground transition-all duration-300"
                style={{ background: "hsl(240 5% 10%)" }}>
                <Mail className="w-4 h-4" /> Hire Me
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.7 }}
              className="flex flex-wrap gap-10 border-t pt-8"
              style={{ borderColor: "hsl(240 5% 12%)" }}
            >
              {[
                { value: 7,   suffix: "+", label: "Production Projects", color: CLR.teal },
                { value: 3,   suffix: ".70", label: "CGPA / 4.00",        color: CLR.blue },
                { value: 100, suffix: "+", label: "Students Mentored",    color: CLR.purple },
              ].map(s => (
                <div key={s.label} className="font-jetmono">
                  <div className="text-2xl font-bold" style={{ color: s.color }}>
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1 tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SYS_INFO / STACK ─────────────────────────── */}
        <section id="about" className="py-28 px-6 md:px-16 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 01 — SYS_INFO" title="Tech Stack" color="green" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="space-y-5 text-muted-foreground leading-relaxed"
              >
                <p className="text-lg text-foreground/80">
                  I build backend infrastructure that ships to production and stays there — REST APIs, microservices, and AI-augmented pipelines with NestJS, Node.js, and Python.
                </p>
                <p>
                  Recently focused on connecting foundation models (LLaMA 3.3, OpenAI, Gemini) to resilient backend systems — achieving real latency wins through deliberate prompt engineering and smart architecture.
                </p>
                <div className="p-4 rounded-sm font-jetmono text-sm" style={{ background: "hsl(240 5% 8%)", border: `1px solid hsl(240 5% 13%)` }}>
                  <div className="mb-1.5 text-[10px] tracking-widest uppercase" style={{ color: CLR.green }}>{"// current status"}</div>
                  <span className="text-muted-foreground">{"{ "}</span>
                  <span style={{ color: CLR.teal }}>"open_to"</span>
                  <span className="text-muted-foreground">{": "}</span>
                  <span className="text-foreground/80">"backend &amp; AI engineering roles"</span>
                  <span className="text-muted-foreground">{" }"}</span>
                </div>
              </motion.div>

              <div>
                <p className="font-orbitron text-[9px] tracking-[0.35em] uppercase mb-6" style={{ color: CLR.green }}>Technologies</p>
                <div className="grid grid-cols-4 gap-2.5">
                  {[
                    { icon: SiTypescript, name: "TypeScript",  color: "#3178C6" },
                    { icon: SiJavascript, name: "JavaScript",  color: "#F7DF1E" },
                    { icon: SiPython,     name: "Python",      color: "#3776AB" },
                    { icon: SiNodedotjs,  name: "Node.js",     color: "#339933" },
                    { icon: SiNestjs,     name: "NestJS",      color: "#E0234E" },
                    { icon: SiExpress,    name: "Express",     color: "#e5e5e5" },
                    { icon: SiMongodb,    name: "MongoDB",     color: "#47A248" },
                    { icon: SiPostgresql, name: "PostgreSQL",  color: "#336791" },
                    { icon: SiDocker,     name: "Docker",      color: "#2496ED" },
                    { icon: SiGit,        name: "Git",         color: "#F05032" },
                    { icon: SiOpenai,     name: "OpenAI",      color: "#e5e5e5" },
                    { icon: SiReact,      name: "React",       color: "#61DAFB" },
                    { icon: SiVite,       name: "Vite",        color: "#646CFF" },
                    { icon: SiVercel,     name: "Vercel",      color: "#e5e5e5" },
                    { icon: Cpu,          name: "Groq / LLM",  color: CLR.teal  },
                    { icon: Lock,         name: "JWT / Auth",  color: CLR.blue  },
                  ].map((sk, i) => (
                    <motion.div
                      key={sk.name}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.035, duration: 0.38 }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      data-testid={`skill-${sk.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className="flex flex-col items-center justify-center p-3 rounded-sm cursor-default transition-all duration-300 group"
                      style={{ background: "hsl(240 5% 7%)", border: "1px solid hsl(240 5% 11%)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = `${sk.color}70`)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(240 5% 11%)")}
                    >
                      <sk.icon className="w-5 h-5 mb-1.5 transition-all duration-300" style={{ color: sk.color }} />
                      <span className="text-[9px] font-jetmono text-muted-foreground group-hover:text-foreground/80 transition-colors text-center leading-tight">{sk.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEPLOYMENTS / PROJECTS ───────────────────── */}
        <section id="projects" className="py-28 px-6 md:px-16 border-t border-border/40" style={{ background: "hsl(240 6% 5%)" }}>
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 02 — DEPLOYMENTS" title="Projects" color="blue" />

            {/* Featured */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {projects.filter(p => p.featured).map((proj, i) => {
                const Icon = proj.icon;
                return (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.48 }}
                    whileHover={{ y: -6 }}
                    data-testid={`card-project-featured-${i}`}
                    className={`p-7 rounded-sm relative overflow-hidden group ${proj.cardStyle}`}
                    style={{ background: "hsl(240 6% 7%)" }}
                  >
                    <div className="absolute top-0 right-0 w-36 h-36 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ background: `radial-gradient(circle, ${(proj.tagStyle as { color: string }).color}, transparent)` }} />

                    <div className="flex items-start justify-between mb-4">
                      <span className="flex items-center gap-1.5 font-orbitron text-[9px] tracking-[0.15em] px-2 py-1 rounded-sm" style={proj.tagStyle as React.CSSProperties}>
                        <Icon className="w-3 h-3" /> {proj.tagLabel}
                      </span>
                      <span className="font-jetmono text-xs text-muted-foreground">{proj.year}</span>
                    </div>

                    <h3 className="font-syne text-2xl font-bold mb-1 transition-colors duration-300" style={{ color: (proj.tagStyle as {color:string}).color }}>{proj.title}</h3>
                    <p className="font-jetmono text-[11px] text-muted-foreground mb-4">{proj.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{proj.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.stack.map(t => (
                        <span key={t} className="font-jetmono text-[10px] px-2 py-0.5 rounded-sm" style={{ background: "hsl(240 5% 10%)", border: "1px solid hsl(240 5% 14%)", color: "hsl(240 4% 55%)" }}>{t}</span>
                      ))}
                    </div>

                    <a href={proj.github} target="_blank" rel="noreferrer" data-testid={`link-project-${i}`}
                      className="inline-flex items-center gap-1.5 font-jetmono text-xs transition-colors group/link"
                      style={{ color: (proj.tagStyle as {color:string}).color }}>
                      <Github className="w-3.5 h-3.5" /> View on GitHub
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Other projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.filter(p => !p.featured).map((proj, i) => {
                const Icon = proj.icon;
                return (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.07, duration: 0.42 }}
                    whileHover={{ y: -5 }}
                    data-testid={`card-project-${i}`}
                    className={`p-5 rounded-sm relative flex flex-col group ${proj.cardStyle}`}
                    style={{ background: "hsl(240 6% 7%)" }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="flex items-center gap-1 font-orbitron text-[8px] tracking-[0.12em] px-2 py-1 rounded-sm" style={proj.tagStyle as React.CSSProperties}>
                        <Icon className="w-2.5 h-2.5" /> {proj.tagLabel}
                      </span>
                      <span className="font-jetmono text-[10px] text-muted-foreground">{proj.year}</span>
                    </div>

                    <h3 className="font-syne text-lg font-bold mb-0.5 transition-colors duration-300 group-hover:opacity-90" style={{ color: (proj.tagStyle as {color:string}).color }}>{proj.title}</h3>
                    <p className="font-jetmono text-[10px] text-muted-foreground/70 mb-3">{proj.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{proj.description}</p>

                    {"stat" in proj && proj.stat && (
                      <div className="mb-3 font-jetmono">
                        <span className="text-xl font-bold" style={{ color: (proj.tagStyle as {color:string}).color }}>
                          <AnimatedCounter value={(proj.stat as {value:number;suffix:string;label:string}).value} suffix={(proj.stat as {value:number;suffix:string;label:string}).suffix} />
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">{(proj.stat as {value:number;suffix:string;label:string}).label}</span>
                      </div>
                    )}
                    {"highlight" in proj && proj.highlight && (
                      <div className="mb-3 font-orbitron text-[9px] tracking-widest px-2 py-1 rounded-sm inline-block" style={{ ...(proj.tagStyle as object), border: (proj.tagStyle as {border:string}).border }}>
                        {proj.highlight}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {proj.stack.slice(0, 3).map(t => (
                        <span key={t} className="font-jetmono text-[9px] px-1.5 py-0.5 rounded-sm" style={{ background: "hsl(240 5% 10%)", border: "1px solid hsl(240 5% 14%)", color: "hsl(240 4% 50%)" }}>{t}</span>
                      ))}
                      {proj.stack.length > 3 && (
                        <span className="font-jetmono text-[9px] px-1.5 py-0.5 rounded-sm" style={{ background: "hsl(240 5% 10%)", border: "1px solid hsl(240 5% 14%)", color: "hsl(240 4% 40%)" }}>
                          +{proj.stack.length - 3}
                        </span>
                      )}
                    </div>

                    <a href={proj.github} target="_blank" rel="noreferrer" data-testid={`link-project-github-${i}`}
                      className="inline-flex items-center gap-1 font-jetmono text-[11px] transition-colors group/link mt-auto text-muted-foreground hover:text-foreground">
                      <Github className="w-3 h-3" /> GitHub
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RUNTIME / EXPERIENCE ─────────────────────── */}
        <section id="experience" className="py-28 px-6 md:px-16 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 03 — RUNTIME" title="Experience" color="purple" />

            <div className="space-y-5">
              {[
                {
                  period: "Jul 2025 – Aug 2025",
                  role: "Software Engineer Intern",
                  company: "Pakistan Television Corporation (PTV)",
                  sub: "IT & Database Infrastructure",
                  bullets: [
                    "Re-architected relational enterprise database schemas — reduced data inconsistency by 40%",
                    "Authored network workflow guides and SOPs, improving documentation coverage by 60%",
                    "Maintained 99.9% system uptime via rigorous monitoring and proactive troubleshooting",
                  ],
                  stat: { value: 40, suffix: "%", label: "data inconsistency reduced" },
                  accentColor: CLR.purple,
                },
                {
                  period: "Sep 2023 – Aug 2024",
                  role: "Microsoft Learn Student Ambassador",
                  company: "Microsoft",
                  sub: "Technical Leadership · Remote",
                  bullets: [
                    "Upskilled 100+ students across 5 technical workshops on Python, Azure Cloud, and backend dev",
                    "Accelerated onboarding by 35% with clear technical learning guides",
                  ],
                  stat: { value: 100, suffix: "+", label: "students upskilled" },
                  accentColor: CLR.blue,
                },
              ].map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.48 }}
                  data-testid={`card-experience-${i}`}
                  className="p-6 md:p-8 rounded-sm transition-all duration-300 group"
                  style={{ background: "hsl(240 6% 7%)", border: `1px solid hsl(240 5% 11%)` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${exp.accentColor}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(240 5% 11%)")}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `${exp.accentColor}15`, border: `1px solid ${exp.accentColor}35` }}>
                        <Briefcase className="w-4 h-4" style={{ color: exp.accentColor }} />
                      </div>
                      <div>
                        <h3 className="font-syne text-xl font-bold text-foreground transition-colors duration-300" style={{}} >{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}
                          <span className="mx-2 opacity-40">·</span>
                          <span className="text-xs opacity-70">{exp.sub}</span>
                        </p>
                      </div>
                    </div>
                    <span className="font-orbitron text-[9px] tracking-[0.15em] px-3 py-1.5 rounded-sm whitespace-nowrap self-start"
                      style={{ color: exp.accentColor, background: `${exp.accentColor}15`, border: `1px solid ${exp.accentColor}35` }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-5 ml-13 pl-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 text-xs" style={{ color: exp.accentColor }}>›</span> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="ml-13 pl-1 font-jetmono">
                    <span className="text-xl font-bold" style={{ color: exp.accentColor }}>
                      <AnimatedCounter value={exp.stat.value} suffix={exp.stat.suffix} />
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">{exp.stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION + CERTS ────────────────────────── */}
        <section id="education" className="py-28 px-6 md:px-16 border-t border-border/40" style={{ background: "hsl(240 6% 5%)" }}>
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 04 — EDUCATION" title="Education" color="teal" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Edu card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48 }}
                data-testid="card-education"
                className="p-7 rounded-sm transition-all duration-300 group"
                style={{ background: "hsl(240 6% 7%)", border: "1px solid hsl(240 5% 11%)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = `${CLR.teal}50`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(240 5% 11%)")}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ background: `${CLR.teal}15`, border: `1px solid ${CLR.teal}35` }}>
                    <GraduationCap className="w-4 h-4" style={{ color: CLR.teal }} />
                  </div>
                  <span className="font-orbitron text-[9px] tracking-[0.2em]" style={{ color: CLR.teal }}>2021 – 2025</span>
                </div>
                <h3 className="font-syne text-xl font-bold text-foreground mb-1">B.E. Software Engineering</h3>
                <p className="text-sm text-muted-foreground mb-5">Quaid-e-Awam University of Engineering · Pakistan</p>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm" style={{ background: `${CLR.teal}12`, border: `1px solid ${CLR.teal}30` }}>
                  <span className="font-jetmono text-xs text-muted-foreground">CGPA</span>
                  <span className="font-orbitron font-bold text-lg tracking-widest" style={{ color: CLR.teal }}>3.70 / 4.00</span>
                </div>
                <div className="mt-5 space-y-1.5">
                  {["Database Management Systems","Software Architecture","Object-Oriented Design","Data Structures & Algorithms"].map(m => (
                    <div key={m} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full" style={{ background: `${CLR.teal}80` }} />{m}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-4 h-4" style={{ color: CLR.green }} />
                  <h3 className="font-orbitron text-[10px] tracking-[0.3em] uppercase" style={{ color: CLR.green }}>Certifications</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Meta Back-End Developer Professional Certificate", issuer: "Meta", color: CLR.blue },
                    { name: "Google Advanced Data Analytics Certificate",        issuer: "Google",          color: CLR.teal },
                    { name: "ChatGPT Prompt Engineering for Developers",          issuer: "DeepLearning.AI", color: CLR.purple },
                    { name: "Generative AI for Everyone",                         issuer: "DeepLearning.AI", color: CLR.purple },
                    { name: "Back-End Development and APIs",                      issuer: "freeCodeCamp",    color: CLR.green },
                    { name: "MongoDB Basics — M001 Database Credential",          issuer: "MongoDB",         color: CLR.green },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.065, duration: 0.38 }}
                      data-testid={`card-cert-${i}`}
                      className="flex items-center justify-between p-3 rounded-sm transition-all duration-300 group"
                      style={{ background: "hsl(240 6% 7%)", border: "1px solid hsl(240 5% 11%)" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = `${cert.color}45`)}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "hsl(240 5% 11%)")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-125" style={{ background: cert.color, boxShadow: `0 0 6px ${cert.color}` }} />
                        <span className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">{cert.name}</span>
                      </div>
                      <span className="font-jetmono text-[9px] text-muted-foreground/40 whitespace-nowrap ml-3 hidden sm:block">{cert.issuer}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PING / CONTACT ───────────────────────────── */}
        <section id="contact" className="py-32 px-6 md:px-16 border-t border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 50%, ${CLR.teal}08 0%, transparent 65%)` }} />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-orbitron text-[9px] tracking-[0.45em] uppercase mb-6" style={{ color: CLR.teal }}>// 05 — PING</p>
              <h2 className="font-syne text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
                Let's Build
                <span
                  className="block"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${CLR.teal} 0%, ${CLR.blue} 50%, ${CLR.purple} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 20px rgba(20,185,166,0.3))",
                  }}
                >
                  Something Real.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
                Open to backend engineering, AI integration roles, and ambitious projects. Reach out and let's talk.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
                <a
                  href="mailto:engineerbismaabbasi@gmail.com"
                  data-testid="btn-email-contact"
                  className="group font-syne font-semibold text-sm tracking-wide px-8 py-4 flex items-center justify-center gap-2 rounded-sm transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${CLR.teal}22, ${CLR.blue}22)`,
                    border: `1px solid ${CLR.teal}55`,
                    color: CLR.teal,
                    boxShadow: `0 0 24px ${CLR.teal}25`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 40px ${CLR.teal}45`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 24px ${CLR.teal}25`)}
                >
                  <Mail className="w-4 h-4" />
                  engineerbismaabbasi@gmail.com
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-8">
                {[
                  { href: "https://github.com/BismaAbbasi", label: "GitHub", icon: Github, color: CLR.teal },
                  { href: "https://linkedin.com/in/bisma-abbasi-softwareengineer", label: "LinkedIn", icon: Linkedin, color: CLR.blue },
                  { href: "https://bisma-abbasi-software-engineer-port.vercel.app", label: "Old Portfolio", icon: ExternalLink, color: CLR.purple },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="flex items-center gap-2 font-syne text-sm text-muted-foreground transition-all duration-300"
                    onMouseEnter={e => (e.currentTarget.style.color = link.color)}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    <link.icon className="w-4 h-4" /> {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-20 pt-8 border-t text-center" style={{ borderColor: "hsl(240 5% 10%)" }}>
            <p className="font-orbitron text-[8px] tracking-[0.5em] text-muted-foreground/30">
              BISMA ABBASI · SOFTWARE ENGINEER · PAKISTAN
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
