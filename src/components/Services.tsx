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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-cream px-8 py-16 text-dark">
      <p className="mb-10 max-w-[640px] text-2xl font-bold leading-tight">
        I build transformative digital experiences for health &amp; wellness,
        lifestyle, and tech brands by blending AI, design, and technology.
      </p>
      <ul className="list-none">
        {SERVICES.map((service, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={service.name} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className={`w-full py-5 text-left text-4xl font-bold ${
                  isOpen ? "text-dark" : "text-muted"
                }`}
              >
                {service.name}{" "}
                <span className="text-2xl font-normal text-accent">
                  ({String(index + 1).padStart(2, "0")})
                </span>
              </button>
              {isOpen && (
                <div className="pb-8">
                  <p className="max-w-[640px] text-lg text-dark/80">{service.body}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
