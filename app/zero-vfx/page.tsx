import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["MARKETING", "VFX", "2020"],
  title: "Zero VFX",
  description: "Supported acquisition of 3 high-profile VFX contracts by translating complex production workflows into client-facing materials.",
  timeline: "2020",
  team: "Zero VFX",
  role: "Marketing",
  skills: ["Client Communications", "Pitch Decks", "Production Workflows", "Content Strategy"],
};

const highlights = [
  "Supported the acquisition of 3 high-profile VFX contracts through client-facing pitch materials.",
  "Translated complex visual effects production workflows into accessible narratives for non-technical clients.",
  "Developed marketing collateral that helped bridge the gap between creative teams and business stakeholders.",
];

export default function ZeroVFXPage() {
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
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">SKILLS</p>
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
        <div className="bg-[#f7f0d4] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we make the technical complexity of VFX production legible and compelling to high-value clients?
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTEXT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The world of VFX pitching</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — describe Zero VFX as a studio, the types of projects they work on, and what the pitch process typically looks like for VFX contracts.]
          </p>
          <div className="w-full rounded-2xl bg-[#f0e8c2]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">WORK</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Translating craft into narrative</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — walk through the pitch materials you created, how you simplified complex workflows, and what made the client communications effective.]
          </p>
          <div className="w-full rounded-2xl bg-[#e9e0b0]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">OUTCOME</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">3 contracts secured</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — describe the 3 contracts won, what they meant for the studio, and what you took away from working at the intersection of creative production and business development.]
          </p>
          <div className="w-full rounded-2xl bg-[#e2d89e]" style={{ height: "360px" }} />
        </div>

        {/* Next up — loop back to first project */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/accessibility-chessboard" className="group flex items-center justify-between">
            <div>
              <p className="text-[11px] text-neutral-400 mb-1">ACCESSIBILITY · 2026</p>
              <h3 className="font-sans font-semibold text-[22px] group-hover:opacity-60 transition-opacity">
                Accessibility Chessboard →
              </h3>
            </div>
            <div className="w-24 h-16 rounded-xl bg-[#e8d4fc] shrink-0 ml-8" />
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}
