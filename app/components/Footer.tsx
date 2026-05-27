type FooterProps = {
  workHref?: string;
  className?: string;
  /** Use inside a page container that already sets max-width and padding */
  inset?: boolean;
};

const footerGradient = "linear-gradient(180deg, #ffffff 0%, #e8f0f8 100%)";

export default function Footer({
  workHref = "/",
  className = "",
  inset = false,
}: FooterProps) {
  const content = (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16">
      <div className="flex flex-col justify-between md:min-h-[132px] flex-1 max-w-xl">
        <div>
          <p className="text-2xl md:text-[1.75rem] font-sans font-semibold leading-snug text-black mb-2">
            Glad we could{" "}
            <span className="relative inline-block">
              <span
                className="absolute -top-2.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4A90D9]"
                aria-hidden
              />
              cross
            </span>{" "}
            paths.
          </p>
          <p className="text-base text-neutral-500 leading-relaxed">
            Out of anywhere you could be, you&apos;re here. I hope it left you with a bit of
            curiosity and inspiration.
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
  );

  if (inset) {
    return (
      <footer
        className={`w-full mt-20 pt-16 pb-14 border-t border-neutral-200 ${className}`}
        style={{ background: footerGradient }}
      >
        {content}
      </footer>
    );
  }

  return (
    <footer
      className={`w-full border-t border-neutral-200 ${className}`}
      style={{ background: footerGradient }}
    >
      <div
        className={
          className.includes("px-")
            ? "pt-16 pb-14"
            : `max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-14 ${className}`
        }
      >
        {content}
      </div>
    </footer>
  );
}
