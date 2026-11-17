import type { WorkContent } from "./types";

// Source: the ~/PTA Tutor project notes (STATUS.md) — a real paid client
// rebuild, launched 2026-10-27. Screenshots are fresh captures of the live
// site (ptatutor.com) taken 2026-11-16 with Playwright at 1440×900 / 390×844,
// chat bubble and page footer hidden on all but the home shot.
// Claims are limited to what was built and tested: no results numbers
// (the site is brand new and had no real bookings yet), no pricing/payment
// details of the engagement, no client personal data.
const IMG = "/images/work/pta-tutor";

export const ptaTutor: WorkContent = {
  slug: "pta-tutor",
  pillar: 4,
  status: "full",
  title: "PTA Tutor",
  eyebrow: "Client project · Tutoring business",
  tagline:
    "A website rebuild for a physical therapist assistant tutoring business — moved off GoDaddy's site builder to WordPress, with online booking, payments, branded emails, and chat connected end to end.",
  tags: ["Client Website", "WordPress", "Booking Automation"],
  role: "Web design, WordPress development & automation (solo)",
  timeline: "October 2026",
  projectStatus: "Live since Oct 27, 2026",
  techStack: ["WordPress", "Amelia", "Stripe & PayPal", "Google Meet", "MailerLite", "Tidio"],
  scopeNote:
    "Client work for PTA Tutor. The brand, copy, and photography belong to the client; I rebuilt the site on WordPress and set up booking, payments, email, chat, and the launch.",
  bannerImage: `${IMG}/site-hero-desktop.png`,
  cardImage: `${IMG}/card.webp`,
  links: [{ label: "Live site — ptatutor.com", href: "https://ptatutor.com" }],
  problem:
    "PTA Tutor helps physical therapist assistants get through their program and the NPTE licensing exam. The site lived on GoDaddy Website Builder, which can't export its content, and the owner wanted to put her day-to-day operations on automation: booking that sets up a Google Meet link and sends a confirmation on its own, tutoring packages paid for on her own site, and a chat box for questions. That meant rebuilding the site by hand on a platform that could do all of it — without losing the layout, the copy, or the search visibility the old site already had.",
  architecture: {
    heading: "Rebuild, then connect everything",
    steps: [
      "Rebuilt the site page by page on WordPress with the Kadence theme, keeping her brand colors, headings, and copy. Added a “How It Works” strip and credential tiles to the homepage so a visitor sees the path from “I'm stuck” to booked.",
      "Booking runs on Amelia: a free 15-minute consultation, a single session, and four tutoring packages. Paid sessions are set up to create a Google Meet link automatically, and every booking sends a branded confirmation email.",
      "Payments go through Stripe and PayPal at checkout, tested end to end with real $1 payments on both before launch.",
      "Email sends through her own Google Workspace address so it doesn't land in spam, with templates for confirmation, reminder, follow-up, package purchase, reschedule, and cancel. One real bug: her logo showed as a broken image in some mail apps because the host's bot shield blocks image proxies — fixed by hosting the logo elsewhere.",
      "A Tidio chat box sits on every page: an AI assistant answers first, with a hand-off to the owner's phone for anything it can't. A MailerLite signup on the homepage collects newsletter subscribers.",
      "At launch, moved only the website's DNS records so her Google email kept working, added SSL, and redirected the old GoDaddy URLs so existing links still land somewhere useful. Then recorded four short training videos so she can edit pages, manage bookings, email subscribers, and answer chats herself.",
    ],
  },
  screenSections: [
    {
      heading: "The Site",
      intro:
        "Rebuilt to match the original layout and brand, with a clearer path to booking: a How It Works strip, package cards, and a booking button in the header on every page. Every page works from phone to desktop.",
      layout: "pairs",
      framePath: "ptatutor.com",
      items: [
        {
          caption: "Home — hero with a booking button, phone number, and chat",
          desktop: `${IMG}/site-home-desktop.png`,
          mobile: `${IMG}/site-home-mobile.png`,
        },
        {
          caption: "Packages — a free consultation and tiered NPTE tutoring packages",
          desktop: `${IMG}/site-packages-desktop.png`,
          mobile: `${IMG}/site-packages-mobile.png`,
        },
        {
          caption: "Booking — a live calendar built from her working hours",
          desktop: `${IMG}/site-booking-desktop.png`,
          mobile: `${IMG}/site-booking-mobile.png`,
        },
      ],
    },
  ],
  mechanicsHeading: "Outcome",
  mechanicsIntro:
    "Live since October 27, 2026. It's a new launch, so there are no performance numbers to quote yet — this is what's built and tested.",
  mechanics: [
    {
      label: "Online booking",
      value: "6 offers",
      description:
        "A free consultation, a single session, and four tutoring packages, all booked and paid for on the site.",
    },
    {
      label: "Payments",
      value: "Stripe + PayPal",
      description: "Both tested end to end with real $1 payments before launch.",
    },
    {
      label: "Handoff",
      value: "4 videos",
      description:
        "Short captioned walkthroughs so the owner can edit pages, manage bookings, email subscribers, and answer chats herself.",
    },
  ],
  outcomeSummary:
    "A real tutoring business's site, rebuilt off GoDaddy and launched with online booking, payments, branded emails, and chat all connected.",
};
