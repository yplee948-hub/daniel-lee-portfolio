type FooterProps = {
  subtitle?: string;
  workHref?: string;
};

export default function Footer({ subtitle, workHref = "/" }: FooterProps) {
  return (
    <footer
      className="px-6 md:px-10 pt-16 pb-14"
      style={{
        background: "linear-gradient(to bottom right, #eef2f7 0%, #ffffff 55%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10 sm:gap-16">
          <div className="flex flex-col justify-between sm:min-h-[132px] flex-1 max-w-xl">
            <div>
              <p className="text-2xl md:text-[1.75rem] font-sans font-semibold leading-snug text-black mb-1">
                Open to PM roles for summer/fall Internships 2026 let&apos;s talk!
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                {subtitle ?? "if you're job-seeking."}
              </p>
            </div>
            <p className="text-sm text-neutral-400 mt-10 sm:mt-0">© Daniel Lee, 2026</p>
          </div>

          <div className="flex gap-12 sm:gap-14 shrink-0">
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
      </div>
    </footer>
  );
}
