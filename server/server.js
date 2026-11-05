
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security and Content Security Policy
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        // Allow local scripts and Consenti CDN
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://cdn.jsdelivr.net",
        ],

        // No external consent API required for CDN-only setup
        connectSrc: ["'self'"],

        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https:",
        ],

        imgSrc: [
          "'self'",
          "data:",
          "blob:",
          "https:",
        ],

        fontSrc: [
          "'self'",
          "data:",
          "https:",
        ],

        frameSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);

// CORS configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || true,
    methods: ["GET", "POST"],
  })
);

// Body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false, limit: "10kb" }));

// Existing contact API
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Serve React frontend
const frontendPath = path.join(__dirname, "../dist");
app.use(express.static(frontendPath));

// React Router fallback
app.get(/.*/, (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }

  res.sendFile(path.join(frontendPath, "index.html"));
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
