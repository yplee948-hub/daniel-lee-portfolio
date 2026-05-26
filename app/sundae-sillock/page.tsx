import Nav from "../components/Nav";

const meta = {
  tags: ["PROJECT MANAGER", "FRANCHISE OPS", "2024"],
  title: "Sundae Sillock Growth",
  description: "Drove growth across 50+ franchise locations through quality control and localized campaigns.",
  timeline: "2023 – 2024",
  team: "Sundae Sillock Korea",
  role: "Project Manager",
  skills: ["Franchise Operations", "Campaign Management", "Quality Control", "Excel", "Localization"],
};

const highlights = [
  "Managed expansion operations across 50+ franchise locations in South Korea.",
  "Launched localized marketing campaigns that contributed to a 33.8% increase in brand revenue.",
  "Implemented quality control systems that standardized service across all franchise locations.",
];

export default function SundaeSillockPage() {
  return (
    <>
      <Nav />

      <main className="pt-28 pb-16 px-6 md:px-10 max-w-6xl mx-auto">

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
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-xl mb-12">
          {meta.description}
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-neutral-200 py-8 mb-16">
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TIMELINE</p>
            <p className="font-body text-body leading-snug">{meta.timeline}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TEAM</p>
            <p className="font-body text-body leading-snug">{meta.team}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">ROLE</p>
            <p className="font-body text-body leading-snug">{meta.role}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">SKILLS</p>
            <p className="font-body text-body leading-snug">{meta.skills.join(", ")}</p>
          </div>
        </div>

        {/* Long story short */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">LONG STORY SHORT</p>
          <div className="space-y-6">
            {highlights.map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-base tracking-widest text-neutral-300 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-body leading-relaxed text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How might we */}
        <div className="bg-[#fce8d4] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we scale a growing franchise brand while keeping quality and brand identity consistent across 50+ locations?
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTEXT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Scaling a franchise in South Korea</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: describe the brand, its growth stage, the market, and what challenges came with scaling quickly.]
          </p>
          <div className="w-full rounded-2xl bg-[#f5dfc6]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">APPROACH</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Campaigns and quality systems</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: walk through the localized campaign strategy, what made it work, and how quality control was implemented across locations.]
          </p>
          <div className="w-full rounded-2xl bg-[#eecfae]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">RESULTS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">33.8% revenue growth</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: add the revenue data, operational improvements, and what you learned about scaling physical-digital brand experiences.]
          </p>
          <div className="w-full rounded-2xl bg-[#e7bf97]" style={{ height: "360px" }} />
        </div>

        {/* Next up */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/government-portal" className="group flex items-center justify-between">
            <div>
              <p className="font-body text-body text-neutral-400 mb-1">PROGRAM MANAGER · 2023</p>
              <h3 className="font-sans font-semibold text-[22px] group-hover:opacity-60 transition-opacity">
                Government Employment Portal →
              </h3>
            </div>
            <div className="w-24 h-16 rounded-xl bg-[#d4e8d4] shrink-0 ml-8" />
          </a>
        </div>

      </main>

    </>
  );
}
