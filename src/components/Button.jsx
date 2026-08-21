import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-white to-zinc-200 text-bg hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] font-bold",
  secondary:
    "border border-white/10 text-text-body hover:text-text hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]",
  accent:
    "bg-gradient-to-r from-accent to-purple-400 text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] font-bold",
};

export default function Button({ to, href, variant = "primary", children, className = "" }) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
        <a href={href} className={classes}>
          {children}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <button className={classes}>{children}</button>
    </motion.div>
  );
}
