type FooterProps = {
  workHref?: string;
  /** Match case-study pages that use px-6 md:px-16 full-bleed sections */
  variant?: "default" | "wide";
  /** Footer sits inside a parent that already sets max-width and horizontal padding */
  inset?: boolean;
};

export default function Footer({
  workHref = "/",
  variant = "default",
  inset = false,
}: FooterProps) {
  const content = (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16">
      <div className="flex flex-col justify-between md:min-h-[120px] flex-1 max-w-2xl">
        <div>
          <p className="font-body text-body font-medium leading-[1.7] text-[#242424]">
            Glad we could cross paths.
          </p>
          <p className="font-body text-body text-neutral-500 leading-[1.7] mt-2">
            Open to PM roles for summer/fall 2026 Internships let&apos;s talk if you&apos;re job
            seeking.
          </p>
        </div>
        <p className="font-body text-body text-neutral-400 mt-10 md:mt-0">© Daniel Lee, 2026</p>
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
  );

  if (inset) {
    return (
      <footer className="w-full mt-20 pt-16 pb-14 border-t border-neutral-200 bg-white">
        {content}
      </footer>
    );
  }

  const innerClass =
    variant === "wide"
      ? "px-6 md:px-16 pt-16 pb-14"
      : "max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-14";

  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className={innerClass}>{content}</div>
    </footer>
  );
}
