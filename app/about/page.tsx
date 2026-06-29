import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutCollage from "../components/AboutCollage";
import { Users, LineChart, Zap } from "lucide-react";

const leadership = [
  {
    role: "PM Intern",
    org: "UW MSTI, Coffee Chat Program",
    image: "/images/aboutme/IMG_9593.jpg",
    alt: "Leading a workshop discussion",
  },
  {
    role: "Apprenticeship Lead",
    org: "T-Mobile, Accessibility Chessboard",
    image: "/images/chessboard/Image__20_.jpeg",
    alt: "Team collaborating on the accessibility chessboard",
  },
  {
    role: "Graduate Student",
    org: "MS Technology Innovation (HCI)",
    image: "/images/aboutme/IMG_6325.jpg",
    alt: "Soldering electronics in the lab",
  },
];

const values = [
  { icon: Users, text: "Build with users, not just for them." },
  { icon: LineChart, text: "Data tells the story; empathy writes it." },
  { icon: Zap, text: "Move fast, but never forget the human on the other end." },
];

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />

      <main className="pt-28 pb-8 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          {/* Intro: copy left, collage right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <div className="max-w-xl lg:max-w-none">
              <p
                className="font-sans leading-tight mb-10"
                style={{ fontSize: "32px", fontWeight: 500, color: "#000000" }}
              >
                I&apos;m Daniel – I build programs that connect people and solve real problems.
              </p>

              <div className="space-y-5 font-body text-body text-[#242424] leading-[1.7]">
                <p>
                  Growing up between Seoul and Bellevue shaped my instinct for understanding people.
                  I&apos;ve always been drawn to the spaces where systems fall short: the government
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
            </div>

            <div className="w-full">
              <AboutCollage />
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-20 pt-10 border-t border-neutral-200">
            <p className="text-base tracking-widest uppercase text-neutral-400 mb-4">LEADERSHIP</p>
            <p
              className="font-sans mb-10"
              style={{ fontSize: "24px", fontWeight: 400, color: "#545454" }}
            >
              At UW MSTI, I work at the intersection of technology and people.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {leadership.map((item) => (
                <div key={item.role}>
                  <div className="mb-3 aspect-[3/2] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <p className="font-body text-body text-black">{item.role}</p>
                  <p className="font-body text-body text-neutral-500">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-20 pt-10 border-t border-neutral-200">
            <p className="text-base tracking-widest uppercase text-neutral-400 mb-10">MY CORE VALUES</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <div key={i}>
                  <value.icon className="w-6 h-6 mb-3 text-neutral-800" strokeWidth={1.5} />
                  <p className="font-body text-body leading-relaxed text-[#242424]">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <Footer inset />
        </div>
      </main>
    </>
  );
}
