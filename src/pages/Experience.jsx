import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import { skillCategories } from "../data/skills";

export default function Experience() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-[72px]">
      {/* Experience */}
      <section className="py-20 px-[8%]">
        <SectionHeading label="EXPERIENCE" title="My experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-text-muted text-base mb-8 leading-relaxed">
            As a Computer Science graduate, I am building my foundation through
            academic projects, self-directed learning and practical
            development work. Below is my professional experience to date.
          </p>

          <div className="space-y-5">
            <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text">SDE Intern</h3>
                  <p className="text-accent text-sm font-medium">ASYVA InfoTech</p>
                  <p className="text-text-muted text-xs mt-1">Dehradun · July 2026 – August 2026</p>
                  <ul className="text-text-muted text-sm mt-3 leading-relaxed space-y-1.5 list-disc list-inside">
                    <li>Worked with Python, SQL and PostgreSQL for software and data-related development tasks.</li>
                    <li>Worked on modules involving PostgreSQL data storage and cloud storage.</li>
                    <li>Used Git and GitHub for version control and development workflow.</li>
                    <li>Gained hands-on exposure to Microsoft Azure, Google Cloud Platform and Apache Airflow.</li>
                    <li>Worked with Agile/Scrum practices, SDLC concepts and CI/CD workflows.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border-subtle rounded-2xl p-8 hover:border-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text">Web Development Intern</h3>
                  <p className="text-accent text-sm font-medium">Codec Technologies</p>
                  <p className="text-text-muted text-xs mt-1">July 2025 – September 2025</p>
                  <p className="text-text-muted text-sm mt-3 leading-relaxed">
                    Worked with web development technologies and gained practical
                    experience building web-based applications. Focused on
                    front-end development fundamentals and real-world project work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="py-20 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="SKILLS" title="Technical skills" />
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
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-[8%] border-t border-white/[0.04]">
        <SectionHeading label="CONTACT" title="Let&apos;s connect" align="center" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-text-muted leading-relaxed">
              I&apos;m open to software development, AI/ML and interesting
              technology opportunities. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:purohitkailash513@gmail.com"
                className="flex items-center gap-3 text-text-muted hover:text-text transition-colors text-sm"
              >
                <Mail size={16} className="text-accent shrink-0" />
                purohitkailash513@gmail.com
              </a>
              <a
                href="tel:+917668754523"
                className="flex items-center gap-3 text-text-muted hover:text-text transition-colors text-sm"
              >
                <Phone size={16} className="text-accent shrink-0" />
                +91 7668754523
              </a>
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <MapPin size={16} className="text-accent shrink-0" />
                Dehradun, Uttarakhand, India
              </div>
            </div>

            <div className="pt-2">
              <SocialLinks />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
