import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["PRODUCT MANAGEMENT", "WORKFLOW OPTIMIZATION", "2025"],
  title: "Coffee Chat Operations Dashboard",
  description: "Identified a manual workflow bottleneck inside MSTI's ambassador program, validated the problem through stakeholder interviews, mapped the full process in FigJam, and shipped a working prototype dashboard — without engineering support.",
  timeline: "Jan 2025 – Jun 2025",
  team: "UW MSTI GIX",
  role: "PM Intern",
  skills: ["Stakeholder Interviews", "FigJam", "Workflow Mapping", "Prototyping", "HTML/CSS/JS", "Claude AI"],
};

const highlights = [
  "Conducted 8 stakeholder interviews (6 ambassadors + 2 faculty) to surface friction points in the existing workflow before touching any tooling.",
  "Mapped the full end-to-end process in FigJam, identified 3 high-friction manual steps, and scoped the prototype around the highest-ROI interventions.",
  "Shipped a working coordinator dashboard and ambassador portal using AI-assisted prototyping — validated with a 91% satisfaction rate across MSTI staff.",
];

export default function CoffeeChatPage() {
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
        <p className="font-body text-body text-neutral-500 leading-relaxed mb-12">
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
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-2">METHODS</p>
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
            How might we give MSTI coordinators real-time visibility into 100+ coffee chat requests — and reduce the manual overhead ambassadors spend drafting emails, tracking status, and submitting feedback?
          </p>
        </div>

        {/* Section 1: Context */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">CONTEXT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The program was growing faster than the process</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            MSTI&apos;s Coffee Chat Program connects prospective students with current MSTI ambassadors for one-on-one conversations about the program. At its peak, coordinators were managing 100+ requests per semester across a SharePoint spreadsheet, manual email chains, and a Microsoft Form for post-chat feedback.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            The program worked — but the workflow behind it was held together manually. Every step from assignment to feedback collection required someone to copy, paste, update, and follow up by hand. During the program&apos;s busiest weeks, things slipped through.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed">
            My role was not to rebuild the program from scratch. It was to observe the existing workflow, find where the team was losing the most time, and determine whether a lightweight tool could recover it.
          </p>
        </div>

        {/* Section 2: Discovery */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">DISCOVERY</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Observe first, build second</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Before proposing any solution, I ran 8 structured stakeholder interviews over two weeks — 6 with student ambassadors and 2 with faculty coordinators. Each session followed the same prompt: <em className="text-neutral-700">&quot;Walk me through what you actually do when a new request comes in, step by step.&quot;</em>
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            I was specifically listening for three things: where time was being lost, where ownership was unclear, and what tasks felt repetitive enough that people had developed workarounds. I wasn&apos;t leading toward a solution — I was mapping reality.
          </p>

          {/* Interview findings */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { num: "8", label: "Stakeholder interviews", sub: "6 ambassadors · 2 faculty" },
              { num: "3", label: "High-friction steps identified", sub: "Email drafting · Status tracking · Feedback collection" },
              { num: "~20min", label: "Lost per coordinator per week", sub: "Just on manual status updates" },
            ].map((m, i) => (
              <div key={i} className="border-t border-neutral-200 pt-6">
                <p className="font-sans font-light text-[2.5rem] leading-none text-black mb-2">{m.num}</p>
                <p className="font-body text-body text-neutral-700 font-medium mb-1">{m.label}</p>
                <p className="text-[11px] text-neutral-400 leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Three friction points surfaced consistently across nearly every interview:
          </p>
          <div className="space-y-4 mb-8">
            {[
              { label: "Manual email drafting", desc: "Ambassadors had to open Outlook, copy a format from a separate document, manually fill in the student's name and details, and send. There was no template, no pre-fill, and no record of whether it was sent. Several ambassadors said they occasionally forgot which requests they'd already emailed." },
              { label: "No coordinator visibility", desc: "The SharePoint spreadsheet showed what was assigned, but not what was happening after assignment. During peak season, coordinators had no way to see at a glance which requests were stalled, which were in progress, and which had completed without manually reading every row." },
              { label: "Disconnected feedback collection", desc: "Post-chat feedback was sent via a separate Microsoft Form one week after the chat — manually, by the coordinator. The feedback data lived in a separate file and was never systematically connected back to the original request or ambassador. Identifying trends across feedback required hours of manual cross-referencing." },
            ].map((f, i) => (
              <div key={i} className="border border-neutral-100 rounded-lg p-5 bg-[#f8fafc]">
                <p className="font-sans font-semibold text-[13px] mb-2 text-neutral-800">{f.label}</p>
                <p className="text-[12px] text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Workflow mapping */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">WORKFLOW MAPPING</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Turning observations into a process map</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
            After the interviews, I mapped the full end-to-end workflow in FigJam — both the coordinator flow and the ambassador journey — to make the friction visible to everyone, not just to me. The goal was to give the team a shared picture of reality before we discussed what to fix.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
            The existing process had 9 steps from form submission to feedback collection. Three of them — highlighted in the map — were purely manual and offered no visibility to anyone else:
          </p>

          {/* Workflow steps */}
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-8 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">EXISTING WORKFLOW · 9 STEPS</p>
            <div className="space-y-3">
              {[
                { step: "01", label: "Student submits a coffee chat request", sub: "Via Joho Form on the MSTI website", friction: false },
                { step: "02", label: "Form auto-populates the SharePoint spreadsheet", sub: "The one reliable automated step in the process", friction: false },
                { step: "03", label: "Coordinator receives email notification", sub: "Triggered automatically from SharePoint", friction: false },
                { step: "04", label: "Coordinator manually assigns to an ambassador", sub: "Student vs. alumni, based on preference", friction: false },
                { step: "05", label: "Coordinator manually emails both parties", sub: "Copy-pasted intro email with student details", friction: true },
                { step: "06", label: "Ambassador drafts and sends a follow-up email", sub: "Manually, using a format doc stored separately", friction: true },
                { step: "07", label: "Ambassador and student connect", sub: "Zoom, in-person, or email — no standard format", friction: false },
                { step: "08", label: "Coordinator manually sends feedback form after 1 week", sub: "Via Microsoft Forms — tracked in a separate file", friction: true },
                { step: "09", label: "Coordinator manually updates spreadsheet with outcome", sub: "Done by hand, often delayed or skipped", friction: true },
              ].map((s) => (
                <div key={s.step} className={`flex gap-4 items-start rounded-lg px-4 py-3 ${s.friction ? "bg-red-50 border border-red-100" : "bg-white border border-neutral-100"}`}>
                  <span className={`text-[10px] font-mono shrink-0 pt-0.5 ${s.friction ? "text-red-400" : "text-neutral-300"}`}>{s.step}</span>
                  <div>
                    <p className={`text-[12px] font-semibold ${s.friction ? "text-red-700" : "text-neutral-700"}`}>{s.label}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{s.sub}</p>
                  </div>
                  {s.friction && (
                    <span className="ml-auto text-[9px] tracking-widest uppercase text-red-400 font-semibold shrink-0 pt-0.5">friction</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FigJam image */}
          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 mb-3">
            <img
              src="/images/coffeechat_figjam.png"
              alt="FigJam workflow map showing the coffee chat program process"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <p className="font-body text-body text-neutral-400 mt-3 tracking-wide mb-8">FigJam workflow map — red nodes indicate manual, high-friction steps with no visibility to coordinators</p>

          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            The FigJam map also surfaced something the interviews alone didn&apos;t fully capture: the ambassador journey was almost entirely invisible to coordinators. Once an assignment was made, there was no signal about whether the ambassador had reached out, whether the chat had happened, or whether anything had gone wrong — until the feedback form was manually sent a week later.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed">
            This became the core design constraint: the solution needed to give coordinators real-time visibility into ambassador actions without changing how ambassadors worked.
          </p>
        </div>

        {/* Section 4: Scoping */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">SCOPING</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Deciding what to build — and what to leave out</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
            With the friction map in hand, I evaluated each pain point against three questions: How much time does this cost? Can it be solved without a backend? Will the team actually use it?
          </p>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { step: "01", label: "Observe", desc: "Mapped the full workflow from form submission to feedback collection" },
              { step: "02", label: "Interview", desc: "8 stakeholder sessions to identify where time was lost and ownership broke down" },
              { step: "03", label: "Scope", desc: "Evaluated friction points by time cost, buildability, and adoption likelihood" },
              { step: "04", label: "Prototype", desc: "Built a working dashboard with AI-assisted tooling — no engineering team required" },
            ].map((s) => (
              <div key={s.step} className="border border-neutral-100 rounded-lg p-5 bg-[#f8fafc]">
                <p className="text-[10px] font-mono text-neutral-300 mb-2">{s.step}</p>
                <p className="font-sans font-semibold text-[13px] mb-2 text-neutral-800">{s.label}</p>
                <p className="text-[11px] text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            I scoped the prototype around three targeted interventions — one per major friction point — and explicitly left out anything that would require replacing the existing SharePoint workflow or adding backend infrastructure. The constraint wasn&apos;t technical. It was adoption: the team needed to see value within days, not weeks.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "In scope", items: ["Coordinator request pipeline with real-time status", "Ambassador portal with pre-filled email templates", "Post-chat feedback form built into the ambassador flow"] },
              { label: "Out of scope", items: ["Replacing SharePoint as data source", "Automating email sending (no backend)", "Full authentication system"] },
              { label: "Success criteria", items: ["Reduced manual steps for ambassadors", "Coordinator can see status without opening spreadsheet", "Feedback data attached to original request"] },
            ].map((col, i) => (
              <div key={i} className={`rounded-lg p-5 border ${i === 0 ? "border-neutral-800 bg-neutral-950 text-white" : i === 1 ? "border-neutral-200 bg-white" : "border-[#d6e8f7] bg-[#eef6fc]"}`}>
                <p className={`text-[9px] tracking-widest uppercase font-semibold mb-3 ${i === 0 ? "text-neutral-400" : "text-neutral-400"}`}>{col.label}</p>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className={`text-[11px] leading-relaxed flex gap-2 ${i === 0 ? "text-neutral-300" : "text-neutral-600"}`}>
                      <span className="shrink-0 mt-0.5">{i === 1 ? "–" : "→"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Build */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROTOTYPE</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Building the dashboard without an engineering team</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Rather than writing a requirements doc and waiting for an engineering sprint, I built the prototype myself using AI-assisted tooling. The approach: describe the interface, iterate on the output, validate with users, repeat. This let me put something real in front of stakeholders within days of scoping — not weeks.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            The prototype is a two-view web dashboard. The coordinator view gives program staff a real-time pipeline of all requests — status, days in stage, stall flags, and ambassador assignment — replacing the need to manually read the spreadsheet. The ambassador portal gives student ambassadors a personal queue with pre-filled email templates and a built-in post-chat feedback form, replacing the manual Outlook copy-paste workflow.
          </p>

          {/* Feature breakdown */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { view: "Coordinator Dashboard", features: ["Status pipeline: Pending → Intro Sent → Confirmed → Completed → Feedback", "Stall detection: flags requests with no update in 5+ days", "Ambassador assignment with preference matching (student vs. alumni)", "Export to CSV for end-of-semester reporting", "Real-time stats: total requests, pending count, stalled count, feedback rate"] },
              { view: "Ambassador Portal", features: ["Personal queue showing only assigned requests", "Pre-filled intro and follow-up email templates with GIX signature", "One-click email preview and copy", "Post-chat feedback form (6 questions, built into the completion flow)", "Activity log showing full history per request"] },
            ].map((col, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <p className="font-sans font-semibold text-[13px] mb-4 text-neutral-800">{col.view}</p>
                <ul className="space-y-2">
                  {col.features.map((f, j) => (
                    <li key={j} className="text-[11px] text-neutral-500 leading-relaxed flex gap-2">
                      <span className="text-neutral-300 shrink-0">→</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Live dashboard callout */}
          <div className="bg-neutral-950 rounded-xl px-8 py-8 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">LIVE PROTOTYPE</p>
            <p className="font-sans font-semibold text-white text-[18px] mb-3">The dashboard is live and interactive</p>
            <p className="text-[12px] text-neutral-400 leading-relaxed mb-6">
              The prototype is fully functional with mock data representing a realistic semester&apos;s worth of requests. You can switch between coordinator and ambassador views, assign ambassadors, trigger email templates, and submit post-chat feedback — all in the browser, no login required.
            </p>
            <a
              href="https://coffeechat-program-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-5 py-2.5 text-[10px] tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors duration-150"
            >
              VIEW LIVE DASHBOARD →
            </a>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 mb-3">
            <img
              src="/images/coffeechatdashboard.png"
              alt="Coffee chat coordinator dashboard"
              className="w-full h-auto object-cover object-top"
            />
          </div>
          <p className="font-body text-body text-neutral-400 mt-3 tracking-wide">Coordinator view — request pipeline with status badges, stall flags, and ambassador assignment</p>
        </div>

        {/* Section 6: Validation */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">VALIDATION</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Testing the prototype with real users</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Once the prototype reached a functional state, I ran it through two rounds of testing. The first was a small walkthrough session with 3 ambassadors — I asked them to complete a set of tasks (find a request, send an intro email, submit feedback) without instruction, and observed where they hesitated or got confused. That session surfaced two friction points in the ambassador portal that I fixed before the wider review.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            The second round was a structured survey distributed to all 11 MSTI staff — coordinators and ambassadors — after a demo session. The survey asked about clarity, usefulness, and whether the tool would actually change how they worked. It was not a post-launch adoption survey. The prototype was not fully deployed. The results reflect early validation of the concept and interface.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { num: "91%", label: "Satisfaction rate across 11 MSTI staff", sub: "Post-demo validation survey" },
              { num: "3", label: "Manual steps reduced for ambassadors", sub: "Email drafting, status update, feedback submission" },
              { num: "2", label: "Prototype iterations", sub: "Based on direct user feedback before wider review" },
            ].map((m, i) => (
              <div key={i} className="border-t border-neutral-200 pt-6">
                <p className="font-sans font-light text-[2.5rem] leading-none text-black mb-2">{m.num}</p>
                <p className="font-body text-body text-neutral-700 font-medium mb-1">{m.label}</p>
                <p className="text-[11px] text-neutral-400">{m.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f8fafc] border border-neutral-100 rounded-xl px-8 py-6">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-4">HONEST ASSESSMENT</p>
            <p className="font-body text-body text-neutral-600 leading-relaxed mb-3">
              The prototype has not been fully deployed into the live program workflow. The 91% satisfaction rate reflects user response to the demo, not post-adoption data. The next step — integrating with the live SharePoint data source — would require coordination with the MSTI technical team and is outside the current scope of this internship project.
            </p>
            <p className="font-body text-body text-neutral-600 leading-relaxed">
              What this project demonstrated: the workflow problem was real, the proposed solution resonated with users, and the prototype was buildable by a single PM without engineering support. Those are the three signals worth measuring at this stage.
            </p>
          </div>
        </div>

        {/* Section 7: Learnings */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">LEARNINGS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">What I&apos;d do differently</h2>
          <div className="space-y-6">
            {[
              { label: "The workflow map was more valuable than I expected", desc: "Showing the FigJam diagram in stakeholder conversations changed the dynamic. People stopped describing their problems in the abstract and started pointing at specific nodes. It made the scoping conversation much faster and more concrete. I'd do this earlier next time — before the interviews, not after." },
              { label: "Friction is a requirement in disguise", desc: "Every time an ambassador said 'it's annoying that I have to...' that was a latent requirement. I learned to listen for the workaround, not just the complaint. The fact that ambassadors had developed their own personal template docs for email drafting was the signal — the solution was already obvious once I saw the behavior." },
              { label: "Prototypes move faster than documents", desc: "Putting a working interface in front of stakeholders generated more specific, actionable feedback than any requirements doc I could have written. Engineers, coordinators, and ambassadors all reacted to what they could see and click — not to bullet points. For future projects I'd get to a prototype faster and use documents to capture decisions, not to pitch ideas." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-base tracking-widest text-neutral-300 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-sans font-semibold text-[14px] text-neutral-800 mb-2">{item.label}</p>
                  <p className="font-body text-body leading-relaxed text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer inset />
      </main>
    </>
  );
}
