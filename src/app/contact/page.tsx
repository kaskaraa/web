"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const field =
  "w-full bg-transparent border-b border-rule py-3 focus:border-ink focus:outline-none placeholder:text-ink-2/60";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("Sending…");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("Sent. We read everything and reply within a few days.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("Could not send. Please try again, or reach us on LinkedIn.");
    }
  }

  return (
    <section className="py-20 sm:py-28 max-w-xl">
      <h1 className="text-4xl sm:text-5xl tracking-tight">Contact</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Labs, universities, investors, press. Tell us who you are and what you are after.
      </p>

      <form ref={formRef} onSubmit={send} className="mt-12 space-y-8">
        <div>
          <label htmlFor="email" className="block text-sm text-ink-2 mb-1">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@hospital.ca" className={field} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm text-ink-2 mb-1">Subject</label>
          <input id="subject" name="subject" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-ink-2 mb-1">Message</label>
          <textarea id="message" name="message" rows={6} required className={`${field} resize-none`} />
        </div>
        <button
          type="submit"
          className="border border-ink px-6 py-3 text-sm hover:bg-ink hover:text-paper transition-colors"
        >
          Send message
        </button>
        {status && <p className="text-sm" role="status">{status}</p>}
      </form>
    </section>
  );
}
