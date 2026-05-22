import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["PRODUCT MANAGEMENT", "FULL PROCESS", "2025"],
  title: "Coffee Chat Operations Dashboard",
  description: "Turned a manual Excel tracker into a real-time operations system for MSTI's coffee chat program.",
  timeline: "Jan 2025 – May 2025",
  team: "UW MSTI",
  role: "PM Intern",
  skills: ["SQL", "Python", "Streamlit", "Excel", "Google Analytics"],
};

const highlights = [
  "Replaced a manual Excel tracker with a real-time dashboard tracking 106+ student coffee chat requests.",
  "Reduced coordinator tracking time by 40% through automated status updates and SLA visibility.",
  "Achieved 91% internal user satisfaction in post-launch survey with MSTI staff.",
];

export default function CoffeeChatPage() {
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
        <div className="bg-[#d6e8f7] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we give MSTI coordinators real-time visibility into 100+ coffee chat requests without adding manual overhead?
          </p>
        </div>

        {/* Live dashboard callout */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">LIVE PRODUCT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">See it in action</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-6">
            The dashboard is live and in use by the MSTI team. You can explore the full product here.
          </p>
          <a
            href="https://coffeechat-dashboard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black px-5 py-2.5 text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-150"
          >
            VIEW LIVE DASHBOARD →
          </a>
        </div>

        {/* Section 1 — placeholder */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROBLEM</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The Excel tracker wasn&apos;t working</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — describe the pain points of the manual system, how requests were tracked, and what kept falling through the cracks.]
          </p>
          <div className="w-full rounded-2xl bg-[#c5ddf0]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 — placeholder */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">SOLUTION</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Building the dashboard</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — walk through your design decisions, data model, key features like SLA tracking, assignment ownership, and feedback follow-ups.]
          </p>
          <div className="w-full rounded-2xl bg-[#b4d0ea]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 — placeholder */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">IMPACT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Results and learnings</h2>
          <p className="text-[13px] text-neutral-500 leading-relaxed max-w-2xl mb-8">
            [Placeholder — add metrics, quotes from users, and what you&apos;d do differently.]
          </p>
          <div className="w-full rounded-2xl bg-[#a3c5e3]" style={{ height: "360px" }} />
        </div>

        {/* Next up */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/stakeholder-dashboard" className="group flex items-center justify-between">
            <div>
              <p className="text-[11px] text-neutral-400 mb-1">AI TOOLS · 2025</p>
              <h3 className="font-sans font-semibold text-[22px] group-hover:opacity-60 transition-opacity">
                Stakeholder Dashboard →
              </h3>
            </div>
            <div className="w-24 h-16 rounded-xl bg-[#f7d6e8] shrink-0 ml-8" />
          </a>
        </div>

      </main>

      <Footer />
    </>
  );
}
