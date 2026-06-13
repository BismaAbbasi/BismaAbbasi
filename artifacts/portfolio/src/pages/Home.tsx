import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { 
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiNestjs, 
  SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit, 
  SiOpenai, SiVercel
} from "react-icons/si";
import { 
  Terminal, Database, Code2, Cpu, Server, Lock, 
  ChevronRight, ExternalLink, Github, Linkedin, Mail, GraduationCap, Award, Briefcase, Play
} from "lucide-react";

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
    </div>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const startTyping = () => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 50);
      return interval;
    };
    
    timeout = setTimeout(() => {
      const interval = startTyping();
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "// INIT" },
    { id: "about", label: "// SYS_INFO" },
    { id: "projects", label: "// DEPLOYMENTS" },
    { id: "experience", label: "// RUNTIME" },
    { id: "contact", label: "// PING" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-16 md:w-48 border-r border-border/50 bg-background/80 backdrop-blur-md z-50 flex flex-col items-center py-8 hidden sm:flex">
        <div className="flex-1 flex flex-col justify-center gap-8 w-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 font-mono text-xs tracking-widest transition-colors flex items-center group w-full ${
                activeSection === item.id ? "text-primary glow-text" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_10px_var(--color-primary)]"
                />
              )}
              <span className="hidden md:inline-block truncate">{item.label}</span>
              <span className="md:hidden">
                <ChevronRight className={`w-4 h-4 ${activeSection === item.id ? "text-primary" : ""}`} />
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="sm:ml-16 md:ml-48">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
          <ParticleBackground />
          <div className="max-w-5xl w-full z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-primary mb-4 flex items-center gap-2"
            >
              <Terminal className="w-5 h-5" />
              <span>LOGIN: SUCCESS_</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter mb-6">
              <span className="block text-foreground">Bisma</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 glow-text">Abbasi</span>
            </h1>
            
            <div className="h-8 md:h-12 mb-8 font-mono text-lg md:text-xl text-muted-foreground">
              <TypewriterText text="Software Engineer • Backend Developer • AI Integration Specialist" delay={0.5} />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 border-l-2 border-primary/50 pl-4"
            >
              Building high-performance REST APIs, cloud-scale systems, and intelligent LLM integrations. 
              Focused on precision, latency reduction, and shipping production-ready architecture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="px-6 py-3 bg-primary/10 text-primary font-mono border border-primary/50 hover:bg-primary/20 transition-all flex items-center gap-2 neon-border">
                <Play className="w-4 h-4" />
                EXECUTE /projects
              </a>
              <a href="https://github.com/BismaAbbasi" target="_blank" rel="noreferrer" className="px-6 py-3 bg-secondary text-foreground font-mono hover:bg-secondary/80 transition-all flex items-center gap-2 border border-border">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 p-6 md:p-12 border-t border-border/50 relative">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-4">
                <span className="text-primary text-xl font-mono">// 01</span>
                SYS_INFO
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-muted-foreground text-lg"
              >
                <p>
                  I engineer backend infrastructure that doesn't fail. With a deep focus on Node.js, NestJS, and Python ecosystems, I build systems designed for scale and reliability.
                </p>
                <p>
                  Recently, my focus has been architecting AI/LLM integrations—connecting foundation models (LLaMA, OpenAI, Gemini) to robust backend pipelines, reducing response latency, and building intelligent agents that solve real business problems.
                </p>
                <div className="p-4 bg-secondary/50 border border-border/50 font-mono text-sm text-foreground">
                  <span className="text-primary">{`>`}</span> status --current<br/>
                  <span className="text-muted-foreground">Ready for deployment. Seeking high-impact backend engineering roles.</span>
                </div>
              </motion.div>

              <div>
                <h3 className="font-mono text-sm text-primary mb-6 tracking-widest uppercase">TECH_STACK</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {[
                    { icon: SiTypescript, name: "TypeScript" },
                    { icon: SiJavascript, name: "JavaScript" },
                    { icon: SiPython, name: "Python" },
                    { icon: SiNodedotjs, name: "Node.js" },
                    { icon: SiNestjs, name: "NestJS" },
                    { icon: SiExpress, name: "Express.js" },
                    { icon: SiMongodb, name: "MongoDB" },
                    { icon: SiPostgresql, name: "PostgreSQL" },
                    { icon: SiDocker, name: "Docker" },
                    { icon: SiGit, name: "Git" },
                    { icon: Cpu, name: "LLaMA/Groq" },
                    { icon: SiOpenai, name: "OpenAI" },
                    { icon: Code2, name: "LangChain" },
                    { icon: SiVercel, name: "Vercel" },
                    { icon: Server, name: "Railway" },
                    { icon: Database, name: "Azure" }
                  ].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center justify-center p-4 bg-card border border-border/50 rounded-sm hover:border-primary/50 transition-colors group cursor-crosshair"
                    >
                      <skill.icon className="w-8 h-8 mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-xs font-mono text-center">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 p-6 md:p-12 border-t border-border/50 relative bg-secondary/10">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-4">
                <span className="text-primary text-xl font-mono">// 02</span>
                DEPLOYMENTS
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Study & Interview Prep API",
                  year: "2025",
                  stack: ["NestJS", "TypeScript", "MongoDB Atlas", "Groq LLaMA 3.3", "JWT", "Swagger"],
                  description: "Architected a high-performance prep API leveraging Groq's lightning-fast inference.",
                  stat: { value: 70, suffix: "%", text: "reduced preparation time" },
                  stat2: { value: 2, prefix: "<", suffix: "s", text: "LLM response latency" }
                },
                {
                  title: "Users Management REST API",
                  year: "2025",
                  stack: ["NestJS", "TypeScript", "MongoDB", "JWT", "bcrypt", "Railway", "CI/CD"],
                  description: "Production-grade REST API deployed on Railway with robust authentication pipelines.",
                  stat: { value: 95, suffix: "%", text: "fewer validation errors" }
                },
                {
                  title: "ViewTube Backend API",
                  year: "2024",
                  stack: ["Node.js", "Express", "MongoDB", "Cloudinary", "Multer"],
                  description: "Built media streaming pipelines using Cloudinary CDNs and Multer buffers.",
                  stat: { value: 45, suffix: "%", text: "reduced upload latency" }
                },
                {
                  title: "AI Smart Pediatric Health Advisor",
                  year: "2024–2025",
                  stack: ["Python", "Flask", "LLM APIs", "Agile"],
                  description: "Capstone Project Team Lead. Engineered an AI-powered diagnostic advisory tool.",
                  highlight: "Team Lead & AI Integration"
                },
                {
                  title: "Dynamic CSV Data Mapping System",
                  year: "2023",
                  stack: ["Node.js", "Express", "MongoDB", "Data Streams"],
                  description: "Developed a memory-efficient stream processing engine for massive CSV datasets.",
                  stat: { value: 10, suffix: "×", text: "batch ingestion acceleration" }
                }
              ].map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-card border border-border/50 relative group overflow-hidden neon-border"
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground">{project.year}</div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 pr-12 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 h-10">
                    {project.description}
                  </p>
                  
                  {/* Stats/Highlights */}
                  <div className="mb-6 flex gap-4">
                    {project.stat && (
                      <div className="font-mono">
                        <div className="text-2xl text-primary font-bold">
                          <AnimatedCounter value={project.stat.value} prefix={project.stat.prefix} suffix={project.stat.suffix} />
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">{project.stat.text}</div>
                      </div>
                    )}
                    {project.stat2 && (
                      <div className="font-mono">
                        <div className="text-2xl text-primary font-bold">
                          <AnimatedCounter value={project.stat2.value} prefix={project.stat2.prefix} suffix={project.stat2.suffix} />
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">{project.stat2.text}</div>
                      </div>
                    )}
                    {project.highlight && (
                      <div className="font-mono text-primary text-sm flex items-center">
                        <span className="bg-primary/10 px-2 py-1 border border-primary/20">{project.highlight}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-secondary text-secondary-foreground border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 p-6 md:p-12 border-t border-border/50 relative">
          <div className="max-w-5xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 flex items-center gap-4">
                <span className="text-primary text-xl font-mono">// 03</span>
                RUNTIME
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/20 before:to-transparent">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow-[0_0_15px_var(--color-primary)] text-primary z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col mb-4">
                    <span className="text-primary font-mono text-sm">Jul 2025 – Aug 2025</span>
                    <h3 className="text-xl font-bold text-foreground">Software Engineer Intern</h3>
                    <span className="text-muted-foreground">Pakistan Television Corporation (PTV)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Architected data management solutions and streamlined backend workflows for enterprise operations.
                  </p>
                  <div className="font-mono bg-secondary/50 p-3 border-l-2 border-primary text-sm">
                    <span className="text-primary font-bold"><AnimatedCounter value={40} suffix="%" /></span> reduced data inconsistency
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/50 bg-background text-primary/50 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Award className="w-4 h-4" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col mb-4">
                    <span className="text-primary font-mono text-sm">Sep 2023 – Aug 2024</span>
                    <h3 className="text-xl font-bold text-foreground">Student Ambassador</h3>
                    <span className="text-muted-foreground">Microsoft Learn</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led technical workshops on cloud technologies and backend development fundamentals.
                  </p>
                  <div className="font-mono bg-secondary/50 p-3 border-l-2 border-primary text-sm">
                    Upskilled <span className="text-primary font-bold"><AnimatedCounter value={100} suffix="+" /></span> students across 5 technical workshops
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* EDUCATION & CERTS SECTION */}
        <section id="education" className="py-24 p-6 md:p-12 border-t border-border/50 relative bg-secondary/5">
          <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  EDUCATION
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border/50 hover:border-primary/50 transition-all group"
              >
                <div className="font-mono text-primary text-sm mb-2">2021 – 2025</div>
                <h3 className="text-xl font-bold text-foreground mb-1">B.E. Software Engineering</h3>
                <p className="text-muted-foreground mb-4">Quaid-e-Awam University</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono">
                  CGPA: <span className="font-bold tracking-wider">3.70/4.00</span>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div id="certifications">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-3xl font-display font-bold flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  CERTIFICATIONS
                </h2>
              </motion.div>

              <div className="flex flex-col gap-3">
                {[
                  "Meta Back-End Developer Professional Certificate",
                  "Google Advanced Data Analytics Certificate",
                  "ChatGPT Prompt Engineering for Developers (DeepLearning.AI)",
                  "Generative AI for Everyone (DeepLearning.AI)",
                  "Back-End Development and APIs (freeCodeCamp)",
                  "MongoDB Basics M001 (MongoDB University)"
                ].map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-card border border-border/50 hover:border-primary/30 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all" />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {cert}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 p-6 md:p-12 border-t border-border/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-3xl w-full mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 glow-text">CONNECT?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Open to backend engineering and AI integration opportunities where precision and performance matter.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <a 
                  href="mailto:engineerbismaabbasi@gmail.com"
                  className="px-8 py-4 bg-primary text-primary-foreground font-mono font-bold hover:bg-primary/90 transition-all flex items-center gap-3 w-full sm:w-auto justify-center hover:scale-105 active:scale-95 shadow-[0_0_20px_hsla(var(--primary)/0.4)]"
                >
                  <Mail className="w-5 h-5" />
                  INITIATE COMMS
                </a>
              </div>

              <div className="flex items-center justify-center gap-8 font-mono text-sm">
                <a href="https://github.com/BismaAbbasi" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="https://linkedin.com/in/bisma-abbasi-softwareengineer" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://bisma-abbasi-software-engineer-port.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors hidden sm:flex">
                  <ExternalLink className="w-5 h-5" /> Legacy Port
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-xs text-muted-foreground/50">
            SYSTEM.OUT.PRINTLN("PORTFOLIO V2.0 // DEPLOYED")
          </div>
        </section>

      </main>
    </div>
  );
}
