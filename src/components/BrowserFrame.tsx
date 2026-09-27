import Image from "next/image";

// macOS-style window chrome (traffic-light dots + a mock address bar) around a
// desktop screenshot. Purely decorative — `path` is a label, not a real link.
// Shared by the Trends and Annà Museo case studies.
export function BrowserFrame({
  src,
  alt,
  path,
  aspect = "aspect-[3/2]",
}: {
  src: string;
  alt: string;
  path: string;
  /** Tailwind aspect class matching the screenshot, so nothing gets cropped */
  aspect?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#1E1E1E] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-white/50">{path}</span>
      </div>
      <div className={`relative ${aspect} w-full bg-[#0D0D0D]`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1100px) 100vw, 1036px" className="object-cover" />
      </div>
    </div>
  );
}
