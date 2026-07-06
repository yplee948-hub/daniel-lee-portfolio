import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { PhotoWrap } from "../components/PhotoWrap";
import { VideoWrap } from "../components/VideoWrap";
import { LiveDemoButton } from "../components/LiveDemoModal";
import { ProjectKanban } from "../components/ProjectKanban";
import {
  Lightbulb,
  Mic,
  BrainCircuit,
  Cpu,
  LayoutGrid,
  FlaskConical,
  Waypoints,
  Wifi,
  Lock,
  CircuitBoard,
  Bot,
  Wrench,
  Accessibility,
  Handshake,
} from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-neutral-200" />
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[9px] text-neutral-400 tracking-wide mt-2 mb-6">
      {children}
    </p>
  );
}

export default function AccessibilityChessboardPage() {
  return (
    <>
      <Nav badge="Completed" />

      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-end px-6 md:px-16 pt-32 pb-16"
        style={{
          background: "linear-gradient(to bottom, #ede0f8 0%, #ffffff 70%)",
          minHeight: "100vh",
        }}
      >
        <p className="flex items-center gap-3 font-mono text-[9px] tracking-widest uppercase text-neutral-500 mb-8">
          <span className="w-8 h-px bg-neutral-400 inline-block" />
          T-Mobile Sponsored &nbsp;·&nbsp; TECHIN 515, University of Washington &nbsp;·&nbsp; 2025 to 2026
        </p>

        <h1
          className="font-sans font-bold leading-[0.92] tracking-tighter text-black mb-10"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}
        >
          Wizarding
          <br />
          <em>Chess</em>
        </h1>

        <div className="flex items-end justify-between gap-6 flex-wrap border-t border-neutral-200 pt-8">
          <p className="font-body text-body text-neutral-500 leading-relaxed max-w-lg">
            A Harry Potter-inspired autonomous chessboard that physically moves pieces by
            itself, designed for players with hand and motor disabilities.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <LiveDemoButton className="font-mono text-[10px] tracking-widest uppercase bg-black text-white px-5 py-3 hover:bg-neutral-700 transition-colors" />
            <a
              href="https://github.com/yplee948-hub/wizardchess"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest uppercase border border-neutral-300 text-neutral-600 px-5 py-3 hover:border-black hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="border-t border-b border-neutral-200 bg-neutral-50 flex overflow-x-auto">
        {[
          { num: "3", label: "Microcontrollers" },
          { num: "52", label: "Unit Tests" },
          { num: "64", label: "Custom PCB Sensors" },
          { num: "$350", label: "Total Budget" },
          { num: "41cm", label: "Gantry Travel" },
          { num: "5s", label: "Avg Move Time" },
        ].map((s, i) => (
          <div
            key={i}
            className="flex-1 min-w-[140px] px-6 py-5 border-r border-neutral-200 last:border-r-0"
          >
            <p className="font-sans font-light text-[2rem] text-black leading-none mb-1">
              {s.num}
            </p>
            <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── MY ROLE ── */}
      <section className="px-6 md:px-16 py-24">
        <SectionLabel>My Role</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-sans font-semibold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-6">
              Technical PM<br />who <em>ships</em><br />the product.
            </h2>
            <p className="font-body text-body text-neutral-500 leading-relaxed">
              I wore two hats on this project. As PM I defined the product vision, managed
              the T-Mobile sponsor relationship, coordinated the team, and owned the budget.
              As an engineer I built the web interface from scratch and co-built the CoreXY
              motion system hands-on.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                num: "01",
                title: "Product & Vision",
                body: "Defined the product vision, led accessibility research, and set the roadmap for an industry-sponsored project from concept to working prototype.",
              },
              {
                num: "02",
                title: "Engineering",
                body: "Built the full Next.js web interface and co-engineered the CoreXY motion system: firmware, kinematics, and physical assembly.",
              },
              {
                num: "03",
                title: "Sponsor Relations",
                body: "Served as T-Mobile liaison, presenting progress, gathering feedback from their accessibility team, and translating industry requirements back into engineering decisions.",
              },
              {
                num: "04",
                title: "Operations",
                body: "Managed the full project budget ($350 cap), vendor sourcing from Shenzhen fabrication to local materials, and team delivery across hardware and software workstreams.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-start p-5 border border-neutral-200 rounded-sm hover:border-neutral-400 transition-colors"
              >
                <span className="font-sans font-light text-[1.6rem] text-neutral-300 leading-none flex-shrink-0 w-8">
                  {item.num}
                </span>
                <div>
                  <h4 className="font-sans font-semibold text-base mb-1">{item.title}</h4>
                  <p className="font-body text-body text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT TIMELINE ── */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50">
        <SectionLabel>Project Timeline</SectionLabel>
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-3xl mb-8">
          As technical PM I owned delivery from March through summer: sprint planning,
          cross-functional coordination, sponsor checkpoints, and post-demo hardening. This
          board reflects how work moved from kickoff to shipped milestones across hardware,
          firmware, and software.
        </p>
        <ProjectKanban />
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50">
        <SectionLabel>The Problem</SectionLabel>

        <div className="bg-[#ede0f8] border border-[#cba8f0]/40 rounded-sm px-8 py-10 mb-10 max-w-5xl mx-auto">
          <p className="flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-purple-500 mb-3">
            <Lightbulb className="w-3.5 h-3.5" strokeWidth={1.75} />
            HOW MIGHT WE
          </p>
          <p className="font-sans font-medium text-[clamp(1.05rem,1.8vw,1.45rem)] leading-snug">
            Make physical chess truly playable for people with hand and motor disabilities
            without sacrificing the tactile experience of the game?
          </p>
        </div>

        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-5xl mx-auto mb-4">
          Chess is one of the most universal strategy games in the world. But for people
          living with hand disabilities or motor impairments, physically moving pieces across
          a board is a frustrating barrier. Existing solutions like digital chess apps and
          screen-based interfaces strip away the tactile, physical experience of the game
          entirely.
        </p>
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-5xl mx-auto mb-12">
          Wizarding Chess removes that barrier. Players speak their move, and the board moves
          the piece for them.
        </p>

        <div className="flex gap-12 flex-wrap justify-center text-center">
          {[
            {
              num: "2M+",
              label: "Adults in the US experience paralysis affecting upper limb function (CDC)",
            },
            { num: "1 in 4", label: "American adults live with some form of disability" },
            {
              num: "0",
              label: "Existing physical chess products designed for motor accessibility",
            },
          ].map((s, i) => (
            <div key={i} className="flex-1 min-w-[180px]">
              <p className="font-sans font-light text-[3rem] leading-none text-black mb-2">
                {s.num}
              </p>
              <p className="font-body text-body text-neutral-500 leading-relaxed max-w-[200px] mx-auto">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE BUILT ── */}
      <section className="px-6 md:px-16 py-24">
        <SectionLabel>What We Built</SectionLabel>
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-3xl mb-8">
          A fully autonomous, voice-controlled physical chessboard that moves pieces on its
          own using an electromagnet on a CoreXY gantry. Players interact via voice command
          or a web interface. The board physically executes the move in real space.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 rounded-sm overflow-hidden divide-x divide-neutral-200">
          {[
            {
              num: "01",
              icon: Mic,
              title: "Voice & Web",
              desc: 'Player speaks "e2 to e4" or clicks in the browser. Stockfish AI available for either side.',
            },
            {
              num: "02",
              icon: BrainCircuit,
              title: "ESP32-S3 Brain",
              desc: "Transcribes voice via OpenAI Whisper, bridges to motor controller wirelessly via ESP-NOW.",
            },
            {
              num: "03",
              icon: Cpu,
              title: "Pico Controller",
              desc: "Validates moves, runs Dijkstra pathfinding around pieces, drives CoreXY stepper motors.",
            },
            {
              num: "04",
              icon: LayoutGrid,
              title: "Physical Board",
              desc: "Electromagnet slides pieces to target square. Hall sensors verify position. LEDs confirm placement.",
            },
          ].map((l, i) => (
            <div key={i} className="p-6 hover:bg-neutral-50 transition-colors">
              <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-3">
                {l.num}
              </p>
              <l.icon className="w-6 h-6 text-black mb-3" strokeWidth={1.5} />
              <h4 className="font-sans font-semibold text-base mb-2">{l.title}</h4>
              <p className="font-body text-body text-neutral-500 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-neutral-200 bg-neutral-50 rounded-sm px-6 py-4 flex items-center justify-between gap-4 flex-wrap mt-5">
          <p className="font-body text-body text-neutral-500">
            <strong className="text-black">Live Demo Available.</strong> Connect to the web
            interface and control the physical board from any browser on the same network.
          </p>
          <a
            href="https://515-wizard-chess.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase bg-black text-white px-5 py-2.5 hover:bg-neutral-700 transition-colors flex-shrink-0"
          >
            Open Demo →
          </a>
        </div>
      </section>

      {/* ── BUILD JOURNEY ── */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50">
        <SectionLabel>Build Journey</SectionLabel>

        {/* Phase 01 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 01
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              XY Motion<br /><em>System</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We explored multiple approaches including robotic arms before settling on a
              CoreXY belt-drive system inspired by 3D printer mechanics. We designed all
              custom brackets in Fusion 360, 3D printed them, sourced linear rods, belts,
              and NEMA 17 stepper motors within budget, and assembled the full gantry by hand.
              We wrote the firmware from scratch, implementing CoreXY inverse kinematics and
              Bresenham&apos;s line algorithm for smooth coordinated motion across 41cm × 41cm
              of travel.
            </p>
            {/* Bento grid: 3-col x 2-row, feature image left */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-3" style={{ height: 380 }}>
              <PhotoWrap
                src="/images/chessboard/Xy_beginning.jpeg"
                alt="Early gantry assembly"
                fill
                className="col-span-2 row-span-2 h-full"
              />
              <PhotoWrap
                src="/images/chessboard/beginning_.jpeg"
                alt="Components laid out"
                fill
                className="h-full"
              />
              <PhotoWrap
                src="/images/chessboard/1779615087216_image.png"
                alt="Full gantry assembled"
                fill
                className="h-full"
              />
            </div>
            <Caption>
              Early assembly, components laid out, then first full gantry with breadboard wiring
            </Caption>

            {/* CAD renders + movement videos */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div>
                <div className="grid grid-rows-2 gap-2 mb-2" style={{ height: 320 }}>
                  <PhotoWrap
                    src="/images/chessboard/1779614899975_image.png"
                    alt="Fusion 360 carriage CAD"
                    fill
                    className="h-full"
                  />
                  <PhotoWrap
                    src="/images/chessboard/1779614921073_image.png"
                    alt="Fusion 360 corner bracket CAD"
                    fill
                    className="h-full"
                  />
                </div>
                <Caption>
                  Fusion 360: carriage piece (top) and corner mount (bottom)
                </Caption>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <VideoWrap
                    src="/images/chessboard/first_vid_test_.mp4"
                    label="First Movement Test"
                    portrait
                  />
                </div>
                <div className="flex-1">
                  <VideoWrap
                    src="/images/chessboard/movingthechessinthebackrow.mp4"
                    label="Piece Routing with Blocker Displacement"
                    portrait
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 02 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 02
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Electromagnet<br /><em>&amp; Polarity</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We selected an H-bridge-driven electromagnet and engineered a key insight: by
              switching the direction of current through the H-bridge, we could attract white
              pieces on one polarity and black pieces on the other, allowing the board to
              selectively pick up pieces by color. We physically tested magnetic penetration
              through different plywood thicknesses to find the right balance between
              structural stability and magnetic force.
            </p>
            <PhotoWrap
              src="/images/chessboard/Image__11_.jpeg"
              alt="Testing electromagnet through plywood"
            />
            <Caption>Testing magnetic penetration through different plywood thicknesses</Caption>
            <VideoWrap
              src="/images/chessboard/Electromagnet_Polarity_Test.mp4"
              label="Polarity Switching Test"
              maxHeight={520}
            />
          </div>
        </div>

        {/* Phase 03 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 03
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Voice<br /><em>Recognition</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We integrated an ICS-43432 I2S MEMS microphone with the ESP32-S3 to capture
              voice commands, sending audio to OpenAI Whisper for transcription. The system
              parses the transcript for a chess move and sends it wirelessly to the Pico via
              ESP-NOW. Voice and web UI inputs are completely interchangeable. The physical
              board cannot tell the difference between a spoken command and a browser click.
            </p>
            <VideoWrap
              src="/images/chessboard/voice_sensor.MOV"
              label="First Successful Voice Command"
              maxHeight={560}
            />
          </div>
        </div>

        {/* Phase 04 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 04
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Custom<br /><em>PCB</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We designed custom 2-layer PCBs in KiCad integrating 64 A1302xUA Hall effect
              sensors and 64 WS2812B addressable RGB LEDs across four boards, one of each per
              chess square.
              The board was fabricated in Shenzhen, received, and hand-soldered using SMD
              reflow techniques. The Hall sensors detect and verify piece presence; the LEDs
              provide accessibility feedback highlighting valid moves and confirming correct
              placement.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/1779614468418_schematics.png"
                alt="KiCad schematic"
              />
              <PhotoWrap
                src="/images/chessboard/hall_effect_sensor_image_.png"
                alt="KiCad PCB layout"
              />
            </div>
            <Caption>KiCad schematic (Hall sensors + WS2812B LEDs) and PCB layout</Caption>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/hall_effect_sensor_image_2.png"
                alt="PCB 3D render"
              />
              <PhotoWrap
                src="/images/chessboard/1779617127644_image.png"
                alt="Fully soldered PCB"
              />
            </div>
            <Caption>KiCad 3D render to fully soldered PCB from Shenzhen</Caption>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/Image__28_.jpeg"
                alt="SMD soldering session"
              />
              <PhotoWrap
                src="/images/chessboard/1779616865370_image.png"
                alt="PCB fitted into laser-cut frame"
              />
            </div>
            <Caption>
              Hand-soldering SMD components, then PCB fitted perfectly into laser-cut wood frame
            </Caption>
            <VideoWrap
              src="/images/chessboard/halleffectsensortest.mp4"
              label="Hall Sensor Test Custom PCB"
            />
          </div>
        </div>

        {/* Phase 05 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 05
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              SLA Chess<br /><em>Pieces</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We 3D-printed a full Harry Potter-themed chess set using SLA resin printing on
              an ELEGOO printer, UV-cured them on a Mercury Plus curing station,
              post-processed and assembled by hand with super glue, then spray-painted one
              full set white and one set black, matching the electromagnet&apos;s polarity
              color coding so the board can distinguish pieces by color.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/chesspieces_SLA.png"
                alt="HP chess pieces in UltiMaker Cura"
              />
              <PhotoWrap
                src="/images/chessboard/1779617010235_image.png"
                alt="UV curing station"
              />
            </div>
            <Caption>
              Sliced in UltiMaker Cura, then UV curing on the ELEGOO Mercury Plus station
            </Caption>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/IMG_5902_2.jpg"
                alt="Late night post-processing"
              />
              <PhotoWrap
                src="/images/chessboard/Image__33_.jpeg"
                alt="Finished white and black pieces"
              />
            </div>
            <Caption>Late-night post-processing, then finished white vs black pieces</Caption>
          </div>
        </div>

        {/* Phase 06 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 06
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Web<br /><em>Interface</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              Built entirely by me from scratch. A cinematic landing page with a 3D animated
              knight video, and a full game interface with an interactive chessboard,
              real-time WebSocket sync to the physical board, legal move highlighting (blue
              for moves, red for captures), captured pieces tracking, per-player timers, game
              status detection, and Stockfish 18 AI running entirely in the browser as a Web
              Worker. Two browsers on the same LAN stay in sync in real time. A voice move
              at the board reflects on every connected screen instantly.
            </p>
            <div className="border border-neutral-200 bg-white rounded-sm px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
              <p className="font-body text-body text-neutral-500">
                <strong className="text-black">Try it live.</strong> The web interface is
                deployed and working.
              </p>
              <a
                href="https://515-wizard-chess.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-widest uppercase bg-black text-white px-5 py-2.5 hover:bg-neutral-700 transition-colors flex-shrink-0"
              >
                Open →
              </a>
            </div>
          </div>
        </div>

        {/* Phase 07 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 07
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              T-Mobile<br /><em>Demo Day</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              We presented our full integrated system to the T-Mobile accessibility team,
              demonstrating end-to-end piece movement, voice control, and the web interface
              live. The board worked, but the demo surfaced three real engineering problems
              we needed to solve before final delivery.
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  num: "01",
                  issue: "Chess pieces too heavy.",
                  detail:
                    "The SLA resin pieces were solid and dense. Under the electromagnet's pull they dragged correctly, but the extra mass caused some pieces to get stuck mid-move on the gantry rail.",
                },
                {
                  num: "02",
                  issue: "Top layer sagged in the middle.",
                  detail:
                    "With the PCB sandwiched between enclosure layers, the bottom of the top layer was too thin and flexed downward at the center, increasing the gap between electromagnet and board surface right where accuracy mattered most.",
                },
                {
                  num: "03",
                  issue: "No way to verify chess piece location.",
                  detail:
                    "The Hall effect sensors were designed into the PCB but hadn't yet been integrated into the live board. Without confirmation that pieces were actually sitting on the right squares, the system was running blind.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 items-start border border-neutral-200 rounded-sm px-5 py-4"
                >
                  <span className="font-sans font-light text-[1.4rem] text-neutral-300 leading-none flex-shrink-0 w-8 pt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-[13px] mb-1">{item.issue}</p>
                    <p className="font-body text-body text-neutral-500 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <PhotoWrap
              src="/images/chessboard/Image__24_.jpeg"
              alt="Team at T-Mobile demo day"
            />
            <Caption>&nbsp;</Caption>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/Image__18_.jpeg"
                alt="Team presenting the board"
              />
              <PhotoWrap
                src="/images/chessboard/Image__20_.jpeg"
                alt="Presenting to T-Mobile mentor"
              />
            </div>
            <Caption>
              T-Mobile sponsor demo, board working, three engineering issues identified
            </Caption>
          </div>
        </div>

        {/* Phase 08 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 08
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Limit Switches<br /><em>&amp; Homing</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
              After the T-Mobile demo we added mechanical limit switches to the CoreXY
              gantry. The board moved pieces reliably during the presentation, but we had no
              reliable way to know where the magnet carriage actually was, especially on
              startup or after a long session of moves.
            </p>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
              The main reason is homing. When the chessboard first turns on, the system does
              not automatically know where the magnet carriage is. The limit switch lets the
              carriage move to a known edge position, usually the home corner, so the
              firmware can set that point as X = 0, Y = 0 before any move is sent.
            </p>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              It is also important for accuracy. XY systems like ours use stepper motors, and
              stepper motors do not know their true position. They only count steps. If a
              motor skips steps, slips, or gets blocked by friction, the software position can
              drift from reality. Limit switches give the firmware a physical reference to
              recalibrate against, driving slowly to each edge, backing off, and re-measuring
              travel so the board can recover without manual intervention.
            </p>

            <div className="bg-neutral-950 rounded-xl px-7 py-6 mb-6 text-white">
              <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 mb-4">
                HOW HOMING WORKS
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Six switches across both axes",
                    body: "One switch per X end, plus two per Y end to cover the dual-rail gantry. Each switch is wired active-low with a pull-up resistor.",
                  },
                  {
                    label: "Startup calibration sequence",
                    body: "On boot the carriage homes to -X, then +X, then -Y, then +Y, backing off slightly after each hit so the switch releases before the next move.",
                  },
                  {
                    label: "Runtime safety stop",
                    body: "During normal moves the firmware checks switches in the direction of travel and stops immediately if a limit is hit unexpectedly, then triggers a full recalibration.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-semibold text-[13px] text-white mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-[13px] text-neutral-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/limit_switch_x.jpg"
                alt="X-axis limit switch mounted at the home edge"
              />
              <PhotoWrap
                src="/images/chessboard/limit_switch_y.jpg"
                alt="Y-axis limit switches mounted on the gantry rails"
              />
            </div>
            <Caption>
              X-axis limit switch at home edge and Y-axis limit switches on the dual-rail gantry
            </Caption>
          </div>
        </div>

        {/* Phase 09 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16 border-b border-neutral-200">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 09
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Enclosure<br /><em>Engineering</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-4">
              After the T-Mobile demo we addressed all three enclosure issues and added limit
              switch homing before building the final enclosure. The electromagnet imposes a
              hard constraint: the total top-layer thickness must stay at or under 11 mm for
              the magnetic field to reliably move pieces through the surface. Every design
              decision flowed from that number.
            </p>

            <div className="bg-neutral-950 rounded-xl px-7 py-6 mb-6 text-white">
              <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 mb-4">
                HOW WE FIXED EACH ISSUE
              </p>
              <div className="space-y-4">
                {[
                  {
                    label: "Lighter pieces",
                    body: "Hollowed out the interior of each chess piece to dramatically cut weight while keeping the base magnet in place. The electromagnet now slides pieces cleanly without sticking or stalling.",
                  },
                  {
                    label: "Sagging solved with a torsion layer",
                    body: "Rather than using a thick 1/4\" bottom layer (which would eat into our 11 mm budget), I investigated and found we could use a thinner 1/8\" bottom layer plus a 1.5 mm torsion sheet on top. The torsion layer distributes load across the PCB sandwich and prevents center sag even when only screwed down at the four corners.",
                  },
                  {
                    label: "Eliminated a full top layer",
                    body: "Instead of laying a separate top sheet and applying chess square decals on top of it, we cut the chess board squares directly out of the PCB layer itself. This removed an entire layer of material and brought our total stack to 9.25 mm, comfortably within the 11 mm limit.",
                  },
                  {
                    label: "Hall effect sensor integration",
                    body: "We wired up the A1302xUA Hall sensors already on the PCBs, tested all 64 sensors individually, confirmed detection, and merged the firmware so piece position is now verified after every move in real time.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                    <div>
                      <p className="font-sans font-semibold text-[13px] text-white mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-body text-[13px] text-neutral-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-neutral-700 flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-500">
                  Total top-layer thickness achieved
                </span>
                <span className="font-sans font-bold text-white text-xl">9.25 mm</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-green-400">
                  ✓ within 11 mm limit
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/hardware_test.jpg"
                alt="Engineer testing final hardware"
              />
              <PhotoWrap
                src="/images/chessboard/pcb_mount.jpg"
                alt="Four PCB boards mounted on bottom top layer"
              />
            </div>
            <Caption>
              Final hardware validation before enclosure, then four PCB boards mounted on the bottom top layer
            </Caption>
            <PhotoWrap
              src="/images/chessboard/team_assembly.jpg"
              alt="Team integrating hardware and enclosure"
            />
            <Caption>Full team integrating hardware subsystems and enclosure layers</Caption>
          </div>
        </div>

        {/* Phase 10 */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 py-16">
          <div className="md:sticky top-24 self-start">
            <p className="font-mono text-[9px] text-neutral-400 tracking-widest mb-2">
              PHASE 10
            </p>
            <h3 className="font-sans font-semibold text-[1.4rem] leading-snug">
              Final<br /><em>Enclosure</em>
            </h3>
          </div>
          <div>
            <p className="font-body text-body text-neutral-500 leading-relaxed mb-6">
              With the engineering constraints solved, we designed and built the final
              enclosure from scratch. We went with a wooden theme. The goal was for the
              board to feel like an antique chess set, not a prototype. We used a CNC
              machine to precision-cut the top layers, a table saw for the structural
              wood stock, hand-applied wood stain and wax finish, and a laser cutter for
              the decorative emblems. Everything was designed in Fusion 360 first.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-200 rounded-sm overflow-hidden divide-x divide-neutral-200 mb-6">
              {[
                { tool: "CNC", desc: "Precision cuts for top layers" },
                { tool: "Table saw", desc: "Structural wood stock" },
                { tool: "Wood stain + wax", desc: "Hand-applied finish" },
                { tool: "Laser cutter", desc: "Decorative emblems" },
              ].map((t, i) => (
                <div key={i} className="p-4 bg-neutral-50">
                  <p className="font-sans font-semibold text-[13px] mb-1">{t.tool}</p>
                  <p className="font-mono text-[9px] tracking-wide text-neutral-400">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/fusion_enclosure.png"
                alt="Fusion 360 enclosure design"
                aspect="4/3"
              />
              <PhotoWrap
                src="/images/chessboard/cnc_work.jpg"
                alt="CNC machine cutting top layer"
                aspect="4/3"
              />
              <PhotoWrap
                src="/images/chessboard/cnc_cutting.jpg"
                alt="CNC machine cutting the enclosure panels"
                aspect="4/3"
              />
            </div>
            <Caption>Fusion 360 enclosure design, then CNC cutting the top layer</Caption>
            <div className="grid grid-cols-2 gap-3 mb-2">
              <PhotoWrap
                src="/images/chessboard/finished_enclosure.jpg"
                alt="Finished wooden enclosure"
                aspect="1/1"
              />
              <PhotoWrap
                src="/images/chessboard/mentor_photo.jpg"
                alt="Team with T-Mobile mentor at final demo"
                aspect="1/1"
              />
            </div>
            <Caption>Finished enclosure with wood stain and wax, then final demo with T-Mobile mentor</Caption>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="px-6 md:px-16 py-24">
        <SectionLabel>Challenges &amp; How We Addressed Them</SectionLabel>

        <div className="py-10 border-b border-neutral-200">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <div className="flex gap-6 items-start mb-5">
                <span className="font-sans font-light text-[2.5rem] text-neutral-300 leading-none flex-shrink-0 w-12">
                  01
                </span>
                <div className="pt-2">
                  <h3 className="font-sans font-medium text-[15px] leading-snug">
                    Piece Location Verification
                  </h3>
                  <h3 className="font-sans font-light italic text-[15px] text-neutral-500">
                    &ldquo;How do we know the board is in the right state?&rdquo;
                  </h3>
                </div>
              </div>
              <div className="pl-[4.5rem] space-y-4">
                <p className="font-body text-body text-neutral-500 leading-relaxed">
                  This was our biggest and most fundamental challenge. Chess pieces are physical
                  objects. They can drift, stick to each other due to residual magnetism, get
                  dragged slightly off-center, or fail to land exactly on target. Once the board
                  state drifts even slightly from what the software expects, every subsequent move
                  compounds the error. Within a few moves the whole board could be in complete
                  disarray.
                </p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">
                  We researched several approaches: computer vision (too complex,
                  lighting-dependent), pressure sensors (not sensitive enough for light resin
                  pieces), and capacitive sensing (too much interference from wood). We landed on
                  Hall effect sensors: one A1302xUA sensor per square, embedded in a custom PCB
                  beneath the board. Since every piece has a magnet in its base, each sensor
                  detects whether a piece is sitting on its square and reports back to the
                  firmware, closing the loop between what the system thinks is on the board and
                  what is actually there.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3 h-[min(480px,52vh)] w-full">
              <PhotoWrap
                src="/images/chessboard/piece_location_verification_1.jpg"
                alt="Hall effect sensor PCB for piece location verification"
                fill
                fit="contain"
                className="h-full"
              />
              <PhotoWrap
                src="/images/chessboard/piece_location_verification_2.jpg"
                alt="Chessboard with Hall sensors verifying piece placement"
                fill
                fit="contain"
                className="h-full"
              />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <div className="flex gap-6 items-start mb-5">
                <span className="font-sans font-light text-[2.5rem] text-neutral-300 leading-none flex-shrink-0 w-12">
                  02
                </span>
                <div className="pt-2">
                  <h3 className="font-sans font-medium text-[15px] leading-snug">
                    Accessibility
                  </h3>
                  <h3 className="font-sans font-light italic text-[15px] text-neutral-500">
                    &ldquo;What does truly accessible chess actually look like?&rdquo;
                  </h3>
                </div>
              </div>
              <div className="pl-[4.5rem] space-y-4">
                <p className="font-body text-body text-neutral-500 leading-relaxed">
                  This was the core of the entire project and the most layered challenge we faced.
                  Our T-Mobile mentor pushed us early to think beyond &ldquo;the board moves
                  pieces.&rdquo; The question was what a truly accessible chess experience looks
                  like for someone with limited hand mobility, limited vision, or both. We
                  identified three problems: players needed a way to input moves without touching
                  the board, they needed feedback confirming the move happened correctly, and they
                  needed to understand the board state at a glance.
                </p>
                <p className="font-body text-body text-neutral-500 leading-relaxed">
                  We addressed each with a different layer: voice recognition via OpenAI Whisper
                  for input (no physical contact required), WS2812B LEDs per square for in-board
                  confirmation feedback, and the real-time web interface for complete board
                  awareness from any device. Together these three layers mean a player with limited
                  hand mobility can play a full game of physical chess speaking their moves,
                  watching the board respond, and following the game on screen without assistance
                  from another person.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[min(480px,52vh)] w-full">
              <VideoWrap
                src="/images/chessboard/accessibility_challenge.mp4"
                label="Accessibility Demo"
                fill
                fit="contain"
                className="h-full mb-0"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL HIGHLIGHTS ── */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50">
        <SectionLabel>Technical Highlights</SectionLabel>

        <div className="grid grid-cols-2 md:grid-cols-3 border border-neutral-200 divide-x divide-y divide-neutral-200 rounded-sm overflow-hidden">
          {[
            {
              icon: FlaskConical,
              num: "52",
              title: "Unit Tests",
              desc: "Written for embedded C++ firmware using the Unity framework chess engine and move planner fully tested independently of hardware.",
            },
            {
              icon: Waypoints,
              num: null,
              title: "Dijkstra Pathfinding",
              desc: "Runs on the Pico to route the magnet carriage around blocking pieces, with recursive blocker parking up to 3 levels deep.",
            },
            {
              icon: Wifi,
              num: null,
              title: "ESP-NOW Wireless",
              desc: "Peer-to-peer between two microcontrollers with automatic channel scanning and hopping. No router required.",
            },
            {
              icon: Lock,
              num: null,
              title: "No Optimistic UI",
              desc: "The web interface only updates when the physical move is confirmed complete. The digital board always reflects physical reality.",
            },
            {
              icon: CircuitBoard,
              num: null,
              title: "Custom PCB",
              desc: "Designed in KiCad, fabricated in Shenzhen, hand-soldered by the team. 64 Hall sensors + 64 RGB LEDs across four 2-layer boards.",
            },
            {
              icon: Bot,
              num: null,
              title: "Stockfish 18 AI",
              desc: "Runs as a WebAssembly Web Worker entirely in the browser. No server required. Either player can be toggled to AI mid-game.",
            },
          ].map((h, i) => (
            <div key={i} className="bg-white p-6 hover:bg-neutral-50 transition-colors">
              <h.icon className="w-6 h-6 text-black mb-3" strokeWidth={1.5} />
              {h.num && (
                <p className="font-sans font-light text-[2.2rem] leading-none text-black mb-1">
                  {h.num}
                </p>
              )}
              <h4 className="font-sans font-semibold text-base mb-2">{h.title}</h4>
              <p className="font-body text-body text-neutral-500 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <SectionLabel>Tech Stack</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                group: "Web Interface",
                tags: [
                  ["Next.js 16", true], ["React 19", true], ["TypeScript", false],
                  ["Tailwind CSS v4", false], ["Stockfish 18", false], ["WebSocket", false],
                ],
              },
              {
                group: "Firmware",
                tags: [
                  ["C++", true], ["PlatformIO", false], ["Raspberry Pi Pico", false],
                  ["ESP32-S3", false], ["ESP-NOW", false], ["OpenAI Whisper", false],
                ],
              },
              {
                group: "Hardware & Fabrication",
                tags: [
                  ["KiCad", true], ["Fusion 360", true], ["SLA Resin Printing", false],
                  ["Laser Cutting", false], ["Shenzhen PCB Fab", false], ["SMD Reflow", false],
                ],
              },
              {
                group: "Testing & Protocol",
                tags: [
                  ["Unity Test Framework", true], ["Bresenham Algorithm", false],
                  ["Dijkstra Pathfinding", false], ["CoreXY Kinematics", false],
                ],
              },
            ].map((g, i) => (
              <div key={i}>
                <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 mb-4 pb-3 border-b border-neutral-200">
                  {g.group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.tags.map(([name, highlight], j) => (
                    <span
                      key={j}
                      className={`font-mono text-[10px] px-3 py-1.5 border rounded-sm transition-colors ${
                        highlight
                          ? "border-black text-black"
                          : "border-neutral-200 text-neutral-500 hover:border-neutral-400"
                      }`}
                    >
                      {name as string}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="px-6 md:px-16 py-24">
        <SectionLabel>Team</SectionLabel>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-3 border border-neutral-200 bg-neutral-50 rounded-sm p-5 flex items-center gap-5">
            <div className="w-11 h-11 rounded-full bg-pink-50 flex items-center justify-center font-mono text-[10px] font-bold text-pink-500 flex-shrink-0">
              TMO
            </div>
            <div>
              <p className="font-sans font-semibold text-base">
                T-Mobile Accessibility Team
              </p>
              <p className="font-body text-body text-neutral-500 mt-0.5">
                Industry Sponsor &amp; Accessibility Mentor
              </p>
              <span className="inline-block mt-2 font-mono text-[9px] tracking-widest uppercase border border-pink-300 text-pink-500 px-2 py-0.5">
                T-Mobile Sponsored
              </span>
            </div>
          </div>
          {[
            {
              initials: "YL",
              name: "Youngpyung Lee",
              role: "Technical PM · Web Interface · XY Motion System · T-Mobile Liaison · Budget",
              you: true,
            },
            {
              initials: "SJ",
              name: "Su Hyun Jung",
              role: "Product Designer",
              you: false,
            },
            {
              initials: "KT",
              name: "Keochonodom Taing",
              role: "Software & Hardware Engineer (SDE)",
              you: false,
            },
          ].map((m, i) => (
            <div
              key={i}
              className={`border rounded-sm p-5 ${
                m.you
                  ? "border-black bg-neutral-50"
                  : "border-neutral-200 hover:border-neutral-400 transition-colors"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-[10px] font-bold mb-4 ${
                  m.you ? "bg-black text-white" : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {m.initials}
              </div>
              <p className="font-sans font-semibold text-base mb-1">{m.name}</p>
              <p className="font-body text-body text-neutral-500 leading-relaxed">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEARNINGS ── */}
      <section className="px-6 md:px-16 py-24 bg-neutral-50">
        <SectionLabel>Learnings &amp; Impact</SectionLabel>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Wrench,
              title: "Hardware and software are inseparable.",
              body: "Every software decision had physical consequences, and every hardware constraint shaped the code. Writing a chess engine that runs on a microcontroller while also routing a physical magnet around real pieces taught me to think in both worlds simultaneously.",
            },
            {
              icon: Accessibility,
              title: "Accessibility is a design constraint, not a feature.",
              body: "Working with T-Mobile's accessibility team reframed how I think about inclusive design. The best accessibility decisions weren't add-ons. They were fundamental architecture choices that made the whole system better for everyone.",
            },
            {
              icon: Handshake,
              title: "PMs who build earn more trust.",
              body: "Being hands-on in the codebase and on the workbench gave me credibility with my teammates that purely managerial coordination never would have. I could make better product decisions because I understood the technical tradeoffs from the inside.",
            },
          ].map((l, i) => (
            <div key={i} className="pt-6 border-t border-neutral-200">
              <l.icon className="w-7 h-7 text-black mb-4" strokeWidth={1.5} />
              <h4 className="font-sans font-semibold text-base mb-3">{l.title}</h4>
              <p className="font-body text-body text-neutral-500 leading-relaxed">{l.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S NEXT ── */}
      <section className="px-6 md:px-16 py-20 border-t border-neutral-200">
        <SectionLabel>What&apos;s Next</SectionLabel>
        <p className="font-body text-body text-neutral-500 leading-relaxed max-w-2xl mb-8">
          The course project is complete and our T-Mobile mentor invited the team to continue
          development over the summer in partnership with the T-Mobile accessibility team,
          moving the board from a working prototype toward a product real users can test.
        </p>
        <div className="flex flex-col gap-3 max-w-xl">
          {[
            "Formal user testing sessions with players who have hand and motor disabilities",
            "Expand accessibility features based on T-Mobile accessibility team input",
            "Remote play mode: two players in different locations via web interface",
            "Improve firmware reliability for real-time validation across all 64 sensor squares",
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-center border border-neutral-200 px-5 py-4 rounded-sm"
            >
              <span className="w-2 h-2 rounded-full bg-black flex-shrink-0 animate-pulse" />
              <p className="font-body text-body text-neutral-500">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="wide" />
    </>
  );
}
