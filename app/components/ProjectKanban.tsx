type KanbanCard = {
  id: string;
  title: string;
  owner: string;
  window: string;
  tag: string;
};

type KanbanColumn = {
  title: string;
  color: string;
  cards: KanbanCard[];
};

const columns: KanbanColumn[] = [
  {
    title: "Backlog",
    color: "#fca5a5",
    cards: [
      {
        id: "WC-014",
        title: "Remote play over web for two locations",
        owner: "YL",
        window: "Summer",
        tag: "Product",
      },
      {
        id: "WC-015",
        title: "User testing with motor accessibility participants",
        owner: "YL",
        window: "Jul to Aug",
        tag: "Research",
      },
    ],
  },
  {
    title: "Planned",
    color: "#93c5fd",
    cards: [
      {
        id: "WC-011",
        title: "Firmware validation across all 64 Hall sensors",
        owner: "KT",
        window: "Jun W2",
        tag: "Firmware",
      },
      {
        id: "WC-012",
        title: "Summer sprint plan with T-Mobile accessibility team",
        owner: "YL",
        window: "Jun W4",
        tag: "PM",
      },
    ],
  },
  {
    title: "In Progress",
    color: "#fdba74",
    cards: [
      {
        id: "WC-009",
        title: "Limit switch homing and recalibration sequence",
        owner: "KT",
        window: "Jun W1 to W3",
        tag: "Firmware",
      },
      {
        id: "WC-010",
        title: "Final wooden enclosure and CNC top layers",
        owner: "SJ",
        window: "Jun W2 to Jul W1",
        tag: "Hardware",
      },
      {
        id: "WC-013",
        title: "Attack animations and game mode UI polish",
        owner: "YL",
        window: "Jun to Jul",
        tag: "Software",
      },
    ],
  },
  {
    title: "Review",
    color: "#f9a8d4",
    cards: [
      {
        id: "WC-008",
        title: "T-Mobile sponsor demo and feedback synthesis",
        owner: "YL",
        window: "May W4",
        tag: "Sponsor",
      },
      {
        id: "WC-007",
        title: "Enclosure thickness budget (11 mm magnet constraint)",
        owner: "YL",
        window: "May W3",
        tag: "Hardware",
      },
    ],
  },
  {
    title: "Done",
    color: "#86efac",
    cards: [
      {
        id: "WC-001",
        title: "Project kickoff, charter, and role assignment",
        owner: "YL",
        window: "Mar W1",
        tag: "PM",
      },
      {
        id: "WC-002",
        title: "T-Mobile sponsor alignment and accessibility brief",
        owner: "YL",
        window: "Mar W2",
        tag: "Sponsor",
      },
      {
        id: "WC-003",
        title: "CoreXY gantry prototype and motion firmware",
        owner: "KT",
        window: "Apr W1 to W3",
        tag: "Hardware",
      },
      {
        id: "WC-004",
        title: "Electromagnet polarity switching and plywood test",
        owner: "KT",
        window: "Apr W3",
        tag: "Hardware",
      },
      {
        id: "WC-005",
        title: "Custom PCB design (64 sensors, 4 boards)",
        owner: "KT",
        window: "Apr W4 to May W2",
        tag: "Hardware",
      },
      {
        id: "WC-006",
        title: "Next.js web UI, WebSocket sync, Stockfish AI",
        owner: "YL",
        window: "May W1 to W3",
        tag: "Software",
      },
    ],
  },
];

function KanbanCardView({ card }: { card: KanbanCard }) {
  return (
    <div className="rounded-sm border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
          {card.id}
        </p>
        <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded-sm shrink-0">
          {card.tag}
        </span>
      </div>
      <p className="font-sans text-[13px] leading-snug text-neutral-800 mb-3">{card.title}</p>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] tracking-wide text-neutral-400">{card.window}</span>
        <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono text-[9px] flex items-center justify-center">
          {card.owner}
        </span>
      </div>
    </div>
  );
}

export function ProjectKanban() {
  return (
    <div className="border border-neutral-200 rounded-sm overflow-hidden bg-neutral-50">
      <div className="px-5 py-4 border-b border-neutral-200 bg-white flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 mb-1">
            Delivery Board
          </p>
          <p className="font-sans text-[15px] font-medium text-black">
            Wizard Chess program timeline
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Mar 2026", "Apr", "May", "Jun", "Summer"].map((m) => (
            <span
              key={m}
              className="font-mono text-[9px] tracking-widest uppercase border border-neutral-200 bg-neutral-50 text-neutral-500 px-2.5 py-1 rounded-sm"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto p-4">
        <div className="flex gap-3 min-w-[980px]">
          {columns.map((column) => (
            <div key={column.title} className="flex-1 min-w-[190px]">
              <div
                className="rounded-sm px-3 py-2 mb-3 border border-neutral-200"
                style={{ backgroundColor: `${column.color}33` }}
              >
                <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-700">
                  {column.title}{" "}
                  <span className="text-neutral-500">({column.cards.length})</span>
                </p>
              </div>
              <div className="space-y-2">
                {column.cards.map((card) => (
                  <KanbanCardView key={card.id} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-3 border-t border-neutral-200 bg-white flex flex-wrap gap-x-6 gap-y-1">
        <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
          PM: YL
        </p>
        <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
          Engineering: KT
        </p>
        <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
          Design: SJ
        </p>
        <p className="font-mono text-[9px] tracking-widest uppercase text-neutral-400">
          Sponsor: T-Mobile
        </p>
      </div>
    </div>
  );
}
