type FooterProps = {
  workHref?: string;
  className?: string;
  /** Use inside a page container that already sets max-width and padding */
  inset?: boolean;
};

export default function Footer({
  workHref = "/",
  className = "",
  inset = false,
}: FooterProps) {
  const outerClass = inset
    ? `w-full mt-20 pt-16 pb-14 border-t border-neutral-200 ${className}`
    : `w-full max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-14 border-t border-neutral-200 ${className}`;

  return (
    <footer className={outerClass}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16">
        <div className="flex flex-col justify-between md:min-h-[120px] flex-1 max-w-2xl">
          <div>
            <p className="font-body text-body font-medium leading-[1.7] text-[#242424]">
              Open to PM roles for summer/fall 2026 Internships let&apos;s talk if you&apos;re job
              seeking.
            </p>
          </div>
          <p className="font-body text-body text-neutral-400 mt-10 md:mt-0">
            © Daniel Lee, 2026
          </p>
        </div>

        <div className="flex gap-12 md:gap-14 shrink-0">
          <div>
            <p className="font-body text-base tracking-widest uppercase text-neutral-400 mb-3">
              CONTACT
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:yplee948@uw.edu"
                className="font-body text-body tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                EMAIL
              </a>
              <a
                href="https://www.linkedin.com/in/youngpyunglee"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-body tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                LINKEDIN
              </a>
            </div>
          </div>
          <div>
            <p className="font-body text-base tracking-widest uppercase text-neutral-400 mb-3">
              NAVIGATION
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={workHref}
                className="font-body text-body tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                WORK
              </a>
              <a
                href="/about"
                className="font-body text-body tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
              >
                ABOUT
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-body tracking-widest uppercase text-neutral-500 hover:text-black transition-colors duration-150"
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
