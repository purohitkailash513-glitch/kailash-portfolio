import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Gradient visual header */}
      <div className={`relative h-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl opacity-60 group-hover:scale-110 transition-transform duration-500">
          {project.icon}
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent/60 to-accent/30 text-xs font-bold font-mono tracking-wider">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-500" />
        </div>

        <h3 className="text-xl font-bold text-text mb-3 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed mb-5 group-hover:text-text-body/80 transition-colors duration-300">
          {project.description}
        </p>

        {project.features && (
          <ul className="mb-5 space-y-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="text-text-muted text-xs flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">&#9670;</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/[0.04] border border-white/[0.06] rounded-lg text-text-muted text-xs font-medium group-hover:border-accent/15 group-hover:text-text-body transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-accent transition-colors"
            >
              <GithubIcon /> GitHub
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : null}
          {!project.github && !project.live && (
            <span className="text-xs text-text-faint italic opacity-60">
              Code &amp; demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
