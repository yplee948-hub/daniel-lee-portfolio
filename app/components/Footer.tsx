export default function Footer({ subtitle }: { subtitle?: string }) {
  return (
    <footer className="px-6 md:px-10 pt-16 pb-14">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl md:text-2xl font-sans font-semibold mb-1">
          Glad we could cross paths.
        </p>
        {subtitle && (
          <p className="text-[11px] text-neutral-500">{subtitle}</p>
        )}
        <p className="text-[11px] text-neutral-500 mb-12">
          I hope it left you with a bit of curiosity and inspiration.
        </p>
        <div className="flex justify-between items-end">
          <p className="text-[10px] text-neutral-400">© Daniel Lee, 2026</p>
          <div className="flex gap-14">
            <div>
              <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTACT</p>
              <div className="flex flex-col gap-2 text-[11px]">
                <a href="mailto:yplee948@uw.edu" className="hover:opacity-50 transition-opacity">EMAIL</a>
                <a
                  href="https://www.linkedin.com/in/youngpyunglee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-50 transition-opacity"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">NAVIGATION</p>
              <div className="flex flex-col gap-2 text-[11px]">
                <a href="/" className="hover:opacity-50 transition-opacity">WORK</a>
                <a href="/about" className="hover:opacity-50 transition-opacity">ABOUT</a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">RESUME</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
