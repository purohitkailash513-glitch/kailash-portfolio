import { Router } from "express";
import { validateContact, handleValidation } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/", contactLimiter, validateContact, handleValidation, async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.default.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER || "purohitkailash513@gmail.com",
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
            <h2 style="color:#8b5cf6;">New Portfolio Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border:1px solid #e5e7eb;" />
            <p style="white-space:pre-wrap;">${message}</p>
          </div>
        `,
      });

      return res.json({ success: true, message: "Message sent successfully!" });
    } catch {
      return res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  }

  // Development mode — no email configured
  console.log("\n--- Contact Form Submission (Dev Mode) ---");
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log("-------------------------------------------\n");

  res.json({
    success: true,
    message: "Message received! (Development mode — email not configured)",
  });
});

export default router;
