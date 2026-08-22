import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-[8%] transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link to="/" className="flex items-center gap-1 group">
        <span className="text-[22px] font-extrabold tracking-tight gradient-text">
          KP
        </span>
        <span className="text-[22px] font-extrabold tracking-tight text-accent">
          .
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive
                  ? "text-text bg-white/[0.06]"
                  : "text-text-muted hover:text-text hover:bg-white/[0.03]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
        <NavLink
          to="/experience#contact"
          className="ml-2 text-sm font-semibold px-5 py-2.5 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
        >
          Contact
        </NavLink>
      </div>

      <button
        className="md:hidden relative z-50 p-2 text-text"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0a0a] border-l border-white/[0.06] z-50 md:hidden flex flex-col pt-22 px-8"
            >
              <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-4 text-base font-medium border-b border-white/[0.04] transition-colors ${
                        isActive ? "text-text" : "text-text-muted hover:text-text"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <NavLink
                  to="/experience#contact"
                  className="mt-6 block text-center py-3.5 rounded-xl bg-gradient-to-r from-accent to-purple-400 text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all"
                >
                  Contact
                </NavLink>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
