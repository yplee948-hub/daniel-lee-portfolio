import Nav from "../components/Nav";
import Footer from "../components/Footer";

const leadership = [
  {
    role: "PM Intern",
    org: "UW MSTI — Coffee Chat Program",
    bg: "#e8edf5",
  },
  {
    role: "Apprenticeship Lead",
    org: "T-Mobile — Accessibility Chessboard",
    bg: "#f0e8f5",
  },
  {
    role: "Graduate Student",
    org: "MS Technology Innovation (HCI)",
    bg: "#e8f5ed",
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

      <main className="pt-[112px] pb-8 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-20">
          <p
            className="font-sans font-medium text-[32px] text-black leading-tight max-w-[800px] mb-10"
          >
            I&apos;m Daniel – I build programs that connect people and solve real problems.
          </p>

          <div className="space-y-5 max-w-full font-sans text-base text-[#242424] leading-[27px] mb-20">
            <p>
              Growing up between Seoul and Bellevue shaped my instinct for understanding people.
              I&apos;ve always been drawn to the spaces where systems fall short — the government
              portal that confuses users, the franchise that can&apos;t scale, the team that loses
              track of its own progress.
            </p>
            <p>
              I spent years in operations and program management, running franchise expansions in
              South Korea and managing citizen-facing government programs. Each role taught me how
              to move fast in ambiguous environments and turn fragmented data into clear action.
            </p>
            <p>
              That path eventually led me to product management and HCI. I&apos;m currently pursuing
              my M.S. in Technology Innovation (HCI) at the University of Washington, where I build
              dashboards, prototype accessibility tools, and work with AI to make things that
              actually help people.
            </p>
            <p>
              I believe the best product decisions come from being in the room with real users. And
              I believe every PM should know how to build, at least a little.
            </p>
          </div>

          <section className="mb-20">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-4">
              LEADERSHIP
            </p>
            <p className="font-sans text-2xl text-[#545454] max-w-[700px] mb-10 leading-snug">
              At UW MSTI, I work at the intersection of technology and people.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadership.map((item, i) => (
                <div key={i}>
                  <div
                    className="w-full mb-2 rounded-sm"
                    style={{ backgroundColor: item.bg, height: "200px" }}
                  />
                  <p className="text-sm text-black">{item.role}</p>
                  <p className="text-sm text-neutral-500">{item.org}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-8">
              MY CORE VALUES
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i} className="max-w-[360px]">
                  <p className="text-lg mb-3 text-[#333]">✱</p>
                  <p className="text-sm text-[#242424] leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <Footer inset />
        </div>
      </main>
    </>
  );
}
