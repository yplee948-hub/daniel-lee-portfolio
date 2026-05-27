type FooterProps = {
  className?: string;
  inset?: boolean;
};

export default function Footer({ className = "", inset = false }: FooterProps) {
  const outerClass = inset
    ? `w-full mt-20 pt-16 pb-14 px-0 ${className}`
    : `w-full max-w-[1440px] mx-auto px-6 md:px-20 pt-16 pb-14 ${className}`;

  return (
    <footer className={outerClass}>
      <div className="flex flex-col gap-1.5">
        <p className="font-sans text-2xl font-semibold text-black">
          Out of anywhere you could be, you&apos;re here.
        </p>
        <p className="font-sans text-[11px] text-neutral-500">
          I hope it left you with a bit of curiosity and inspiration.
        </p>
      </div>
    </footer>
  );
}
