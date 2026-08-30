"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "mailto">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Uday,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Uday,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${subject}&body=${body}`;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // If Web3Forms Access Key is provided, submit directly via API
    if (web3FormsKey && web3FormsKey.trim() !== "") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: form.name,
            email: form.email,
            subject: form.subject || `Portfolio Contact from ${form.name}`,
            message: form.message,
            from_name: form.name,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setStatus("success");
          setForm(initialState);
        } else {
          setStatus("error");
          setErrorMessage(result.message || "Failed to send message. Please try email directly.");
        }
      } catch {
        setStatus("error");
        setErrorMessage("Network error occurred. You can still email me directly.");
      }
    } else {
      // Fallback to mailto trigger if no backend key configured
      setStatus("mailto");
      window.location.href = getMailtoUrl();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7 dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-none"
    >
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Send a Message</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Share your idea, internship role, or collaboration details.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:focus:ring-indigo-950"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:focus:ring-indigo-950"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Subject
          <input
            required
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="Internship / Freelance / Collaboration"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:focus:ring-indigo-950"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          Message
          <textarea
            required
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-100 dark:focus:ring-indigo-950"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 sm:text-sm"
        >
          <Mail className="h-3.5 w-3.5" />
          Or email directly to {siteConfig.email}
        </a>
      </div>

      {/* Success Notification */}
      {status === "success" && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-sm text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600 shrink-0 dark:text-emerald-400" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="mt-0.5 text-xs text-emerald-700 dark:text-emerald-400">
              Thank you for reaching out. I will get back to you shortly at {siteConfig.email}.
            </p>
          </div>
        </div>
      )}

      {/* Mailto Client Opened Notification */}
      {status === "mailto" && (
        <div className="mt-4 space-y-2 rounded-xl border border-indigo-100 bg-indigo-50/80 p-4 text-sm text-indigo-900 dark:border-indigo-800/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <div className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4 text-indigo-600 shrink-0 dark:text-indigo-400" />
            <div>
              <p className="font-semibold">Opening your email app...</p>
              <p className="mt-0.5 text-xs text-indigo-700 dark:text-indigo-300">
                If your email app didn’t launch automatically, you can open Gmail Web directly:
              </p>
            </div>
          </div>
          <div className="pt-1">
            <a
              href={getGmailWebUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Open in Gmail Web
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === "error" && (
        <div className="mt-4 space-y-2 rounded-xl border border-rose-200 bg-rose-50 p-3.5 text-sm text-rose-800 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-300">
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-4 w-4 text-rose-600 shrink-0 dark:text-rose-400" />
            <div>
              <p className="font-semibold">Could not send automatically</p>
              <p className="mt-0.5 text-xs text-rose-700 dark:text-rose-300">{errorMessage}</p>
            </div>
          </div>
          <div className="pt-1">
            <a
              href={getGmailWebUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600"
            >
              Send via Gmail Web
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
