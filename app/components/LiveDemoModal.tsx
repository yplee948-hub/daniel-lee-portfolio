"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/images/chessboard/live_demo.mp4";

export function LiveDemoButton({
  className,
  children = "Live Demo →",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      return;
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              controls
              playsInline
              autoPlay
              className="block w-auto max-w-[min(90vw,300px)] max-h-[75vh] rounded-sm"
            >
              <source src={VIDEO_SRC} />
            </video>
            <button
              type="button"
              className="mt-5 font-mono text-[11px] uppercase tracking-widest text-white/60 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
