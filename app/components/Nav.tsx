export default function Nav({ active, badge }: { active?: "work" | "about"; badge?: string }) {
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
      {badge && (
        <span className="absolute right-6 border border-neutral-400 text-neutral-500 px-2.5 py-1 text-[9px] tracking-widest rounded-sm">
          {badge}
        </span>
      )}
    </nav>
  );
}
