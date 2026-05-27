const INTRO_IMAGES = [
  {
    src: "/images/aboutme/IMG_9736.jpg",
    alt: "Daniel presenting user research at a whiteboard",
  },
  {
    src: "/images/aboutme/IMG_9432.JPG",
    alt: "Collaborating on a product workshop at a whiteboard",
  },
];

export default function AboutCollage() {
  return (
    <div className="flex w-full flex-col gap-4">
      {INTRO_IMAGES.map((image) => (
        <div key={image.src} className="w-full overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
