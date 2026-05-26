import Footer from "./components/Footer";

interface WorkItem {
  title: string;
  tags: string[];
  description: string;
  cardBg: string;
  imageSrc?: string;
  imagePosition?: "top" | "center";
  href?: string;
}

interface SkillGroup {
  category: string;
  skills: string[];
}

const work: WorkItem[] = [
  {
    title: "Accessibility Chessboard",
    tags: ["ACCESSIBILITY", "TINYML", "2026"],
    description: "Leading development of an interactive accessibility chessboard with T-Mobile, prototyping voice-command and gesture-recognition features.",
    cardBg: "#e8d4fc",
    imageSrc: "/images/chessboard/Image__20_.jpeg",
    href: "/accessibility-chessboard",
  },
  {
    title: "Coffee Chat Operations Dashboard",
    tags: ["PRODUCT MANAGEMENT", "FULL PROCESS", "2025"],
    description: "Turned a manual Excel tracker into a real-time operations system for MSTI's coffee chat program, tracking 106+ requests, assignment ownership, intro email SLAs, and feedback follow-ups at a glance.",
    cardBg: "#d6e8f7",
    imageSrc: "/images/coffeechatdashboard.png",
    href: "/coffee-chat",
  },
  {
    title: "Drama Relationship Map",
    tags: ["PRODUCT MANAGEMENT", "AI TOOLS", "2025"],
    description: "PM'd a spoiler-safe, AI-assisted character relationship board for cast-heavy dramas, from blank spec to live product at charactermap.vercel.app.",
    cardBg: "#d0f0ec",
    imageSrc: "/images/dramamap-hero.jpg",
    imagePosition: "center",
    href: "/character-map-tracker",
  },
];

const skills: SkillGroup[] = [
  { category: "PRODUCT & ANALYTICS", skills: ["SQL", "Python", "Excel", "Power BI", "Google Analytics", "SharePoint"] },
  { category: "AI & DEVELOPMENT", skills: ["Claude Code", "Cursor AI", "GitHub Copilot", "OpenAI API", "Streamlit"] },
  { category: "DESIGN & COLLABORATION", skills: ["Figma", "Notion", "Microsoft Office Suite"] },
  { category: "EMBEDDED & AI SYSTEMS", skills: ["EdgeImpulse", "ESP32", "TinyML", "Gesture Recognition"] },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-neutral-300 px-1.5 py-px text-[7px] tracking-wider uppercase text-neutral-500 rounded-sm whitespace-nowrap">
      {label}
    </span>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const cardContent = (
    <div className="flex flex-col group">
      <div
        className="w-full rounded-2xl mb-4 overflow-hidden"
        style={{ backgroundColor: item.cardBg, height: "320px" }}
      >
        {item.imageSrc && (
          <img
            src={item.imageSrc}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${item.imagePosition === "center" ? "object-center" : "object-top"}`}
          />
        )}
      </div>
      <div className="mb-2">
        <h3 className="text-base font-sans font-medium leading-snug whitespace-nowrap">
          {item.title}
        </h3>
        <div className="flex flex-wrap gap-0.5 mt-1.5">
          {item.tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
      </div>
      <p className="font-body text-body text-neutral-500 leading-relaxed">{item.description}</p>
    </div>
  );

  if (item.href) {
    const isExternal = item.href.startsWith("http");
    return (
      <a
        href={item.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block"
      >
        {cardContent}
      </a>
    );
  }
  return cardContent;
}

export default function HomePage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-10 py-4 text-[10px] tracking-widest uppercase text-neutral-400 bg-white/80 backdrop-blur-sm">
        <a href="/#work" className="hover:text-black transition-colors duration-150 text-black">WORK</a>
        <a href="/about" className="hover:text-black transition-colors duration-150">ABOUT</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-150">RESUME</a>
      </nav>

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-28 min-h-[65vh]"
        style={{ background: "linear-gradient(to bottom, #dde5ef 0%, #ffffff 60%)" }}
      >
        <h1
          className="font-sans font-bold tracking-tighter leading-[0.88] text-black w-full"
          style={{ fontSize: "180px" }}
        >
          DANIEL LEE
        </h1>
        <p className="mt-6 text-base text-neutral-500 leading-relaxed">
          Breaking into Product. Background in program management, marketing &amp; HCI.
        </p>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {work.map((item, i) => (
              <WorkCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <Footer workHref="#work" />
    </>
  );
}
