type CollageImage = {
  src: string;
  top: string;
  left: string;
  width: number;
  rotate: number;
  zIndex?: number;
  aspect?: string;
};

const COLLAGE_IMAGES: CollageImage[] = [
  { src: "/images/aboutme/IMG_6324.jpg", top: "0%", left: "2%", width: 128, rotate: -5, zIndex: 3 },
  { src: "/images/aboutme/IMG_6325.jpg", top: "6%", left: "38%", width: 112, rotate: 7, zIndex: 2 },
  { src: "/images/aboutme/IMG_6326.jpg", top: "2%", left: "62%", width: 136, rotate: -3, zIndex: 4 },
  { src: "/images/aboutme/IMG_6327.jpg", top: "26%", left: "0%", width: 148, rotate: 4, zIndex: 5 },
  { src: "/images/aboutme/IMG_6328.jpg", top: "32%", left: "42%", width: 120, rotate: -6, zIndex: 2 },
  { src: "/images/aboutme/IMG_9432.JPG", top: "24%", left: "68%", width: 108, rotate: 8, zIndex: 3 },
  { src: "/images/aboutme/IMG_9593.jpg", top: "52%", left: "8%", width: 132, rotate: -4, zIndex: 4 },
  { src: "/images/aboutme/IMG_9736.jpg", top: "54%", left: "44%", width: 140, rotate: 3, zIndex: 6 },
  {
    src: "/images/aboutme/Image%20(18).jpeg",
    top: "48%",
    left: "70%",
    width: 118,
    rotate: -7,
    zIndex: 3,
    aspect: "3/4",
  },
];

export default function AboutCollage() {
  return (
    <div className="relative mx-auto h-[min(640px,72vh)] w-full max-w-[480px]">
      {COLLAGE_IMAGES.map((image) => (
        <div
          key={image.src}
          className="absolute overflow-hidden rounded-sm shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
          style={{
            top: image.top,
            left: image.left,
            width: image.width,
            aspectRatio: image.aspect ?? "4/5",
            transform: `rotate(${image.rotate}deg)`,
            zIndex: image.zIndex ?? 1,
          }}
        >
          <img
            src={image.src}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
