import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const allTechs = [...new Set(projects.flatMap((p) => p.technologies))].sort();

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(filter));

  return (
    <div className="pt-[72px]">
      <section className="py-20 px-[8%]">
        <SectionHeading label="MY WORK" title="All Projects" />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-muted text-base mb-10 max-w-2xl"
        >
          A collection of projects I have worked on spanning machine learning,
          web development and data analysis.
        </motion.p>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
              filter === "All"
                ? "bg-accent text-white"
                : "bg-bg-card border border-border-subtle text-text-muted hover:text-text hover:border-border"
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer ${
                filter === tech
                  ? "bg-accent text-white"
                  : "bg-bg-card border border-border-subtle text-text-muted hover:text-text hover:border-border"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-text-muted text-center py-16">
            No projects found for this filter.
          </p>
        )}
      </section>
    </div>
  );
}
