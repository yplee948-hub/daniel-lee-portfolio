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

const workCol1: WorkItem[] = [
  {
    title: "Accessibility Chessboard",
    tags: ["ACCESSIBILITY", "TINYML", "2026"],
    description:
      "Leading development of an interactive accessibility chessboard with T-Mobile, prototyping voice-command and gesture-recognition features.",
    cardBg: "#e8d4fc",
    imageSrc: "/images/chessboard/Image__20_.jpeg",
    href: "/accessibility-chessboard",
  },
  {
    title: "Stakeholder Dashboard",
    tags: ["AI TOOLS", "DESIGN SYSTEMS", "2025"],
    description:
      "Built a centralized tracking dashboard using Claude Code, reducing manual tracking time by 40% with 91% internal user satisfaction.",
    cardBg: "#f7d6e8",
    href: "/stakeholder-dashboard",
  },
  {
    title: "Government Employment Portal",
    tags: ["PROGRAM MANAGER", "GOVERNMENT", "2023"],
    description:
      "Managed citizen onboarding for a new employment portal, driving a 35% increase in application completion rate across 4,000+ applicants.",
    cardBg: "#d4e8d4",
    href: "/government-portal",
  },
];

const workCol2: WorkItem[] = [
  {
    title: "Coffee Chat Operations Dashboard",
    tags: ["PRODUCT MANAGEMENT", "FULL PROCESS", "2025"],
    description:
      "Turned a manual Excel tracker into a real-time operations system for MSTI's coffee chat program — tracking 106+ requests, assignment ownership, intro email SLAs, and feedback follow-ups.",
    cardBg: "#d6e8f7",
    imageSrc: "/images/coffeechatdashboard.png",
    href: "/coffee-chat",
  },
  {
    title: "Sundae Sillock Growth",
    tags: ["PROJECT MANAGER", "FRANCHISE OPS", "2024"],
    description:
      "Drove growth across 50+ franchise locations via quality control and localized campaigns, contributing to a 33.8% increase in brand revenue.",
    cardBg: "#fce8d4",
    href: "/sundae-sillock",
  },
  {
    title: "Zero VFX",
    tags: ["MARKETING", "VFX", "2020"],
    description:
      "Supported acquisition of 3 high-profile VFX contracts by translating complex production workflows into client-facing pitch materials.",
    cardBg: "#f7f0d4",
    href: "/zero-vfx",
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block border border-neutral-400 px-2 py-0.5 text-[9px] tracking-widest uppercase text-neutral-600 rounded-sm whitespace-nowrap">
      {label}
    </span>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const cardContent = (
    <div className="flex flex-col group">
      <div
        className="w-full rounded-2xl mb-3 overflow-hidden"
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
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[13px] font-sans font-medium text-black shrink-0">{item.title}</h3>
        <div className="flex flex-wrap justify-end gap-1 shrink-0 max-w-[55%]">
          {item.tags.map((tag, i) => (
            <Tag key={i} label={tag} />
          ))}
        </div>
      </div>
      <p className="text-[11px] text-neutral-500 leading-relaxed">{item.description}</p>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="block">
        {cardContent}
      </a>
    );
  }
  return cardContent;
}

export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center gap-10 py-5 font-mono text-[16px] tracking-widest uppercase text-neutral-400 bg-white/80 backdrop-blur-sm">
        <a href="/#work" className="hover:text-black transition-colors duration-150 text-black">
          WORK
        </a>
        <a href="/about" className="hover:text-black transition-colors duration-150">
          ABOUT
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-150"
        >
          RESUME
        </a>
      </nav>

      <section
        className="flex flex-col items-center justify-center text-center px-6 md:px-20 pt-32 pb-28 min-h-[560px]"
        style={{ background: "linear-gradient(to bottom, #dde5ef 0%, #ffffff 60%)" }}
      >
        <h1
          className="font-sans font-bold tracking-tighter leading-[0.88] text-black"
          style={{ fontSize: "clamp(80px, 15vw, 220px)" }}
        >
          DANIEL LEE
        </h1>
        <p className="mt-6 text-[11px] tracking-[0.25em] uppercase text-neutral-500">
          PRODUCT MANAGER PREVIOUSLY @ UW MSTI, HEESTORY, MINISTRY OF LABOR.
        </p>
      </section>

      <section id="work" className="px-6 md:px-20 pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-16">
              {workCol1.map((item, i) => (
                <WorkCard key={i} item={item} />
              ))}
            </div>
            <div className="flex flex-col gap-16">
              {workCol2.map((item, i) => (
                <WorkCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
