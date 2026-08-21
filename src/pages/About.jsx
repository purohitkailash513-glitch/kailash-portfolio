import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen, Lightbulb, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    detail: "Graphic Era Hill University",
    period: "2022 – 2026",
  },
];

const interests = [
  {
    icon: BookOpen,
    title: "Software Development",
    description: "Building clean, functional applications using modern web technologies and programming best practices.",
  },
  {
    icon: Lightbulb,
    title: "Artificial Intelligence",
    description: "Exploring machine learning, neural networks and NLP to solve practical real-world problems.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description: "Strengthening development and engineering skills through hands-on projects and self-directed study.",
  },
];

const techAreas = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "Machine Learning",
  "Natural Language Processing",
  "SQL",
  "Git & GitHub",
  "Data Analysis",
  "Web Development",
];

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 px-[8%]">
        <SectionHeading label="ABOUT ME" title="A little about me" />
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-body leading-[1.9] text-base">
              I am a Computer Science graduate with an interest in software
              development, artificial intelligence and machine learning. I enjoy
              learning new technologies and turning ideas into practical
              applications.
            </p>
            <p className="text-text-body leading-[1.9] text-base">
              My technical experience includes Python, SQL, JavaScript, web
              development, machine learning, natural language processing and
              software development. I am currently focused on strengthening my
              development and engineering skills while exploring opportunities in
              the software industry.
            </p>
            <p className="text-text-body leading-[1.9] text-base">
              Based in Dehradun, Uttarakhand, India, I am eager to contribute to
              meaningful projects and grow as a software developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-2 border-border pl-8 space-y-7"
          >
            <div>
              <p className="text-xs font-semibold text-text uppercase tracking-[1px] mb-1.5">
                Education
              </p>
              <p className="text-text-muted text-sm">
                B.Tech in Computer Science &amp; Engineering
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text uppercase tracking-[1px] mb-1.5">
                University
              </p>
              <p className="text-text-muted text-sm">Graphic Era Hill University</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text uppercase tracking-[1px] mb-1.5">
                Duration
              </p>
              <p className="text-text-muted text-sm">2022 – 2026</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-text uppercase tracking-[1px] mb-1.5">
                Location
              </p>
              <p className="text-text-muted text-sm">Dehradun, Uttarakhand, India</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="EDUCATION" title="Academic background" />
        <div className="max-w-2xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-10 pb-10 border-l border-border last:pb-0"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-bg" />
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-7 hover:border-border transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <edu.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text">{edu.title}</h3>
                    <p className="text-accent text-sm font-medium">{edu.subtitle}</p>
                    <p className="text-text-muted text-sm mt-1">{edu.detail}</p>
                    <div className="flex items-center gap-2 mt-3 text-text-faint text-xs">
                      <Calendar size={12} /> {edu.period}
                      <span className="mx-2">|</span>
                      <MapPin size={12} /> Dehradun, Uttarakhand
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="INTERESTS" title="What drives me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Areas */}
      <section className="py-20 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="TECHNOLOGY AREAS" title="Domains I explore" />
        <div className="flex flex-wrap gap-3">
          {techAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-5 py-2.5 bg-bg-card border border-border-subtle rounded-lg text-text-body text-sm font-medium hover:border-accent hover:bg-accent/[0.06] transition-all duration-300"
            >
              {area}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
