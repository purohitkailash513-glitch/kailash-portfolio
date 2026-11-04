
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { createConsenti } from "@consenti/api";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Consenti configuration
// NOTE: SQLite storage is temporary on Render Free.
const consenti = createConsenti({
  storage: {
    driver: "node:sqlite",
    path: path.join(__dirname, "../consenti-data"),
  },
  auth: {
    mode: "local",
    adminEmail: process.env.CONSENTI_ADMIN_EMAIL,
    adminPassword: process.env.CONSENTI_ADMIN_PASSWORD,
  },
  dashboard: true,
});

// Security and Content Security Policy (CSP)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        // Allow local scripts and existing KookiOk consent script
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://cdn.kookiok.com",
        ],

        // Allow Consenti API and existing KookiOk services
        connectSrc: [
          "'self'",
          "https://cdn.kookiok.com",
          "https://api.kookiok.com",
        ],

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

        // Preserve existing KookiOk frame permissions
        frameSrc: [
          "'self'",
          "https://cdn.kookiok.com",
          "https://api.kookiok.com",
        ],

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

// Consenti router must be registered before body parsers.
app.use(consenti.router);

// Body parsing for existing application routes
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false, limit: "10kb" }));

// Existing API routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Serve React/Vite frontend
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

// Start server after Consenti initialization
async function startServer() {
  try {
    await consenti.ready;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Consenti dashboard: http://localhost:${PORT}/consenti/`);
    });
  } catch (error) {
    console.error("Consenti initialization failed:", error);
    process.exit(1);
  }
}

startServer();
