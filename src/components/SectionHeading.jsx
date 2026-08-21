import { motion } from "framer-motion";

export default function SectionHeading({ label, title, align = "left" }) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
        <p className="text-accent text-xs font-semibold tracking-[3px] uppercase">
          {label}
        </p>
        <div className="h-px w-8 bg-gradient-to-l from-accent to-transparent" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-bold tracking-[-2px] leading-tight gradient-text"
        style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
