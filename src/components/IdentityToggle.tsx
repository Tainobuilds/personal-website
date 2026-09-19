"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type IdentityPhoto = { src: string; alt: string; caption: string };
type Identity = {
  key: string;
  label: string;
  tagline: string;
  photos: IdentityPhoto[];
  columns: 2 | 3;
  badge?: string;
};

const IDENTITIES: Identity[] = [
  {
    key: "designer",
    label: "Designer",
    tagline: "Designing systems, not just screens.",
    columns: 2,
    photos: [
      {
        src: "/images/work-aligned.jpg",
        alt: "Aligned app splash screen",
        caption: "Aligned — recovery app case study",
      },
      {
        src: "/assets/images/kippo/iphone-17-pro-photo-clean.png",
        alt: "Kippo app mockup on an iPhone",
        caption: "Kippo — kids resale app mockup",
      },
    ],
  },
  {
    key: "builder",
    label: "Builder",
    tagline: "Learning in public, shipping in public.",
    columns: 2,
    badge: "Pursuit AI-Native Cohort — Building & Shipping in Public",
    photos: [
      {
        src: "/images/identity/builder-cohort.jpg",
        alt: "Pursuit AI-Native cohort group photo",
        caption: "Pursuit AI-Native cohort",
      },
      {
        src: "/images/identity/builder-classroom.jpg",
        alt: "Presenting in the Pursuit classroom",
        caption: "Presenting in the Pursuit AI-Native classroom",
      },
    ],
  },
  {
    key: "fashion",
    label: "Fashion",
    tagline: "Runway, campaigns, and a lived sense of culture.",
    columns: 3,
    photos: [
      {
        src: "/images/identity/fashion-streetwear.jpg",
        alt: "Streetwear editorial lookbook shot",
        caption: "Streetwear lookbook",
      },
      {
        src: "/images/identity/fashion-soundcloud-ad.jpg",
        alt: "SoundCloud commercial appearance",
        caption: "SoundCloud commercial",
      },
      {
        src: "/images/identity/fashion-rooftop.jpg",
        alt: "Rooftop campaign shoot",
        caption: "Campaign shoot",
      },
    ],
  },
];

export function IdentityToggle() {
  const [activeKey, setActiveKey] = useState(IDENTITIES[0].key);
  const active = IDENTITIES.find((identity) => identity.key === activeKey) ?? IDENTITIES[0];

  return (
    <div className="col-span-full">
      <div className="mb-6 flex flex-wrap gap-2">
        {IDENTITIES.map((identity) => (
          <button
            key={identity.key}
            onClick={() => setActiveKey(identity.key)}
            aria-pressed={activeKey === identity.key}
            className={`rounded-full border px-4 py-2 text-sm font-semibold not-italic transition-colors ${
              activeKey === identity.key
                ? "border-dark bg-dark text-cream"
                : "border-border text-dark/70 hover:text-dark"
            }`}
          >
            {identity.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <p className="mb-5 max-w-[480px] text-sm not-italic text-dark/70">{active.tagline}</p>
        {active.badge && (
          <p className="mb-4 inline-block rounded-full border border-border bg-sand px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-dark/70 not-italic">
            {active.badge}
          </p>
        )}
        <div
          className={`grid gap-3 rounded-2xl border border-border p-4 ${
            active.columns === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
          }`}
        >
          {active.photos.map((photo) => (
            <figure key={photo.src}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-sand">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-1.5 text-xs not-italic text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
