"use client";

import { useState } from "react";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

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
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Connect this with your preferred email or backend service.
    setSubmitted(true);
    setForm(initialState);

    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-7"
    >
      <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
      <p className="mt-2 text-sm text-slate-600">
        Share your idea, internship role, or collaboration details.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Subject
          <input
            required
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="Internship / Freelance / Collaboration"
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            required
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>

      <Button type="submit" className="mt-5 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>

      {submitted ? (
        <p className="mt-3 text-sm text-emerald-600">
          Message captured. Hook this form to your email service to receive
          submissions.
        </p>
      ) : null}
    </form>
  );
}
