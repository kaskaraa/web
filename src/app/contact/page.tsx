"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ScrollReveal from "../components/scroll-reveal";
import LetterReveal from "../components/letter-reveal";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen page-enter">
      <Navbar />

      <main className="flex-grow pt-28">
        <section className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
          <LetterReveal
            text="Get in Touch"
            className="text-5xl sm:text-6xl font-[Avenir] tracking-tight text-center"
            delay={300}
            letterDelay={40}
          />

          <ScrollReveal className="mt-4">
            <p className="text-text-secondary text-lg font-[Avenirlight] text-center">
              Technical questions, partnership inquiries, or just want to say hello.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-8 mt-16">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-[Avenirlight] text-text-secondary">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-transparent border-b border-metal-dark text-white text-sm py-3 px-1 placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-[Avenirlight] text-text-secondary">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full bg-transparent border-b border-metal-dark text-white text-sm py-3 px-1 placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-[Avenirlight] text-text-secondary">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us more..."
                  className="w-full bg-transparent border-b border-metal-dark text-white text-sm py-3 px-1 placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-accent text-[#0a0a0a] font-[Avenir] px-10 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors duration-300"
              >
                Send Message
              </button>

              {status && (
                <p className={`text-sm mt-4 ${status.includes("success") ? "text-accent" : "text-text-secondary"}`}>
                  {status}
                </p>
              )}
            </form>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
