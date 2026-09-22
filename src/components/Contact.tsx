"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Branding",
  "Digital Products",
  "Development",
  "Generative AI",
  "UI/UX Design",
  "Something else",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New project inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nInterested in: ${service}\n\n${message}`;
    window.location.href = `mailto:designtaino@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="px-8 py-16">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-3xl border border-border bg-sand">
        <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-[1fr_1.4fr] md:p-14">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
              Let&rsquo;s build something
            </h2>
            <p className="mb-8 max-w-sm leading-relaxed text-dark/70">
              Tell me a bit about your project — what you&rsquo;re building, and
              where you need help. I read every inquiry myself.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:designtaino@gmail.com"
                className="w-fit font-semibold underline underline-offset-2"
              >
                designtaino@gmail.com
              </a>
              <div className="mt-2 flex gap-5 text-dark/70">
                <a
                  href="https://www.linkedin.com/in/yadantaino"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Tainobuilds"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/MadebyTaino"
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-2"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Name
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-cream px-4 py-3 text-sm font-normal placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-xl border border-border bg-cream px-4 py-3 text-sm font-normal placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              What do you need help with?
              <select
                name="service"
                defaultValue=""
                required
                className="rounded-xl border border-border bg-cream px-4 py-3 text-sm font-normal focus:border-accent focus:outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Tell me about your project
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What are you building, and what do you need from me?"
                className="resize-none rounded-xl border border-border bg-cream px-4 py-3 text-sm font-normal placeholder:text-muted focus:border-accent focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-dark px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-black"
            >
              Send inquiry
            </button>
            {sent && (
              <p className="text-sm text-dark/60">
                Opening your email app with this filled in — hit send there to
                reach me.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
