export function VideoWrap({
  src,
  label,
  portrait = false,
  maxHeight = 420,
  fill = false,
  fit = "cover",
  className = "",
}: {
  src: string;
  label: string;
  portrait?: boolean;
  maxHeight?: number;
  fill?: boolean;
  fit?: "cover" | "contain";
  className?: string;
}) {
  const frameStyle = fill
    ? undefined
    : portrait
      ? { aspectRatio: "9/14" }
      : { maxHeight: `${maxHeight}px` };

  return (
    <div
      className={`relative rounded-sm overflow-hidden bg-neutral-200 mb-3 ${className}`}
      style={frameStyle}
    >
      <video
        controls
        playsInline
        className="block w-full h-full"
        style={{
          objectFit: fit === "contain" ? "contain" : portrait ? "contain" : "cover",
          maxHeight: fill || portrait ? undefined : `${maxHeight}px`,
        }}
      >
        <source src={src} />
      </video>
      <span className="absolute top-3 left-3 font-mono text-[9px] bg-black/70 text-white px-2 py-1 tracking-widest uppercase rounded-sm">
        {label}
      </span>
    </div>
  );
}
