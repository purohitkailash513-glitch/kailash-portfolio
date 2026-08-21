import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Kailash Purohit | Software Developer & AI/ML Enthusiast",
  "/about": "About | Kailash Purohit",
  "/projects": "Projects | Kailash Purohit",
  "/experience": "Experience & Contact | Kailash Purohit",
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || "Kailash Purohit | Portfolio";
  }, [pathname]);

  return null;
}
