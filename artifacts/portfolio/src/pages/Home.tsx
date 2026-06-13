import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiNestjs,
  SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit,
  SiOpenai, SiVercel, SiReact, SiVite, SiSwagger, SiLangchain
} from "react-icons/si";
import {
  Terminal, Code2, Cpu, Server, Lock,
  ChevronRight, ExternalLink, Github, Linkedin, Mail,
  GraduationCap, Award, Briefcase, ArrowUpRight, Sparkles, Zap, Globe
} from "lucide-react";

// ─── Animated Grid Background ───────────────────────────────────────────────
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsla(239,84%,67%,0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsla(239,84%,67%,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
    <motion.div
      className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-10"
      style={{ background: "radial-gradient(circle, hsl(239,84%,67%), transparent 70%)" }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.14, 0.08] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-8"
      style={{ background: "radial-gradient(circle, hsl(258,80%,65%), transparent 70%)" }}
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  </div>
);

// ─── Typewriter Component ────────────────────────────────────────────────────
const roles = [
  "Backend Engineer",
  "AI/LLM Integration Specialist",
  "NestJS & Node.js Developer",
  "Distributed Systems Builder",
];

const TypewriterCycle = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="font-mono text-lg md:text-xl text-muted-foreground">
      <span className="text-primary">{">"}</span> {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
        className="inline-block w-[2px] h-5 bg-primary ml-1 align-middle"
      />
    </span>
  );
};

