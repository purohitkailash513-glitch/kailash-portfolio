import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Brain, Layers } from "lucide-react";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import { projects } from "../data/projects";
import { skillCategories } from "../data/skills";

const strengths = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Building clean, functional applications with modern web technologies and programming languages.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Applying machine learning algorithms and NLP techniques to solve real-world problems.",
  },
  {
    icon: Layers,
    title: "Problem Solver",
    description:
      "Turning ideas into practical applications through systematic learning and continuous improvement.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-[72px] px-[8%] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        {/* Gradient orb glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative w-full py-16">
          {/* Mobile Photo - visible below lg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden flex justify-center mb-10"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent via-purple-500 to-accent rounded-full blur-lg opacity-30 animate-[pulse-glow_4s_ease-in-out_infinite]" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <img
                  src="/photo.jpg"
                  alt="Kailash Purohit"
                  className="w-full h-full object-contain bg-bg-card"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-4 border-bg flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.4)]">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-widest uppercase">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-extrabold leading-[0.95] tracking-[-4px] text-text"
              style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
            >
              Kailash
              <span className="block gradient-text">Purohit</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 text-xl font-normal"
            >
              <span className="text-text-body">Software Developer</span>
              <span className="mx-3 text-accent">|</span>
              <span className="text-text-body">AI/ML Enthusiast</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-[560px] text-text-muted leading-relaxed text-base"
            >
              Computer Science graduate passionate about software development,
              artificial intelligence, machine learning and building practical
              real-world applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-9"
            >
              <Button to="/projects">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/experience#contact" variant="secondary">
                Contact Me
              </Button>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/10 text-text-body hover:text-text hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300"
              >
                <Download size={16} className="mr-2" /> Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9"
            >
              <SocialLinks />
            </motion.div>
          </div>

          {/* Photo + Code card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            {/* Profile Photo */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent via-purple-500 to-accent rounded-full blur-lg opacity-30 animate-[pulse-glow_4s_ease-in-out_infinite]" />
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                <img
                  src="/photo.jpg"
                  alt="Kailash Purohit"
                  className="w-full h-full object-contain bg-bg-card"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-bg flex items-center justify-center shadow-[0_0_12px_rgba(34,197,94,0.4)]">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>

            {/* Code card */}
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-purple-500/5 to-accent/10 rounded-3xl blur-xl opacity-50" />
              <div className="relative glass-card rounded-2xl overflow-hidden glow-accent">
                <div className="h-[42px] border-b border-white/[0.06] flex items-center gap-2 px-5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-text-faint text-[11px] font-mono">
                    developer.js
                  </span>
                </div>
                <pre className="p-7 text-sm font-mono leading-[1.9] overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">developer</span>{" "}
                    <span className="text-text-muted">=</span>{" "}
                    <span className="text-yellow-300">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-300">name</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-amber-300">"Kailash Purohit"</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-300">role</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-amber-300">"Software Developer"</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-300">skills</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-yellow-300">[</span>
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">"Python"</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">"React"</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">"SQL"</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-amber-300">"AI / ML"</span>
                    {"\n"}
                    {"  "}
                    <span className="text-yellow-300">]</span>
                    <span className="text-text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-green-300">learning</span>
                    <span className="text-text-muted">: </span>
                    <span className="text-amber-300">"Building new things"</span>
                    {"\n"}
                    <span className="text-yellow-300">{"}"}</span>
                    <span className="text-text-muted">;</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="relative py-24 px-[8%] border-t border-white/[0.04]">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="relative">
          <SectionHeading label="SKILLS" title="Technologies I work with" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-xs font-semibold text-accent uppercase tracking-[2px] mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <SkillCard key={skill} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="MY WORK" title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Button to="/projects" variant="secondary">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* Strengths */}
      <section className="relative py-24 px-[8%] border-t border-white/[0.04]">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="relative">
          <SectionHeading
            label="WHY WORK WITH ME"
            title="What I bring"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl p-8 hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-shadow duration-500">
                    <s.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-[8%] border-t border-white/[0.04] text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-extrabold tracking-[-3px] mb-5 gradient-text"
            style={{ fontSize: "clamp(32px, 6vw, 64px)" }}
          >
            Let&apos;s build something together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-text-muted text-lg mb-8"
          >
            Open to software development, AI/ML and interesting technology
            opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/experience#contact">
              Get In Touch <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
