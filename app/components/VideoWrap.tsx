export function VideoWrap({
  src,
  label,
  portrait = false,
  maxHeight = 420,
  nativeSize = false,
}: {
  src: string;
  label: string;
  portrait?: boolean;
  maxHeight?: number;
  nativeSize?: boolean;
}) {
  if (nativeSize) {
    return (
      <div className="relative rounded-sm overflow-hidden bg-neutral-200 mb-3 inline-block max-w-full">
        <video controls playsInline className="block w-auto h-auto max-w-full">
          <source src={src} />
        </video>
        <span className="absolute top-3 left-3 font-mono text-[9px] bg-black/70 text-white px-2 py-1 tracking-widest uppercase rounded-sm">
          {label}
        </span>
      </div>
    );
  }

  const frameStyle = portrait
    ? { aspectRatio: "9/14" }
    : { maxHeight: `${maxHeight}px` };

  return (
    <div
      className="relative rounded-sm overflow-hidden bg-neutral-200 mb-3"
      style={frameStyle}
    >
      <video
        controls
        playsInline
        className="block w-full h-full"
        style={{
          objectFit: portrait ? "contain" : "cover",
          maxHeight: portrait ? undefined : `${maxHeight}px`,
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
