import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const STATES = {
  IDLE: "idle",
  SENDING: "sending",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(STATES.IDLE);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length > 2000) errs.message = "Message too long (max 2000 characters)";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus(STATES.SENDING);
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus(STATES.SUCCESS);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(STATES.IDLE), 5000);
    } catch (err) {
      setStatus(STATES.ERROR);
      setServerError(err.message || "Failed to send message. Please try again.");
    }
  }

  const inputBase =
    "w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-text text-sm outline-none transition-all duration-300 focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-white/[0.05] placeholder:text-text-faint";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`${inputBase} ${errors.name ? "border-red-500" : "border-border"}`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`${inputBase} ${errors.email ? "border-red-500" : "border-border"}`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-medium text-text-muted mb-1.5">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className={`${inputBase} ${errors.subject ? "border-red-500" : "border-border"}`}
          placeholder="What is this about?"
        />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none ${errors.message ? "border-red-500" : "border-border"}`}
          placeholder="Your message..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={status === STATES.SENDING}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-accent to-purple-400 text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.3)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === STATES.SENDING ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Message
          </>
        )}
      </motion.button>

      {status === STATES.SUCCESS && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-400 text-sm"
        >
          <CheckCircle size={16} /> Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}

      {status === STATES.ERROR && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-sm"
        >
          <AlertCircle size={16} /> {serverError}
        </motion.div>
      )}
    </form>
  );
}
