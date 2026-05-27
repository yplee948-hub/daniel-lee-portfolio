import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["AI TOOLS", "DESIGN SYSTEMS", "2025"],
  title: "Stakeholder Dashboard",
  description: "A centralized tracking dashboard built with Claude Code that cut manual tracking time by 40%.",
  timeline: "2025",
  team: "UW MSTI",
  role: "Product Manager",
  skills: ["Claude Code", "Cursor AI", "GitHub Copilot", "Streamlit", "Python"],
};

const highlights = [
  "Built a centralized stakeholder tracking dashboard using Claude Code, eliminating fragmented spreadsheet workflows.",
  "Reduced manual tracking time by 40% for the team through automated status aggregation.",
  "Achieved 91% internal user satisfaction in post-launch feedback from MSTI staff.",
];

export default function StakeholderDashboardPage() {
  return (
    <>
      <Nav />

      <main className="pt-28 px-6 md:px-10 max-w-6xl mx-auto">

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
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">TOOLS</p>
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
        <div className="bg-[#f7d6e8] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we give stakeholders a single source of truth for project status without demanding hours of manual upkeep?
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTEXT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The fragmented tracking problem</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: describe the situation before: scattered spreadsheets, unclear ownership, and the cost of that friction.]
          </p>
          <div className="w-full rounded-2xl bg-[#f5c8df]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">BUILD</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Using AI to move faster</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: explain how you used Claude Code and Cursor AI to accelerate development, what decisions you made, and what the dashboard actually shows.]
          </p>
          <div className="w-full rounded-2xl bg-[#f2bad6]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">IMPACT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">What changed</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: add adoption stats, time savings, user quotes, and what you'd build next.]
          </p>
          <div className="w-full rounded-2xl bg-[#edadcc]" style={{ height: "360px" }} />
        </div>
        <Footer inset />
      </main>
    </>
  );
}
