import Nav from "../components/Nav";
import Footer from "../components/Footer";

const meta = {
  tags: ["PRODUCT MANAGEMENT", "AI TOOLS", "2025"],
  title: "Drama Relationship Map",
  description:
    "Acted as PM in a course-based developer marketplace to ship a spoiler-safe, AI-assisted character relationship board for cast-heavy dramas — from blank spec to live product.",
  timeline: "Jan 2025 – Apr 2025",
  team: "UW MSTI",
  role: "Product Manager (Client)",
  skills: ["Next.js", "React Flow", "TypeScript", "OpenAI API", "TMDB API", "Supabase"],
};

const highlights = [
  "Wrote the full product spec and graph architecture before a line of code was shipped — locking the visual language (node size, edge color, spoiler filter) that made it into the final demo unchanged.",
  "Managed 3 milestone check-ins with developer Finnick Chen, reviewing PRs within 48 hours and making the key scope call that kept the demo tight and shippable.",
  "One RedNote post one week after launch drove 21,000 users to the app — 4,448 likes, 3,351 saves, 464 comments — validating that the right channel was as important as the right product.",
];

export default function CharacterMapTrackerPage() {
  return (
    <>
      <Nav />

      <main className="pt-28 pb-16 px-6 md:px-10 max-w-6xl mx-auto">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {meta.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block border border-neutral-400 px-2 py-0.5 text-[9px] tracking-widest uppercase text-neutral-600 rounded-sm"
            >
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

        {/* The challenge */}
        <div className="bg-[#d0f0ec] rounded-2xl px-8 py-10 mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-3">THE CHALLENGE</p>
          <p className="font-sans font-medium text-[20px] leading-snug">
            How might we help drama viewers stay oriented in complex casts without breaking immersion
            or accidentally spoiling themselves?
          </p>
        </div>

        {/* Live product link */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">LIVE PRODUCT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">See it in action</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
            The app shipped at the end of Spring 2025 and has stayed live since. Load the Singles
            Inferno S5 demo board, drag character cards, click any node to see who they&apos;re
            connected to, or type any drama title to generate a fresh cast graph via AI.
          </p>
          <a
            href="https://charactermap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black px-5 py-2.5 text-[10px] tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-150"
          >
            VIEW LIVE DEMO →
          </a>
        </div>

        {/* Section 1: Problem */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROBLEM</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The spoiler trap</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Viewers of cast-heavy dramas — prestige TV, multi-generational epics, reality competition
            shows — run into the same problem constantly: they lose track of a character mid-episode,
            pause to search for context, and accidentally see a spoiler in the first result. The search
            engine doesn&apos;t know where you are in the story. Every wiki, fan site, and recap assumes
            you&apos;ve seen everything.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed">
            The gap was clear: there was no spoiler-safe, visual, interactive tool that showed you only
            the relationships you were supposed to know at your current point in the story. The product
            opportunity was to build exactly that — and make it work for any show, not just one.
          </p>
        </div>

        {/* Section 2: Target Users */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">TARGET USERS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">The complex-drama viewer</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            Not every drama watcher has this problem equally. I defined three distinct personas based on
            the specific nature of their confusion — each with a different trigger and a different version
            of the spoiler risk.
          </p>

          <div className="grid grid-cols-3 gap-5 mb-8">
            {[
              {
                persona: "The Prestige TV Super-Fan",
                shows: "Succession · The White Lotus · Industry · Shōgun",
                pain: "These shows have massive ensembles where characters are related by blood, marriage, and corporate politics simultaneously. A single throwaway line can imply a major loyalty shift — and this user feels they're missing the subtext.",
                trigger: "Mid-episode confusion",
              },
              {
                persona: "The Time-Jump Watcher",
                shows: "House of the Dragon · Dark · The Crown",
                pain: "Multi-generational structures, flash-forwards, and the same character played by three different actors across time periods. They can't keep track of which child belongs to which parent, or who the older version of a character is.",
                trigger: "Timeline disorientation",
              },
              {
                persona: "The Hiatus Binger",
                shows: "Any show with 1–2 year gaps between seasons",
                pain: "They wait for a full season to drop, or return after a long break. They've forgotten the specific grudges, affairs, and betrayals from the previous season and need a 5-minute visual refresher before they can re-engage.",
                trigger: "Season re-entry",
              },
            ].map((p, i) => (
              <div key={i} className="border border-neutral-200 rounded-xl p-6">
                <p className="font-sans font-semibold text-[14px] text-neutral-800 mb-2">{p.persona}</p>
                <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-4">{p.shows}</p>
                <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">{p.pain}</p>
                <div className="inline-block bg-[#d0f0ec] px-2 py-1 rounded-sm">
                  <p className="text-[9px] tracking-widest uppercase text-teal-700">{p.trigger}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-body text-body text-neutral-500 leading-relaxed">
            All three personas share a single underlying need: a way to check in on relationships without
            leaving the story further behind than they already are. The spoiler filter is what makes the
            product usable for all three — without it, the app is just another wiki.
          </p>
        </div>

        {/* Section 3: Discovery */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">DISCOVERY</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Research before requirements</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            A PM should never build features based on a guess. I used a four-step research framework
            combining digital ethnography, qualitative interviews, prototype testing, and demand
            validation — in that order. Each step either confirmed or sharpened the previous one.
          </p>

          {/* Step 1: Digital Ethnography */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-neutral-300">01</span>
              <p className="font-sans font-semibold text-[15px] text-neutral-800">Digital Ethnography — where fans already complain</p>
            </div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              Before talking to anyone, I went to where drama viewers already express confusion publicly.
              On subreddits for Succession, House of the Dragon, and Dark, I found over 30 threads
              titled variations of &ldquo;can someone explain the family tree?&rdquo; or &ldquo;who is
              working for who at this point?&rdquo; — each with hundreds of upvotes and dozens of replies.
              The top-voted responses were almost always fan-made graphics: color-coded flowcharts, family
              trees drawn in Google Slides, org-chart screenshots. Users were manually building the tool
              they needed every season.
            </p>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              I also scanned App Store reviews for TV tracking apps (TV Time, Letterboxd). A recurring
              complaint: &ldquo;gives me cast info but always includes spoilers&rdquo; and &ldquo;no way
              to filter by how far I am in the show.&rdquo; Existing tools weren&apos;t solving for
              spoiler-safe access — they were built for completionists, not people mid-rewatch.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: "30+", label: "Reddit threads asking cast / relationship questions across drama subreddits" },
                { stat: "Top answer", label: "Was always a fan-made visual — color-coded flowcharts, not text summaries" },
                { stat: "3 apps", label: "Reviewed on App Store; all flagged for spoilers by users in lower-rated reviews" },
              ].map((s, i) => (
                <div key={i} className="border-t border-neutral-200 pt-5">
                  <p className="font-sans font-light text-[2rem] leading-none text-black mb-2">{s.stat}</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: User Interviews */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-neutral-300">02</span>
              <p className="font-sans font-semibold text-[15px] text-neutral-800">User Interviews — qualitative behavior, not opinions</p>
            </div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              I recruited 5 heavy drama watchers for 30-minute video interviews. The key rule: never ask
              someone if they&apos;d like your idea — people lie to be polite. Instead, I asked only about
              past behavior. &ldquo;Tell me about a time you got confused while watching a show. What did
              you do in that exact moment?&rdquo; and &ldquo;Have you ever been spoiled while trying to
              look up a character? Walk me through how that happened.&rdquo; I also asked them to
              screenshare and show me how they currently look something up mid-episode — watching them
              navigate in real time surfaced friction points no interview question would have.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                {
                  quote: "I just want to know if they're related. Not if they die.",
                  context: "Interview 2 · K-drama viewer",
                },
                {
                  quote: "I paused House of the Dragon and Googled a character — the autocomplete showed me they get killed two episodes later.",
                  context: "Interview 4 · Prestige TV viewer",
                },
                {
                  quote: "Wikis are useless for me mid-season. The first paragraph always assumes you've seen the finale.",
                  context: "Interview 5 · Hiatus binger",
                },
              ].map((q, i) => (
                <div key={i} className="border border-neutral-100 rounded-lg p-5 bg-[#f8fafc]">
                  <p className="font-body text-body text-neutral-700 leading-relaxed mb-3 italic">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <p className="text-[9px] tracking-widest uppercase text-neutral-400">{q.context}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-body text-neutral-500 leading-relaxed">
              Key finding: all 5 interviewees had paused a show to search in the past month. 4 out of 5
              had been spoiled at least once in the past year doing it. None were satisfied with any
              existing tool — but all 5 had developed workarounds: screenshot bookmarks, notes apps,
              fan-made PDFs. Workarounds at scale are one of the clearest signals a real product gap exists.
            </p>
          </div>

          {/* Step 3: Lo-Fi Prototype Test */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-neutral-300">03</span>
              <p className="font-sans font-semibold text-[15px] text-neutral-800">Low-Fi Prototype Testing — validate behavior, not preference</p>
            </div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              Before writing the SPEC, I built a clickable Miro board of the Succession Season 3 cast —
              character cards connected by labeled relationship lines, no interactivity, just a static
              visual map. I handed it to 5 testers with a specific task: &ldquo;Imagine you&apos;re about
              to start Episode 4. Use this to remind yourself who currently controls the board seats.&rdquo;
            </p>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              What I watched for wasn&apos;t whether they liked it — it was what they tried to do. All 5
              immediately tried to click the nodes. 3 out of 5 looked for a search bar. 2 found the
              unlabeled lines confusing and asked what the different line styles meant. These observations
              directly shaped three decisions in the SPEC: click-to-focus was a must-have (not a
              nice-to-have), a search or filter bar was required, and the edge color vocabulary had to be
              defined and consistent from day one.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { finding: "5/5 tried to click character nodes", implication: "Interactive nodes are not a nice-to-have — they're the expected default behavior" },
                { finding: "3/5 looked for a search or filter bar", implication: "Added search to must-have features; became the episode-progress filter in the final product" },
                { finding: "2/5 confused by unlabeled lines", implication: "Locked the 6-type edge color vocabulary into the architecture before any code was written" },
              ].map((f, i) => (
                <div key={i} className="border border-neutral-100 rounded-lg p-5 bg-[#f8fafc]">
                  <p className="font-sans font-semibold text-[12px] text-neutral-800 mb-2">{f.finding}</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{f.implication}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Smoke Test */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-neutral-300">04</span>
              <p className="font-sans font-semibold text-[15px] text-neutral-800">Smoke Test — validate demand before building</p>
            </div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              The final check before committing to a build: I put up a one-page Carrd landing page
              describing the product — &ldquo;The spoiler-free character map for complex dramas. Never
              get confused by family trees or corporate betrayals again.&rdquo; I added screenshots of
              the Figma mockups and a single CTA: &ldquo;Join the Beta Launch.&rdquo; I shared it in
              two drama-adjacent Discord communities and one Reddit thread.
            </p>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-5">
              The benchmark for strong demand signal: a 15–20% email sign-up conversion rate from
              unique visitors. Over two weeks, the page received 212 unique visitors and collected 38
              email sign-ups — an 18% conversion rate. That number, alongside the interview data and the
              Reddit pattern, gave me enough confidence to write a full SPEC rather than a scoped
              experiment.
            </p>
            <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-6">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { num: "212", label: "Unique visitors over 2 weeks" },
                  { num: "38", label: "Email sign-ups from the beta CTA" },
                  { num: "18%", label: "Conversion rate — above the 15–20% strong-demand threshold" },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="font-sans font-light text-[2rem] leading-none text-black mb-1">{m.num}</p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Process */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">PROCESS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Spec before sprint</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            This project ran inside a course-based developer marketplace — I was the PM and client,
            Finnick Chen was the developer. Unlike a typical class project where you figure it out
            together, I had to come in with a real brief. Finnick&apos;s time was the resource. Wasted
            check-ins meant a worse product.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            Armed with four rounds of research, I delivered two documents before any code was written: a
            product SPEC and an ARCHITECTURE doc. The SPEC covered the problem statement, five
            prioritized user stories derived directly from the interview findings, a must-have vs.
            nice-to-have feature split, and acceptance criteria specific enough to evaluate at a live
            demo. The ARCHITECTURE doc went a level deeper — specifying the exact visual language for the
            graph (the same color vocabulary validated in prototype testing), the data schema with
            column-level notes, and three milestone check-ins with clear deliverables. Writing that
            architecture document was one of the most PM-specific things I did on this project — it
            translated user needs into engineering constraints so there was no ambiguity about what
            &ldquo;done&rdquo; looked like.
          </p>

          {/* 4-step process grid */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              {
                step: "01",
                label: "Discovery",
                desc: "Digital ethnography, 5 user interviews, low-fi prototype testing, smoke test landing page — all before writing a single requirement",
              },
              {
                step: "02",
                label: "Spec + Arch",
                desc: "Product SPEC with 5 user stories, must-haves, acceptance criteria; ARCHITECTURE doc with full graph design language and data schema",
              },
              {
                step: "03",
                label: "Check-ins",
                desc: "3 milestone reviews with PRs reviewed within 48 hours; scope calls made at each check-in to protect the demo",
              },
              {
                step: "04",
                label: "Demo",
                desc: "Live demo to class of 18 — Singles Inferno S5 curated board plus live AI generation for any show",
              },
            ].map((s) => (
              <div key={s.step} className="border border-neutral-100 rounded-lg p-5 bg-[#f8fafc]">
                <p className="text-[10px] font-mono text-neutral-300 mb-2">{s.step}</p>
                <p className="font-sans font-semibold text-[13px] mb-2 text-neutral-800">{s.label}</p>
                <p className="text-[11px] text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Key scope decisions */}
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-7 mb-2">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-5">KEY SCOPE DECISIONS</p>
            <div className="space-y-4">
              {[
                {
                  decision: "Cut manual text paste from v1.",
                  reasoning:
                    "Original spec included a flow where users paste raw story text and AI extracts characters. I scoped this to v2 — the LLM already knows popular dramas from training data, so typing a title was enough for a demo. This saved significant backend work and kept the milestone on track.",
                },
                {
                  decision: "No user accounts or saved boards in v1.",
                  reasoning:
                    "Authentication and personalization were listed as nice-to-have. With an 8-week timeline, the risk of auth scope creep was too high. I explicitly scoped these out in the PRD and held that line through check-in 2 when the feature came up again.",
                },
                {
                  decision: "Ship with one curated demo story, not a library.",
                  reasoning:
                    "A library of stories would have required editorial work neither of us had time for. Committing to Singles Inferno S5 as the flagship demo let Finnick tune the layout, headshots, and relationship labels for one high-quality showcase instead of many mediocre ones.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[9px] font-mono text-neutral-300 shrink-0 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-sans font-semibold text-[13px] text-neutral-800 mb-1">{item.decision}</p>
                    <p className="text-[11px] text-neutral-500 leading-relaxed">{item.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Solution */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">SOLUTION</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">A string board for any show</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
            The product ships in two modes. First, a curated board — Singles Inferno Season 5, 12
            characters, 23 relationship edges, episode-aware spoiler filtering. Second, an AI mode — type
            any drama title, wait ~4 seconds, and a fresh cast graph renders using the same visual
            language. Both modes share the same interaction layer: draggable nodes, click-to-focus, a
            relationship detail panel, and PNG export.
          </p>

          {/* Graph visual language grid */}
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-7 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-5">GRAPH VISUAL LANGUAGE</p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-sans font-semibold text-[13px] text-neutral-800 mb-3">Nodes (Characters)</p>
                <div className="space-y-2">
                  {[
                    { property: "Size", meaning: "Character importance — protagonist nodes are visibly larger than supporting or minor characters" },
                    { property: "Color", meaning: "Faction or group — characters on the same side share a hue, making alliances immediately legible" },
                    { property: "Avatar", meaning: "Cast headshot from TMDB — makes real-world characters recognizable on sight" },
                  ].map((r) => (
                    <div key={r.property} className="flex gap-3">
                      <span className="text-[10px] font-mono text-teal-600 shrink-0 w-14 pt-0.5">{r.property}</span>
                      <span className="text-[11px] text-neutral-500 leading-relaxed">{r.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans font-semibold text-[13px] text-neutral-800 mb-3">Edges (Relationships)</p>
                <div className="space-y-2">
                  {[
                    { type: "Family", color: "Amber" },
                    { type: "Romantic", color: "Rose" },
                    { type: "Ally / Friend", color: "Teal" },
                    { type: "Rival / Enemy", color: "Crimson" },
                    { type: "Neutral", color: "Grey" },
                    { type: "Other / Complex", color: "Purple" },
                  ].map((e) => (
                    <div key={e.type} className="flex gap-3 items-center">
                      <span className="text-[10px] font-mono text-neutral-400 shrink-0 w-24">{e.type}</span>
                      <span className="text-[10px] text-neutral-400">→</span>
                      <span className="text-[11px] text-neutral-600">{e.color}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="bg-neutral-950 rounded-xl px-7 py-6 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-4">TECH STACK</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3">
              {[
                {
                  tool: "Next.js + TypeScript",
                  reason: "App Router for server-side data fetching; Client Components for the interactive graph layer",
                },
                {
                  tool: "React Flow + elkjs",
                  reason: "React Flow handles all drag, pan, and click interaction; elkjs computes force-directed layout with protagonist anchoring",
                },
                {
                  tool: "OpenAI-compatible API",
                  reason: "Server-side AI generation — user types any show, gets back a structured cast + relationship graph in ~4 seconds",
                },
                {
                  tool: "TMDB API",
                  reason: "Cast headshots for known shows — makes character cards recognizable without any manual asset work",
                },
                {
                  tool: "Supabase",
                  reason: "Persists user-dragged node positions so the layout is restored on return visits",
                },
                {
                  tool: "Zod",
                  reason: "Validates every AI response before a DB write — protects against malformed JSON from the LLM",
                },
              ].map((t) => (
                <div key={t.tool} className="flex gap-3">
                  <span className="text-[11px] font-mono text-[#5eead4] shrink-0 pt-0.5">{t.tool}</span>
                  <span className="text-[11px] text-neutral-400 leading-relaxed">{t.reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "AI Cast Generation",
                desc: "Type any show title — the app sends a structured prompt to the LLM, validates the response with Zod, and renders the full cast graph. Average time: ~4 seconds.",
              },
              {
                label: "Spoiler-Safe Filter",
                desc: "Slide to your current episode. Characters introduced later disappear from the board entirely — absent nodes don't hint that someone exists.",
              },
              {
                label: "Click-to-Focus",
                desc: "Click any character and all unrelated nodes dim to 20% opacity. A detail panel slides in showing their role, faction, and full list of relationships.",
              },
              {
                label: "PNG Export",
                desc: "Export the full board as a high-resolution image. Useful for sharing, notes, or just screenshotting the chaos before a season finale.",
              },
            ].map((f, i) => (
              <div key={i} className="border border-neutral-200 rounded-sm p-5">
                <p className="font-sans font-semibold text-base mb-2">{f.label}</p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Impact */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">IMPACT</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">From course project to 21K users</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            The course demo went well — highest functionality score (5/5), two classmates called out the
            visual interaction design by name. But the real story happened after the class ended. One
            RedNote post a week after launch drove 21,000 users to the app and made it clear we had
            built something with genuine market demand, not just a good class project.
          </p>

          {/* Top-level metrics */}
          <div className="grid grid-cols-4 gap-6 mb-16">
            {[
              { num: "21K", label: "Users within the first week of launch" },
              { num: "4,448", label: "Likes on the RedNote launch post" },
              { num: "3,351", label: "Saves — the highest-signal engagement metric on RedNote" },
              { num: "464", label: "Comments, mostly tagging friends to try it" },
            ].map((m, i) => (
              <div key={i} className="border-t border-neutral-200 pt-6">
                <p className="font-sans font-light text-[2.5rem] leading-none text-black mb-2">{m.num}</p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Go-to-Market */}
        <div className="mb-16">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">GO-TO-MARKET</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">Why RedNote — and why it worked</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
            Choosing RedNote (小红书) as the launch channel wasn&apos;t arbitrary. It came from the same
            research process that shaped the product: go to where the audience already is and observe
            what they&apos;re doing. What I found was that Chinese drama audiences don&apos;t just watch
            shows — they document them. Fan-made 人物关系图 (character relationship charts) are a
            native cultural artifact on Chinese platforms. Chinese TV productions often officially
            release their own relationship charts before a season premieres. The audience already
            understood exactly what the product was the moment they saw it.
          </p>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            RedNote&apos;s format did the rest. With 300M+ monthly active users skewing female aged
            18–35 — the exact demographic that drives K-drama and C-drama fandom — and a visual-first
            feed where saves carry more algorithmic weight than likes, a single high-quality post
            showing the board in action had real distribution potential. Singles Inferno (단신지옥 /
            单身地狱) was already trending on the platform when we launched, which meant the demo
            content matched what the audience was actively searching for.
          </p>

          {/* Why Chinese audiences block */}
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-7 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-5">WHY CHINESE AUDIENCES WERE THE RIGHT FIRST MARKET</p>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "人物关系图 is already cultural",
                  body: "Character relationship charts are a native concept in Chinese drama culture. Official production companies release them. Fans redraw them every episode. The product didn't need to explain itself — it just needed to be better than a PNG in a group chat.",
                },
                {
                  title: "RedNote's save mechanic rewards visual tools",
                  body: "On RedNote, saves (收藏) signal intent to return — more valuable than a like. A tool users want to reference again and again is exactly the type of content that gets saved, and saved content gets distributed. 3,351 saves in one week validated the repeat-use model.",
                },
                {
                  title: "K-drama fandoms are massive and organized",
                  body: "Chinese K-drama fans are among the most engaged in the world. Singles Inferno S5 had millions of views across Chinese platforms the week it dropped. Launching with a pre-built S5 demo meant the app was immediately useful to an audience that was actively watching.",
                },
                {
                  title: "RedNote drives referral behavior naturally",
                  body: "The comment section on the post was almost entirely users tagging friends: '你看这个' ('look at this'). The visual nature of the board — character photos, colored relationship lines — made it highly shareable in screenshots without even clicking through.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="font-sans font-semibold text-[13px] text-neutral-800 mb-2">{item.title}</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RedNote post metrics callout */}
          <div className="bg-neutral-950 rounded-xl px-8 py-7 mb-8">
            <p className="text-[9px] tracking-widest uppercase text-neutral-500 mb-5">REDNOTE POST PERFORMANCE · WEEK 1</p>
            <div className="grid grid-cols-3 gap-8">
              {[
                { num: "4,448", label: "❤️  Likes", sub: "Top signal of reach" },
                { num: "3,351", label: "⭐  Saves", sub: "Highest-intent action on the platform" },
                { num: "464", label: "💬  Comments", sub: "Mostly friend tags and show requests" },
              ].map((m, i) => (
                <div key={i}>
                  <p className="font-sans font-light text-[2rem] leading-none text-white mb-1">{m.num}</p>
                  <p className="text-[11px] text-neutral-300 mb-0.5">{m.label}</p>
                  <p className="text-[10px] text-neutral-500">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 6: Learnings */}
        <div className="mb-20">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-3">LEARNINGS</p>
          <h2 className="font-sans font-semibold text-[22px] mb-4">What this changed about how I think about PM</h2>
          <p className="font-body text-body text-neutral-500 leading-relaxed mb-8">
            The main thing I&apos;d do differently on the product side: I scoped out user text paste too
            early. During the demo and in the RedNote comments, the most common request was support for
            shows the AI didn&apos;t know — niche dramas, current-season reality TV, novels. The LLM
            generation works brilliantly for popular titles but fails for anything outside its training
            data. Text paste would have closed that gap and made the product meaningfully more useful for
            the long tail of the audience that showed up.
          </p>
          <div className="rounded-xl border border-neutral-100 bg-[#f8fafc] px-8 py-7">
            <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-5">WHAT I&apos;D CARRY FORWARD</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "Architecture docs are a PM deliverable.",
                  body: "Writing the ARCHITECTURE doc forced me to translate user needs into engineering constraints before a line of code was written. It made every check-in faster — there was always a shared reference to compare against.",
                },
                {
                  title: "Scope calls age. Revisit them.",
                  body: "Cutting text paste felt right at week 2. By launch week it was clearly the most-requested feature. Good scope management means defending the right cuts — but also recognizing when real user signal contradicts an early assumption.",
                },
                {
                  title: "Channel is a product decision.",
                  body: "Choosing RedNote wasn&apos;t a marketing afterthought — it came from the same user research that shaped the product. The audience, the format, and the content all aligned. Distribution deserves the same rigor as the feature set.",
                },
              ].map((l, i) => (
                <div key={i}>
                  <p className="font-sans font-semibold text-[13px] text-neutral-800 mb-2">{l.title}</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next up */}
        <div className="border-t border-neutral-200 pt-12">
          <p className="text-[9px] tracking-widest uppercase text-neutral-400 mb-6">NEXT UP…</p>
          <a href="/coffee-chat" className="group flex items-center justify-between">
            <div>
              <p className="font-body text-body text-neutral-400 mb-1">PRODUCT MANAGEMENT · 2025</p>
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
