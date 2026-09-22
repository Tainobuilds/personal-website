import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yadan Taino | Front-End Developer & Product Designer — NYC",
  description:
    "Yadan Taino is a Front-End Developer & Product Designer in New York City building clean design systems, creating useful apps and sites, and leveraging AI tools to make workflows easier and frictionless for health & wellness, lifestyle, and tech brands.",
  keywords: [
    "front-end developer",
    "product designer",
    "AI-assisted workflows",
    "UX design",
    "UI design",
    "design systems",
    "React",
    "New York City designer",
  ],
  authors: [{ name: "Yadan Taino" }],
  robots: "index, follow",
  metadataBase: new URL("https://yadan-taino-personal-website.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: "Made by Taino",
    title: "Yadan Taino | Front-End Developer & Product Designer",
    description:
      "Bridging front-end engineering and product design. I build clean design systems, create useful apps and sites, and leverage AI tools to make workflows easier and frictionless — solving everyday problems.",
    url: "https://yadan-taino-personal-website.vercel.app",
    images: ["/images/hero-portrait.jpg"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadan Taino | Front-End Developer & Product Designer",
    description:
      "Bridging front-end engineering and product design. I build clean design systems, create useful apps and sites, and leverage AI tools to make workflows easier and frictionless — solving everyday problems.",
    images: ["/images/hero-portrait.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yadan Taino",
  alternateName: "Made by Taino",
  url: "https://yadan-taino-personal-website.vercel.app/",
  image: "https://yadan-taino-personal-website.vercel.app/images/hero-portrait.jpg",
  jobTitle: "Front-End Developer & Product Designer",
  description:
    "Front-End Developer & Product Designer in New York City building clean design systems and leveraging AI tools to create frictionless workflows for health & wellness, lifestyle, and tech brands.",
  email: "mailto:designtaino@gmail.com",
  sameAs: ["https://www.linkedin.com/in/yadantaino", "https://github.com/Tainobuilds"],
  knowsAbout: [
    "Front-End Development",
    "Product Design",
    "AI-Assisted Workflows",
    "UX Design",
    "UI Design",
    "Design Systems",
    "React",
  ],
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
