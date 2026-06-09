"use client";

import { useState } from "react";
import { Send, Mail, MapPin, ExternalLink } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { socialLinks } from "@/data/socials";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  botfield: string; // Honeypot spam trap
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    botfield: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "email":
        return <Mail className="w-4.5 h-4.5" />;
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      default:
        return null;
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subjek wajib diisi.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam Honeypot Check
    if (formData.botfield) {
      console.warn("Honeypot field filled. Submission blocked.");
      setToast({
        message: "Spam terdeteksi. Pesan tidak dikirim.",
        type: "error",
      });
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    try {
      if (formspreeKey) {
        // Send email via Formspree API
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setToast({
            message: "Pesan berhasil dikirim! Saya akan segera menghubungi Anda.",
            type: "success",
          });
          setFormData({ name: "", email: "", subject: "", message: "", botfield: "" });
        } else {
          throw new Error("Gagal mengirim pesan.");
        }
      } else {
        // Fallback simulation for local testing
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setToast({
          message: "Pesan terkirim! (Simulasi sukses lokal)",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "", botfield: "" });
      }
    } catch (err) {
      setToast({
        message: "Gagal mengirim pesan. Silakan hubungi saya via email langsung.",
        type: "error",
      });
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/10 relative">
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <Container>
        {/* Title */}
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
          <p className="text-muted-foreground text-sm max-w-md mt-2">
            Have a project in mind, a hiring opportunity, or just want to chat? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-4xl mx-auto">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-foreground">
                Get In Touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am usually active during business hours. Feel free to contact me through the form or my social channels.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="p-3.5 rounded-xl bg-card border border-border/80 flex items-center justify-center text-primary dark:text-accent shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Email</span>
                  <a
                    href="mailto:fadhika@example.com"
                    className="text-sm font-semibold hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    fadhika@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-center">
                <div className="p-3.5 rounded-xl bg-card border border-border/80 flex items-center justify-center text-primary dark:text-accent shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Lokasi</span>
                  <span className="text-sm font-semibold">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex flex-col gap-4 border-t border-border/50 pt-6">
              <h4 className="text-xs font-bold text-foreground/80 uppercase tracking-wide">
                Social Profiles
              </h4>
              <div className="flex flex-wrap items-center gap-3 max-w-full">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border/80 rounded-xl text-xs font-semibold hover:bg-border/20 text-foreground transition-all duration-200 shadow-sm"
                  >
                    {getSocialIcon(social.platform)}
                    <span className="capitalize">{social.platform}</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground/60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-sm flex flex-col gap-5">
              {/* Spam Honeypot Field */}
              <input
                type="text"
                name="botfield"
                value={formData.botfield}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Nama Anda"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="John Doe"
                  required
                />

                <Input
                  label="Email Anda"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <Input
                label="Subjek"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Kesempatan Kerjasama / Rekrutmen"
                required
              />

              <Textarea
                label="Pesan Anda"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Halo Fadhika, saya tertarik untuk mendiskusikan..."
                required
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full gap-2 mt-2"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default ContactSection;
