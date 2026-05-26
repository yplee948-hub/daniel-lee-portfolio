type FooterProps = {
  workHref?: string;
  className?: string;
};

export default function Footer({ workHref = "/", className = "" }: FooterProps) {
  return (
    <footer
      className={`max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-14 border-t border-neutral-200 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16">
        <div className="flex flex-col justify-between md:min-h-[120px] flex-1 max-w-lg">
          <div>
            <p className="text-xl md:text-2xl font-sans font-semibold leading-snug text-black mb-2">
              Glad we could cross paths.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed">
              I hope it left you with a bit of curiosity and inspiration.
            </p>
          </div>
          <p className="text-sm text-neutral-400 mt-10 md:mt-0">© Daniel Lee, 2026</p>
        </div>

        <div className="flex gap-12 md:gap-14 shrink-0">
          <div>
            <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-black mb-3">
              CONTACT
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:yplee948@uw.edu"
                className="text-[11px] tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                EMAIL
              </a>
              <a
                href="https://www.linkedin.com/in/youngpyunglee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                LINKEDIN
              </a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-black mb-3">
              NAVIGATION
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={workHref}
                className="text-[11px] tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                WORK
              </a>
              <a
                href="/about"
                className="text-[11px] tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                ABOUT
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
