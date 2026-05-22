import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["ACCESSIBILITY", "TINYML", "2026"],
  title: "Accessibility Chessboard",
  description: "Leading development of an interactive accessibility chessboard with T-Mobile.",
  timeline: "Jan 2026 – Present",
  team: "T-Mobile Apprenticeship, UW MSTI",
  role: "Apprenticeship Lead",
  skills: ["TinyML", "EdgeImpulse", "ESP32", "Gesture Recognition", "Prototyping"],
};

const highlights = [
  "Leading end-to-end prototyping of a voice-command and gesture-recognition chessboard for visually impaired players.",
  "Collaborating with T-Mobile engineers to integrate TinyML models on ESP32 hardware.",
  "Conducting user research sessions with accessibility advocates to validate interaction models.",
];

export default function AccessibilityChessboardPage() {
  return (
    <>
      <Nav />

      <main className="pt-28 pb-16 px-6 md:px-10 max-w-4xl mx-auto">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {meta.tags.map((tag, i) => (
            <span key={i} className="inline-block border border-neutral-400 px-2 py-0.5 text-[9px] tracking-widest uppercase text-neutral-600 rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Title + description */}
        <h1 className="font-sans font-bold text-[32px] md:text-[48px] leading-tight tracking-tight mb-4">
          {meta.title}
        </h1>
        <p className="text-[13px] text-neutral-500 leading-relaxed max-w-xl mb-12">
          {meta.description}
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-neutral-200 py-8 mb-16">
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TIMELINE</p>
            <p className="text-[12px] leading-snug">{meta.timeline}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TEAM</p>
            <p className="text-[12px] leading-snug">{meta.team}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">ROLE</p>
            <p className="text-[12px] leading-snug">{meta.role}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TOOLS</p>
            <p className="text-[12px] leading-snug">{meta.skills.join(", ")}</p>
          </div>
        </div>

        {/* Long story short */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">LONG STORY SHORT</p>
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-[10px] tracking-widest text-neutral-300 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] leading-relaxed text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How might we */}
        <div className="bg-[#e8d4fc] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we make chess accessible to visually impaired players through gesture and voice interaction?
          </p>
        </div>

        {/* Section 1 — placeholder */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">RESEARCH</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Understanding the user</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — add your research findings, user interviews, and insights here.]
          </p>
          <div className="w-full rounded-2xl bg-[#ede0f8]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 — placeholder */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROTOTYPING</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Building the hardware</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — describe the ESP32 setup, TinyML model training, and gesture recognition pipeline.]
          </p>
          <div className="w-full rounded-2xl bg-[#d9c5f5]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 — placeholder */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">OUTCOMES</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">What we learned</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — add outcomes, user testing results, and next steps here.]
          </p>
          <div className="w-full rounded-2xl bg-[#cdb0f2]" style={{ height: "360px" }} />
        </div>

        {/* Next up */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/coffee-chat" className="group flex items-center justify-between">
            <div>
              <p className="text-[11px] text-neutral-400 mb-1">PRODUCT MANAGEMENT · 2025</p>
              <h3 className="font-sans font-semibold text-[22px] group-hover:opacity-60 transition-opacity">
                Coffee Chat Operations Dashboard →
              </h3>
            </div>
            <div className="w-24 h-16 rounded-xl bg-[#d6e8f7] shrink-0 ml-8" />
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}
