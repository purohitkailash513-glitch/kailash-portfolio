import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-10 px-[8%]">
      <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold gradient-text">KP.</span>
          <span className="text-sm text-text-faint">
            &copy; {new Date().getFullYear()} Kailash Purohit
          </span>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
