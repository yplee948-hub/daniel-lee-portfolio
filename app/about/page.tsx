import Nav from "../components/Nav";
import Footer from "../components/Footer";

const leadership = [
  {
    role: "PM Intern",
    org: "UW MSTI, Coffee Chat Program",
    bg: "#e8edf5",
  },
  {
    role: "Apprenticeship Lead",
    org: "T-Mobile, Accessibility Chessboard",
    bg: "#f0e8f5",
  },
  {
    role: "Graduate Student",
    org: "MS Technology Innovation (HCI)",
    bg: "#e8f5ee",
  },
];

const values = [
  "Build with users, not just for them.",
  "Data tells the story; empathy writes it.",
  "Move fast, but never forget the human on the other end.",
];

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />

      <main className="pt-28 pb-8 bg-white">
        <div className="px-8 md:px-16 max-w-4xl">

          {/* Intro heading */}
          <p
            className="font-sans leading-tight mb-10"
            style={{ fontSize: "32px", fontWeight: 500, color: "#000000" }}
          >
            I&apos;m Daniel – I build programs that connect people and solve real problems.
          </p>

          {/* Body paragraphs */}
          <div className="space-y-5 max-w-2xl font-body text-body text-[#242424] leading-[1.7]">
            <p>
              Growing up between Seoul and Bellevue shaped my instinct for understanding people. I&apos;ve always been
              drawn to the spaces where systems fall short: the government portal that confuses users, the franchise
              that can&apos;t scale, the team that loses track of its own progress.
            </p>
            <p>
              I spent years in operations and program management, running franchise expansions in South Korea and
              managing citizen-facing government programs. Each role taught me how to move fast in ambiguous
              environments and turn fragmented data into clear action.
            </p>
            <p>
              That path eventually led me to product management and HCI. I&apos;m currently pursuing my M.S. in
              Technology Innovation (HCI) at the University of Washington, where I build dashboards, prototype
              accessibility tools, and work with AI to make things that actually help people.
            </p>
            <p>
              I believe the best product decisions come from being in the room with real users. And I believe every
              PM should know how to build, at least a little.
            </p>
          </div>

          {/* Leadership */}
          <div className="mt-20 pt-10 border-t border-neutral-200 max-w-4xl">
            <p className="text-base tracking-widest uppercase text-neutral-400 mb-4">LEADERSHIP</p>
            <p
              className="font-sans mb-10"
              style={{ fontSize: "24px", fontWeight: 400, color: "#545454" }}
            >
              At UW MSTI, I work at the intersection of technology and people.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {leadership.map((item, i) => (
                <div key={i}>
                  <div
                    className="w-full mb-3"
                    style={{ backgroundColor: item.bg, height: "200px" }}
                  />
                  <p className="font-body text-body text-black">{item.role}</p>
                  <p className="font-body text-body text-neutral-500">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-20 pt-10 border-t border-neutral-200 max-w-4xl">
            <p className="text-base tracking-widest uppercase text-neutral-400 mb-10">MY CORE VALUES</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i}>
                  <p className="text-lg mb-3 text-neutral-800">✱</p>
                  <p className="font-body text-body leading-relaxed text-[#242424]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer subtitle="Out of anywhere you could be, you're here." />
    </>
  );
}
