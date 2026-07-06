"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const ZOOM = 1.5;
const DRAG_THRESHOLD = 6;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function PhotoWrap({
  src,
  alt,
  aspect = "16/9",
  fill = false,
  fit = "cover",
  className = "",
}: {
  src: string;
  alt: string;
  aspect?: string;
  fill?: boolean;
  fit?: "cover" | "contain";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });

  const getBounds = useCallback(() => {
    const el = containerRef.current;
    if (!el) return { maxX: 0, maxY: 0 };
    const { width, height } = el.getBoundingClientRect();
    return {
      maxX: (width * (ZOOM - 1)) / 2,
      maxY: (height * (ZOOM - 1)) / 2,
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      originX: offset.x,
      originY: offset.y,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (!dragRef.current.moved && Math.hypot(dx, dy) > DRAG_THRESHOLD) {
      dragRef.current.moved = true;
    }

    const { maxX, maxY } = getBounds();
    setOffset({
      x: clamp(dragRef.current.originX + dx, -maxX, maxX),
      y: clamp(dragRef.current.originY + dy, -maxY, maxY),
    });
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const wasDrag = dragRef.current.moved;
    dragRef.current.active = false;
    setDragging(false);

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (!wasDrag) setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const resetOnResize = () => {
      const { maxX, maxY } = getBounds();
      setOffset((prev) => ({
        x: clamp(prev.x, -maxX, maxX),
        y: clamp(prev.y, -maxY, maxY),
      }));
    };

    window.addEventListener("resize", resetOnResize);
    return () => window.removeEventListener("resize", resetOnResize);
  }, [getBounds]);

  return (
    <>
      <div
        ref={containerRef}
        className={`group relative overflow-hidden rounded-xl bg-neutral-200 select-none touch-none ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        } ${fit === "contain" ? "flex items-center justify-center" : ""} ${className}`}
        style={fill ? undefined : { aspectRatio: aspect }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className={`pointer-events-none h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${ZOOM})`,
            transition: dragging ? "none" : "transform 200ms ease-out",
          }}
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-3 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-mono text-[8px] uppercase tracking-widest text-white/90">
            Drag to explore · Click to expand
          </span>
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full rounded-sm object-contain"
            style={{ maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 top-5 font-mono text-[11px] uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            onClick={() => setOpen(false)}
          >
            CLOSE ✕
          </button>
        </div>
      )}
    </>
  );
}
