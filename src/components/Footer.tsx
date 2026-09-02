export function Footer() {
  return (
    <footer id="contact" className="px-8 py-16 text-center">
      <h2 className="mb-4 text-2xl font-extrabold">Contact</h2>
      <p>
        <a href="mailto:designtaino@gmail.com" className="underline">
          designtaino@gmail.com
        </a>
      </p>
      <p className="mt-3 flex justify-center gap-6 underline">
        <a href="https://www.linkedin.com/in/yadantaino" target="_blank" rel="noopener">
          LinkedIn
        </a>
        <a href="https://github.com/Tainobuilds" target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="https://www.instagram.com/MadebyTaino" target="_blank" rel="noopener">
          Instagram
        </a>
      </p>
      <p className="mt-8 text-sm text-muted">&copy; 2026</p>
    </footer>
  );
}
