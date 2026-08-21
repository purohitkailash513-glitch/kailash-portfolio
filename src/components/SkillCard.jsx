import { motion } from "framer-motion";

const skillIcons = {
  Python: "🐍",
  "C++": "⚡",
  JavaScript: "🟨",
  SQL: "🗃️",
  HTML: "🌐",
  CSS: "🎨",
  React: "⚛️",
  "Node.js": "🟢",
  "Machine Learning": "🤖",
  "Natural Language Processing": "💬",
  "Neural Networks": "🧠",
  "Scikit-learn": "📊",
  Git: "📦",
  GitHub: "🐙",
  "VS Code": "💻",
};

export default function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="group relative px-5 py-3.5 glass-card rounded-xl text-text-body text-sm font-medium transition-all duration-300 hover:border-accent/30 hover:bg-accent/[0.06] hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)] overflow-hidden cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center gap-2.5">
        <span className="text-base">{skillIcons[skill] || "▸"}</span>
        {skill}
      </span>
    </motion.div>
  );
}
