"use client";

import { useState } from "react";

const SERVICES = [
  {
    name: "Branding",
    body: "Strong branding sets you apart in a crowded market and turns first impressions into lasting loyalty.",
  },
  {
    name: "Digital Products",
    body: "I design and build digital products that feel as good as they look—combining thoughtful UX with the technical execution to actually ship them.",
  },
  {
    name: "Front-End Development",
    body: "Front-end to back-end, I build fast, reliable products that work great on every device. Performance and user experience matter just as much to me as the code underneath.",
  },
  {
    name: "Generative AI & Workflows",
    body: "AI is part of how I build, not just how I sketch ideas—I use AI-native tools for engineering, data, prototyping, and shipping to move faster without cutting corners.",
  },
  {
    name: "UI/UX & Design Systems",
    body: "Every screen is designed around how people actually think and move through a product—clear, intuitive, and built on research, not guesswork.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-cream px-8 py-10 text-dark">
      <p className="mb-6 max-w-[640px] text-lg font-bold leading-snug">
        I build transformative digital experiences for health &amp; wellness,
        lifestyle, and tech brands by blending AI, design, and technology.
      </p>
      <ul className="flex flex-col divide-y divide-border border-t border-border">
        {SERVICES.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={service.name}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-3 text-left"
              >
                <span
                  className={`text-lg font-semibold ${isOpen ? "text-dark" : "text-dark/70"}`}
                >
                  <span className="mr-2 text-sm font-normal text-accent">
                    ({String(index + 1).padStart(2, "0")})
                  </span>
                  {service.name}
                </span>
                <span
                  className={`text-lg text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ⌄
                </span>
              </button>
              {isOpen && (
                <div className="pb-4 pl-[3.75rem]">
                  <p className="max-w-lg text-sm text-dark/70">{service.body}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
