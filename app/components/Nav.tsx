export default function Nav({ active }: { active?: "work" | "about" }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-10 py-4 text-[10px] tracking-widest uppercase text-neutral-400 bg-white/80 backdrop-blur-sm">
      <a
        href="/"
        className={`hover:text-black transition-colors duration-150 ${active === "work" ? "text-black" : ""}`}
      >
        WORK
      </a>
      <a
        href="/about"
        className={`hover:text-black transition-colors duration-150 ${active === "about" ? "text-black" : ""}`}
      >
        ABOUT
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition-colors duration-150"
      >
        RESUME
      </a>
    </nav>
  );
}
