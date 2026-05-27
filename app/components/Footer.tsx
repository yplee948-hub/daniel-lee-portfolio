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
      <div className="flex h-auto min-h-[120px] flex-1 max-w-2xl flex-col justify-between gap-4 md:gap-0">
        <p className="font-body text-[24px] font-medium leading-[29px] text-[#242424]">
          Glad we could cross paths
        </p>
        <p className="font-body text-[18px] font-light leading-[29px] text-[#242424]">
          Open to PM roles for summer/fall 2026 Internships let&apos;s talk if you&apos;re job
          seeking.
        </p>
        <p className="font-body text-[18px] font-normal leading-[29px] text-[#a1a1a1]">
          © Daniel Lee, 2026
        </p>
      </div>

      <div className="flex shrink-0 gap-10 md:gap-14">
        <div className="flex flex-col gap-3">
          <p className="font-body text-[18px] font-bold uppercase tracking-[0.18em] text-[#010101]">
            CONTACT
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:yplee948@uw.edu"
              className="font-body text-[16px] uppercase tracking-[0.18em] text-[#737373] transition-colors duration-150 hover:text-black"
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/youngpyunglee"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[16px] uppercase tracking-[0.18em] text-[#737373] transition-colors duration-150 hover:text-black"
            >
              LINKEDIN
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-body text-[18px] font-bold uppercase tracking-[0.18em] text-black">
            NAVIGATION
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={workHref}
              className="font-body text-[16px] uppercase tracking-[0.18em] text-[#737373] transition-colors duration-150 hover:text-black"
            >
              WORK
            </a>
            <a
              href="/about"
              className="font-body text-[16px] uppercase tracking-[0.18em] text-[#737373] transition-colors duration-150 hover:text-black"
            >
              ABOUT
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[16px] uppercase tracking-[0.18em] text-[#737373] transition-colors duration-150 hover:text-black"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const paddingClass = "pt-[65px] pb-14";

  if (inset) {
    return (
      <footer
        className={`mt-20 w-full border-t border-[#e5e5e5] bg-white ${paddingClass}`}
      >
        {content}
      </footer>
    );
  }

  const innerClass =
    variant === "wide"
      ? `px-6 md:px-16 ${paddingClass}`
      : `mx-auto max-w-6xl px-6 md:px-10 ${paddingClass}`;

  return (
    <footer className="w-full border-t border-[#e5e5e5] bg-white">
      <div className={innerClass}>{content}</div>
    </footer>
  );
}