// ─── Section Header ──────────────────────────────────────────────────────────
const SectionHeader = ({ num, title }: { num: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <div className="flex items-baseline gap-4 mb-4">
      <span className="text-xs font-mono text-primary tracking-[0.3em] opacity-70">{num}</span>
      <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">{title}</h2>
    </div>
    <div className="h-px w-full bg-gradient-to-r from-primary/60 via-accent/30 to-transparent" />
  </motion.div>
);

// ─── Projects Data ───────────────────────────────────────────────────────────
const projects = [
  {
    title: "CareerPilot AI",
    subtitle: "Agentic AI Career Intelligence System",
    year: "2025",
    stack: ["NestJS", "TypeScript", "LangGraph", "Groq LLaMA 3.3", "MongoDB"],
    description: "Agentic multi-step AI system that analyzes CV-to-job fitness, detects skill gaps, and auto-generates tailored cover letters using LangGraph orchestration and Groq's ultra-fast inference.",
    github: "https://github.com/BismaAbbasi/CareerPilot-AI",
    tag: "Agentic AI",
    tagColor: "text-primary bg-primary/10 border-primary/30",
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
    tag: "Full-Stack",
    tagColor: "text-accent bg-accent/10 border-accent/30",
    icon: Zap,
    featured: true,
  },
  {
    title: "AI Interview Prep API",
    subtitle: "LLM-Powered Study & Interview Assistant",
    year: "2025",
    stack: ["NestJS", "TypeScript", "Groq LLaMA 3.3 70B", "MongoDB Atlas", "JWT", "Swagger"],
    description: "Production REST API generating structured mock interview questions with model answers. Engineered rigid prompt templates achieving sub-2-second LLM response latency.",
    github: "https://github.com/BismaAbbasi/AI-Prep-API",
    stat: { value: 70, suffix: "%", label: "prep time saved" },
    tag: "AI / LLM",
    tagColor: "text-primary bg-primary/10 border-primary/30",
    icon: Cpu,
    featured: false,
  },
  {
    title: "NestJS Users REST API",
    subtitle: "Production-Grade User Management System",
    year: "2025",
    stack: ["NestJS", "TypeScript", "MongoDB Atlas", "JWT", "bcrypt", "Railway", "CI/CD"],
    description: "Fully deployed REST API on Railway with complete CRUD, Mongoose schema validation, bcrypt password hashing, stateless JWT flows, and CI/CD automation.",
    github: "https://github.com/BismaAbbasi/nestjs-users-api",
    stat: { value: 95, suffix: "%", label: "fewer validation errors" },
    tag: "Backend API",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    icon: Server,
    featured: false,
  },
  {
    title: "ViewTube Backend",
    subtitle: "YouTube-Inspired Video Platform API",
    year: "2024",
    stack: ["Node.js", "Express.js", "MongoDB Atlas", "Cloudinary CDN", "Multer", "JWT"],
    description: "Modular video-sharing backend with MongoDB aggregation pipelines, Cloudinary CDN integration, and Multer stream processing. Reduced media upload latency significantly.",
    github: "https://github.com/BismaAbbasi/ViewTube-Backend",
    stat: { value: 45, suffix: "%", label: "upload latency cut" },
    tag: "Backend API",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    icon: Globe,
    featured: false,
  },
  {
    title: "CSV Data Manager",
    subtitle: "Secure Data Import & Mapping System",
    year: "2023",
    stack: ["Node.js", "Express.js", "MongoDB", "Multer", "JWT Auth", "Stream Processing"],
    description: "High-throughput CSV ingestion engine with concurrent insertMany() pipelines and dynamic schema mapping layer. Eliminated runtime schema-mismatch crashes entirely.",
    github: "https://github.com/BismaAbbasi/csv-data-manager",
    stat: { value: 10, suffix: "×", label: "ingestion speed boost" },
    tag: "Data Engineering",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    icon: Code2,
    featured: false,
  },
  {
    title: "AI Pediatric Health Advisor",
    subtitle: "Capstone — Intelligent Diagnostic System",
    year: "2024–2025",
    stack: ["Python", "Flask", "LLM APIs", "Agile / Scrum"],
    description: "Team Lead on 4-sprint Agile project. AI-powered diagnostic advisor providing intelligent health guidance and nutrition recommendations for pediatric patients via LLM APIs.",
    github: "https://github.com/BismaAbbasi/AI-Driven-Smart-Pediatric-Health-Advisor-",
    tag: "AI / Healthcare",
    tagColor: "text-rose-400 bg-rose-400/10 border-rose-400/30",
    icon: Sparkles,
    highlight: "Team Lead",
    featured: false,
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const sections = ["hero", "about", "projects", "experience", "education", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 250;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero",       label: "Init",         num: "00" },
    { id: "about",      label: "Stack",         num: "01" },
    { id: "projects",   label: "Projects",      num: "02" },
    { id: "experience", label: "Experience",    num: "03" },
    { id: "education",  label: "Education",     num: "04" },
    { id: "contact",    label: "Contact",       num: "05" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Scroll progress bar */}
      <motion.div className="progress-bar" style={{ scaleX, transformOrigin: "0%" }} />

      {/* ── Side Navigation ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 h-screen w-14 md:w-52 border-r border-border/40 bg-background/80 backdrop-blur-xl z-50 hidden sm:flex flex-col py-8">
        <div className="px-4 mb-10 hidden md:block">
          <span className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">Bisma.dev</span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-testid={`nav-${item.id}`}
              className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-300 group ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/80"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className={`font-mono text-[10px] transition-colors ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground/50 group-hover:text-muted-foreground"
              }`}>{item.num}</span>
              <span className="hidden md:block text-sm font-medium tracking-wide">{item.label}</span>
              <span className="md:hidden">
                <ChevronRight className={`w-3 h-3 ${activeSection === item.id ? "text-primary" : ""}`} />
              </span>
            </a>
          ))}
        </div>
        <div className="px-4 hidden md:flex flex-col gap-3 pb-4">
          <a href="https://github.com/BismaAbbasi" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-github-nav">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com/in/bisma-abbasi-softwareengineer" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin-nav">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ── Main ───────────────────────────────────────────────────── */}
      <main className="sm:ml-14 md:ml-52">

        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center p-6 md:p-16 overflow-hidden scan-effect">
          <GridBackground />

          <div className="max-w-5xl w-full z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 font-mono text-xs text-primary mb-6 tracking-widest"
            >
              <Terminal className="w-4 h-4" />
              <span className="opacity-70">root@bisma.dev:~$</span>
              <span>cat profile.json</span>
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-4 bg-primary/80 inline-block ml-1" />
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-none"
              >
                Bisma
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold font-display tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent glow-text"
              >
                Abbasi
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8 h-8"
            >
              <TypewriterCycle />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/40 pl-4"
            >
              Software Engineer specializing in Backend Architecture, RESTful API Design, 
              and AI/LLM Integration. CGPA 3.70 — building production systems that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                data-testid="btn-view-projects"
                className="group px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 rounded-sm shadow-[0_0_20px_hsla(239,84%,67%,0.3)] hover:shadow-[0_0_30px_hsla(239,84%,67%,0.5)]"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/BismaAbbasi"
                target="_blank"
                rel="noreferrer"
                data-testid="btn-github-hero"
                className="px-6 py-3 bg-secondary border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 flex items-center gap-2 rounded-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="mailto:engineerbismaabbasi@gmail.com"
                data-testid="btn-email-hero"
                className="px-6 py-3 border border-border text-muted-foreground font-medium text-sm tracking-wide hover:border-primary/50 hover:text-foreground transition-all duration-300 flex items-center gap-2 rounded-sm"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-16 flex flex-wrap gap-8 border-t border-border/40 pt-8"
            >
              {[
                { value: 7, suffix: "+", label: "Production Projects" },
                { value: 3, suffix: ".70", label: "CGPA / 4.00" },
                { value: 100, suffix: "+", label: "Students Mentored" },
              ].map((s) => (
                <div key={s.label} className="font-mono">
                  <div className="text-2xl font-bold text-foreground">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT / STACK */}
        <section id="about" className="py-28 px-6 md:px-16 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 01" title="Stack" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-5 text-muted-foreground leading-relaxed"
              >
                <p className="text-lg">
                  I build backend infrastructure that ships to production and stays there — REST APIs, microservices, and AI-augmented pipelines built with NestJS, Node.js, and Python.
                </p>
                <p>
                  My recent focus is connecting foundation models (LLaMA 3.3, OpenAI, Gemini) to resilient backend systems — achieving real latency wins through deliberate prompt engineering and smart architecture.
                </p>
                <div className="p-4 bg-secondary/60 border border-border/50 font-mono text-sm rounded-sm">
                  <div className="text-primary mb-1 text-xs">{"// Current status"}</div>
                  <span className="text-muted-foreground">{"{ "}</span>
                  <span className="text-primary">"open_to"</span>
                  <span className="text-muted-foreground">{": "}</span>
                  <span className="text-foreground">"backend &amp; AI engineering roles"</span>
                  <span className="text-muted-foreground">{" }"}</span>
                </div>
              </motion.div>

              <div>
                <p className="font-mono text-xs text-primary tracking-[0.3em] mb-6 uppercase">Technologies</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {[
                    { icon: SiTypescript,  name: "TypeScript", color: "#3178C6" },
                    { icon: SiJavascript,  name: "JavaScript", color: "#F7DF1E" },
                    { icon: SiPython,      name: "Python",     color: "#3776AB" },
                    { icon: SiNodedotjs,   name: "Node.js",    color: "#339933" },
                    { icon: SiNestjs,      name: "NestJS",     color: "#E0234E" },
                    { icon: SiExpress,     name: "Express",    color: "#ffffff" },
                    { icon: SiMongodb,     name: "MongoDB",    color: "#47A248" },
                    { icon: SiPostgresql,  name: "PostgreSQL", color: "#336791" },
                    { icon: SiDocker,      name: "Docker",     color: "#2496ED" },
                    { icon: SiGit,         name: "Git",        color: "#F05032" },
                    { icon: SiOpenai,      name: "OpenAI",     color: "#ffffff" },
                    { icon: SiReact,       name: "React",      color: "#61DAFB" },
                    { icon: SiVite,        name: "Vite",       color: "#646CFF" },
                    { icon: SiVercel,      name: "Vercel",     color: "#ffffff" },
                    { icon: Cpu,           name: "Groq/LLM",   color: "" },
                    { icon: Lock,          name: "JWT/Auth",   color: "" },
                  ].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className="flex flex-col items-center justify-center p-3 bg-card border border-border/40 rounded-sm hover:border-primary/50 transition-all duration-300 group cursor-default"
                    >
                      <skill.icon
                        className="w-6 h-6 mb-1.5 transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color || "hsl(var(--muted-foreground))", filter: "drop-shadow(0 0 0 transparent)" }}
                      />
                      <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 px-6 md:px-16 border-t border-border/40 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 02" title="Projects" />

            {/* Featured row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {projects.filter(p => p.featured).map((project, i) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    data-testid={`card-project-featured-${i}`}
                    className="p-7 bg-card border border-border/40 rounded-sm relative overflow-hidden group neon-border gradient-border"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                      style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent)" }} />

                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-sm border ${project.tagColor}`}>
                        <Icon className="w-3 h-3" />
                        {project.tag}
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground mb-4">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-secondary text-muted-foreground border border-border/60 rounded-sm">{t}</span>
                      ))}
                    </div>

                    <a href={project.github} target="_blank" rel="noreferrer" data-testid={`link-project-${i}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors group/link">
                      <Github className="w-3.5 h-3.5" />
                      View on GitHub
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Other projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.filter(p => !p.featured).map((project, i) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    whileHover={{ y: -5 }}
                    data-testid={`card-project-${i}`}
                    className="p-6 bg-card border border-border/40 rounded-sm relative overflow-hidden group flex flex-col neon-border"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-sm border ${project.tagColor}`}>
                        <Icon className="w-3 h-3" />
                        {project.tag}
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                    </div>

                    <h3 className="text-lg font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-[11px] font-mono text-muted-foreground/70 mb-3">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                    {project.stat && (
                      <div className="mb-4 font-mono">
                        <span className="text-xl font-bold text-primary">
                          <AnimatedCounter value={project.stat.value} suffix={project.stat.suffix} />
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">{project.stat.label}</span>
                      </div>
                    )}
                    {project.highlight && (
                      <div className="mb-4 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-1 inline-block rounded-sm">
                        {project.highlight}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.stack.slice(0, 4).map(t => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground border border-border/60 rounded-sm">{t}</span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground/60 border border-border/40 rounded-sm">+{project.stack.length - 4}</span>
                      )}
                    </div>

                    <a href={project.github} target="_blank" rel="noreferrer" data-testid={`link-project-github-${i}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors group/link mt-auto">
                      <Github className="w-3 h-3" />
                      GitHub
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-28 px-6 md:px-16 border-t border-border/40">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 03" title="Experience" />

            <div className="space-y-6">
              {[
                {
                  period: "Jul 2025 – Aug 2025",
                  role: "Software Engineer Intern",
                  company: "Pakistan Television Corporation (PTV)",
                  type: "IT & Database Infrastructure",
                  bullets: [
                    "Re-architected relational enterprise database schemas — reduced data inconsistency by 40%",
                    "Authored network workflow guides and SOPs improving documentation coverage by 60%",
                    "Maintained 99.9% system uptime through rigorous monitoring and proactive troubleshooting",
                  ],
                  stat: { value: 40, suffix: "%", label: "data inconsistency reduced" },
                  current: false,
                },
                {
                  period: "Sep 2023 – Aug 2024",
                  role: "Microsoft Learn Student Ambassador",
                  company: "Microsoft",
                  type: "Technical Leadership · Remote",
                  bullets: [
                    "Upskilled 100+ students across 5 technical workshops on Python, Azure Cloud, and backend dev",
                    "Accelerated onboarding by 35% with clear technical learning guides for backend & cloud",
                  ],
                  stat: { value: 100, suffix: "+", label: "students upskilled" },
                  current: false,
                },
              ].map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  data-testid={`card-experience-${i}`}
                  className="p-6 md:p-8 bg-card border border-border/40 rounded-sm hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company} <span className="text-muted-foreground/50">·</span> <span className="text-xs">{exp.type}</span></p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-sm whitespace-nowrap self-start">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5 ml-14">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="ml-14 font-mono">
                    <span className="text-xl font-bold text-primary">
                      <AnimatedCounter value={exp.stat.value} suffix={exp.stat.suffix} />
                    </span>
                    <span className="text-xs text-muted-foreground ml-2">{exp.stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION + CERTS */}
        <section id="education" className="py-28 px-6 md:px-16 border-t border-border/40 bg-secondary/5">
          <div className="max-w-5xl mx-auto">
            <SectionHeader num="// 04" title="Education" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Education card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                data-testid="card-education"
                className="p-7 bg-card border border-border/40 rounded-sm hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-primary">2021 – 2025</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">B.E. Software Engineering</h3>
                <p className="text-muted-foreground text-sm mb-5">Quaid-e-Awam University of Engineering, Science & Technology · Pakistan</p>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/25 rounded-sm">
                  <span className="font-mono text-xs text-muted-foreground">CGPA</span>
                  <span className="font-mono font-bold text-primary text-lg tracking-wider">3.70 / 4.00</span>
                </div>
                <div className="mt-5 space-y-1.5">
                  {["Database Management Systems", "Software Architecture", "Object-Oriented Design", "Data Structures & Algorithms"].map(m => (
                    <div key={m} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      {m}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-display font-bold">Certifications</h3>
                </div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Meta Back-End Developer Professional Certificate", issuer: "Meta / Coursera" },
                    { name: "Google Advanced Data Analytics Certificate",        issuer: "Google / Coursera" },
                    { name: "ChatGPT Prompt Engineering for Developers",          issuer: "DeepLearning.AI" },
                    { name: "Generative AI for Everyone",                         issuer: "DeepLearning.AI" },
                    { name: "Back-End Development and APIs",                      issuer: "freeCodeCamp" },
                    { name: "MongoDB Basics — M001 Database Credential",          issuer: "MongoDB University" },
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      data-testid={`card-cert-${i}`}
                      className="flex items-center justify-between p-3.5 bg-card border border-border/40 rounded-sm hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_6px_hsl(var(--primary))] transition-all" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-muted-foreground/50 whitespace-nowrap ml-2 hidden sm:block">{cert.issuer}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 md:px-16 border-t border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsla(239,84%,67%,0.06)_0%,transparent_65%)]" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-xs text-primary tracking-[0.4em] uppercase mb-6 opacity-70">// 05 — Contact</p>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight tracking-tight">
                Let's Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">
                  Something Real.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-lg mx-auto">
                Open to backend engineering, AI integration roles, and ambitious projects. Reach out and let's talk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
                <a
                  href="mailto:engineerbismaabbasi@gmail.com"
                  data-testid="btn-email-contact"
                  className="group px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 rounded-sm shadow-[0_0_24px_hsla(239,84%,67%,0.35)] hover:shadow-[0_0_36px_hsla(239,84%,67%,0.55)]"
                >
                  <Mail className="w-4 h-4" />
                  engineerbismaabbasi@gmail.com
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex items-center justify-center gap-6">
                {[
                  { href: "https://github.com/BismaAbbasi", label: "GitHub", icon: Github },
                  { href: "https://linkedin.com/in/bisma-abbasi-softwareengineer", label: "LinkedIn", icon: Linkedin },
                  { href: "https://bisma-abbasi-software-engineer-port.vercel.app", label: "Old Portfolio", icon: ExternalLink },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-20 pt-8 border-t border-border/30 text-center">
            <p className="font-mono text-xs text-muted-foreground/40 tracking-widest">
              BISMA ABBASI · SOFTWARE ENGINEER · PAKISTAN
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
