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
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-3xl mb-12">
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
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-6">
            The dashboard shipped in Spring 2025 and is actively used by the MSTI program team. It reads from a live Google Sheet and updates in real time, with no backend required. The coordinator view, admin view, and export function are all accessible from the sidebar.
          </p>
          <a
            href="https://coffeechat-dashboard-git-main-yplee948-hubs-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black px-5 py-2.5 text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-150"
          >
            VIEW LIVE DASHBOARD →
          </a>
        </div>

        {/* Section 1: Problem */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROBLEM</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The Excel tracker wasn&apos;t working</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-4">
            The MSTI coffee chat program ran on a shared Google Sheet maintained by 5 coordinators. Each row was a student request with name, industry of interest, preferred timeline, and a manually typed status like "assigned" or "email sent." When the program was small, this worked. At 106+ requests per semester, it collapsed.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-4">
            The core problems: coordinators had no way to see who owned what. Status updates were inconsistent. One person wrote "intro sent," another wrote "emailed," another left it blank. There was no SLA visibility, so requests could sit in "assigned" limbo for two weeks with no one noticing. An estimated 8–12 requests per semester were simply dropped. Students who submitted never heard back.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            The biggest pain point surfaced in a coordinator interview: <em className="text-neutral-700">"I spend 20 minutes every Monday just figuring out what I'm supposed to be doing."</em> That was the problem worth solving.
          </p>

          {/* Two-image layout: form → tracker */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="w-full rounded-2xl overflow-hidden border border-neutral-200" style={{ height: "420px" }}>
                <img
                  src="/images/coffeechatapplication.png"
                  alt="Student coffee chat intake form"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-body text-body text-neutral-400 mt-3 tracking-wide">Student intake form. Each submission became a row in the shared tracker</p>
            </div>
            <div>
              <div className="w-full rounded-2xl overflow-hidden border border-neutral-200" style={{ height: "420px" }}>
                <img
                  src="/images/Execeltracker.png"
                  alt="Original Google Sheet tracker"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-body text-body text-neutral-400 mt-3 tracking-wide">Original Google Sheet tracker with 5 coordinators, no ownership column, and no SLA visibility</p>
            </div>
          </div>
        </div>

        {/* Section 2: Solution */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">SOLUTION</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Building the dashboard</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-6">
            I rebuilt the system around a single core model: every request moves through four explicit stages, each with a hard SLA deadline. The dashboard flags anything overdue in red and approaching in amber, automatically.
          </p>

          {/* Lifecycle pipeline visual */}
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 pt-8 pb-8 mb-8">
            {/* Pipeline row */}
            <div className="relative flex justify-between items-center mb-5">
              {/* Completed line (steps 0→1) */}
              <div className="absolute top-1/2 left-4 h-[2px] bg-[#1d4ed8] -translate-y-1/2" style={{ width: "calc(33.33% - 1rem)" }} />
              {/* Overdue line (steps 1→2, red) */}
              <div className="absolute top-1/2 h-[2px] bg-[#ef4444] -translate-y-1/2" style={{ left: "calc(33.33% + 1rem)", width: "calc(33.33% - 2rem)" }} />
              {/* Pending line (steps 2→3, gray) */}
              <div className="absolute top-1/2 h-[2px] bg-[#d4dfe9] -translate-y-1/2" style={{ left: "calc(66.67% + 1rem)", right: "1rem" }} />

              {/* Step 1: done */}
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-[#1d4ed8] border-2 border-[#1d4ed8]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Step 2: done */}
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-[#1d4ed8] border-2 border-[#1d4ed8]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5 5.5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Step 3: overdue */}
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 border-[#ef4444]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              </div>
              {/* Step 4: pending */}
              <div className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center bg-[#eaeff5] border-2 border-[#d4dfe9]" />
            </div>

            {/* Labels */}
            <div className="flex justify-between">
              {[
                { label: "Submitted", sla: "Day 0", state: "done" },
                { label: "Assigned", sla: "≤ 3 days", state: "done" },
                { label: "Intro Sent", sla: "≤ 5 days", state: "overdue", note: "2 days overdue" },
                { label: "Feedback", sla: "≤ 14 days", state: "pending" },
              ].map((col, i) => (
                <div key={i} className="text-center w-1/4">
                  <p className={`text-[9px] tracking-widest uppercase font-semibold ${col.state === "overdue" ? "text-[#ef4444]" : col.state === "done" ? "text-neutral-700" : "text-neutral-400"}`}>
                    {col.label}
                  </p>
                  <p className={`text-[8px] font-mono mt-0.5 ${col.state === "overdue" ? "text-[#ef4444]" : "text-neutral-300"}`}>
                    {col.note ?? col.sla}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-4">
            I built it in Streamlit backed by a Google Sheets data source (no backend rip-and-replace). Coordinators still edited the sheet; the dashboard read from it and layered intelligence on top. Key features: coordinator-level ownership view so each person saw only their queue, a cross-coordinator admin view for the program director, bulk export for end-of-semester reporting, and a summary banner showing live counts of how many requests were on-track vs. overdue.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            The biggest design decision was keeping the Google Sheet as the source of truth rather than migrating to a database. Coordinators were already in the sheet, so forcing them to a new tool would have killed adoption. The dashboard was a read layer, not a replacement.
          </p>
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200">
            <img
              src="/images/coffeechatdashboard.png"
              alt="Coffee chat operations dashboard"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <p className="font-body text-body text-neutral-400 mt-3 tracking-wide">Dashboard overview: status pipeline, SLA indicators, and coordinator assignment view</p>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { label: "SLA Tracking", desc: "3-tier deadline system per request: assignment, intro email, and feedback. Overdue items surface automatically in red." },
              { label: "Ownership View", desc: "Each coordinator sees only their active queue. No more 'I thought you were handling that.'" },
              { label: "Admin Overview", desc: "Program director gets a cross-coordinator view with total requests, completion rate, and average time-to-intro." },
              { label: "Bulk Export", desc: "One-click export of the full semester's data for reporting to MSTI leadership, formatted rather than raw." },
            ].map((f, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-sans font-semibold text-base mb-2">{f.label}</p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Impact */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">IMPACT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Results and learnings</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-4">
            We launched in Week 3 of Spring 2025. In the first month, coordinator self-reported tracking time dropped by 40%, from an average of 18 minutes per weekly check-in to around 11. Post-launch survey of all 11 MSTI staff showed 91% satisfaction. Zero requests were dropped after launch, compared to an estimated 8–12 in the prior semester.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            The hardest lesson: the dashboard was not the hard part. Getting coordinators to update the underlying sheet consistently was. We solved it by adding a 2-minute data hygiene check-in at the top of every weekly coordinator sync. The dashboard was open on screen, overdue items were visible to everyone, and social accountability did the rest. Data quality went from ~60% to ~94% complete within three weeks of that ritual.
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { num: "40%", label: "Reduction in coordinator tracking time per week" },
              { num: "91%", label: "Satisfaction rate across 11 MSTI staff post-launch" },
              { num: "0", label: "Requests dropped after launch (vs. 8–12 prior semester)" },
            ].map((m, i) => (
              <div key={i} className="border-t border-neutral-200 pt-6">
                <p className="font-sans font-light text-[2.5rem] leading-none text-black mb-2">{m.num}</p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200">
            <img
              src="/images/programanalytics.png"
              alt="Program analytics showing requests over time and weekly activity"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <p className="font-body text-body text-neutral-400 mt-3 tracking-wide">Week-over-week request completion rate before and after dashboard launch</p>
        </div>

        {/* Next up */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/stakeholder-dashboard" className="group flex items-center justify-between">
            <div>
              <p className="font-body text-body text-neutral-400 mb-1">AI TOOLS · 2025</p>
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
