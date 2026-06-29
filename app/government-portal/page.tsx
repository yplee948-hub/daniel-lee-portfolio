import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["PROGRAM MANAGER", "GOVERNMENT", "2023"],
  title: "Government Employment Portal",
  description: "Managed citizen onboarding for a new employment portal, driving a 35% increase in application completion.",
  timeline: "2022 to 2023",
  team: "Ministry of Labor, Korea",
  role: "Program Manager",
  skills: ["Program Management", "User Onboarding", "Process Design", "Stakeholder Coordination"],
};

const highlights = [
  "Managed citizen onboarding across 4,000+ applicants for a newly launched government employment portal.",
  "Drove a 35% increase in application completion rate through process redesign and support workflows.",
  "Coordinated cross-functional stakeholders across government departments to align on launch timelines.",
];

export default function GovernmentPortalPage() {
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
        <div className="bg-[#d4e8d4] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we help thousands of citizens successfully navigate a complex new government portal with minimal support overhead?
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTEXT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Launching a government-scale product</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: describe the portal, the government initiative behind it, and the stakes of getting onboarding right at scale.]
          </p>
          <div className="w-full rounded-2xl bg-[#c2dcc2]" style={{ height: "360px" }} />
        </div>

        {/* Section 2 */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROCESS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Redesigning the onboarding flow</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: walk through how you identified drop-off points, what changes were made to the onboarding process, and how you coordinated with government stakeholders.]
          </p>
          <div className="w-full rounded-2xl bg-[#b0d0b0]" style={{ height: "360px" }} />
        </div>

        {/* Section 3 */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">IMPACT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">35% more applications completed</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-4xl mb-8">
            [Placeholder: share the before/after data, what the completion rate improvement meant for real citizens, and key takeaways from working in the public sector.]
          </p>
          <div className="w-full rounded-2xl bg-[#9ec49e]" style={{ height: "360px" }} />
        </div>
        <Footer inset />
      </main>
    </>
  );
}
