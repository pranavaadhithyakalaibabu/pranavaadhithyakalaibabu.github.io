import { useState, useEffect, useRef } from "react";

const NAME = "pranav aadhithya kalaibabu";

const EXPERIENCE = [
  {
    role: "product manager intern",
    org: "torc robotics",
    dates: "may–aug 2025",
    detail: null,
    href: "https://torc.ai",
  },
  {
    role: "product manager",
    org: "comcast",
    dates: "jan 2023–aug 2024",
    detail: null,
    href: "https://www.comcast.com",
  },
];

const STRATEGY_PROJECTS = [
  {
    title: "pureflow",
    detail:
      "faucet-mounted filtration system for baltimore's tap water — led product strategy from research to go-to-market, cut per-unit cost 20%.",
    href: "https://docs.google.com/presentation/d/1lsHLDV1F66tRWesHDtCo7ZodBB_xHDaV/edit?usp=share_link&ouid=114016823942437408821&rtpof=true&sd=true",
  },
  {
    title: "catalyst community",
    detail:
      "sso implementation roadmap — vendor evaluation, cost modeling, 32% efficiency lift, 25% reduction in auth-related security risk.",
    href: "https://docs.google.com/presentation/d/1YayUtFax3o841jgMCDZdw2Lst0gAR6yO/edit?usp=share_link&ouid=114016823942437408821&rtpof=true&sd=true",
  },
  {
    title: "johns hopkins hospital",
    detail:
      "diagnosed execution failures in a hospital discharge protocol via direct OR observation and stakeholder interviews, delivered 8 prioritized recommendations.",
    href: "https://docs.google.com/presentation/d/1tuKOUy55wathrZtcrSOEe5JBkMszrf4U/edit?usp=share_link&ouid=114016823942437408821&rtpof=true&sd=true",
  },
  {
    title: "inl portugal",
    detail:
      "built a 4-criteria decision framework to select target industries for a novel VOC sensor, delivered a 30-page commercialization strategy.",
    href: "https://drive.google.com/file/d/1lKkPKq0P_FDXI9tMMEOLLln9HWvAHwe6/view?usp=share_link",
  },
];

const BUILT_PROJECTS = [
  {
    title: "insight stream",
    detail:
      "solo-built 6-node langgraph rag pipeline, 98% extraction precision, live demo + full doc suite (prd, model card, ethics charter).",
    href: "https://github.com/pranavaadhithyakalaibabu/InsightStream-AI",
  },
  {
    title: "daystack",
    detail:
      "AI day-planning app. dump your morning thoughts, gemini structures a plan with priorities and time estimates, work through tasks, get an end-of-day review.",
    href: "https://github.com/pranavaadhithyakalaibabu/daystack",
  },
];

const EDUCATION = [
  { degree: "m.s. engineering management", school: "johns hopkins university", dates: "2024–25" },
  { degree: "b.e. electronics & communication", school: "anna university", dates: "2019–23" },
];

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.style.backgroundColor = dark ? "#0D0D0D" : "#FAFAF8";
  }, [dark]);
  return [dark, setDark];
}

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className={`fixed top-6 right-6 md:top-10 md:right-12 w-9 h-9 rounded-full flex items-center justify-center transition-colors z-20 ${
        dark ? "bg-[#1A1A18] text-ink" : "bg-[#EFEEE9] text-ink"
      }`}
    >
      {dark ? "☾" : "☀"}
    </button>
  );
}

function TypingName() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const idxRef = useRef(0);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setTyped(NAME);
      return;
    }
    const interval = setInterval(() => {
      idxRef.current += 1;
      setTyped(NAME.slice(0, idxRef.current));
      if (idxRef.current >= NAME.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 lowercase whitespace-nowrap">
      {typed}
      <span
        className={`inline-block w-2 ml-1 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}
        style={{ borderRight: "3px solid currentColor", height: "0.85em" }}
      />
    </h1>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl font-semibold mb-4 mt-14 first:mt-0">{children}</h2>
  );
}

function LinkRow({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 decoration-1 text-ink decoration-line hover:decoration-ink"
    >
      {label}
    </a>
  );
}

function ProjectEntry({ title, detail, href }) {
  return (
    <p className="leading-relaxed mb-3">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-4 decoration-1 decoration-line hover:decoration-ink"
        >
          {title}
        </a>
      ) : (
        <span className="text-ink">{title}</span>
      )}
      <span className="text-muted"> — {detail}</span>
    </p>
  );
}

function StatusBar({ dark }) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-20 border-t ${
        dark ? "bg-[#0D0D0D] border-line text-muted" : "bg-[#FAFAF8] border-[#D8D6CE] text-[#6B6B64]"
      } text-xs md:text-sm`}
    >
      <div className="max-w-3xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
        <span>
          <span className="text-accent">●</span> OPEN TO: relocation
        </span>
        <span>STATUS: actively interviewing</span>
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useTheme();

  const bg = dark ? "bg-bg" : "bg-[#FAFAF8]";
  const text = dark ? "text-ink" : "text-[#1A1A18]";
  const mutedText = dark ? "text-muted" : "text-[#6B6B64]";
  const lineColor = dark ? "border-line" : "border-[#D8D6CE]";

  return (
    <div className={`min-h-screen ${bg} ${text} font-mono transition-colors duration-200 pb-14`}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <main className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-[15px] md:text-base">
        {/* Header */}
        <TypingName />

        <p className={`${mutedText} mb-1`}>📍 san francisco bay area, ca</p>

        <p className="mb-10">
          <span className="font-semibold">tracks: </span>
          <span className={mutedText}>product management, technical program management, AI/ML</span>
        </p>

        <p className="leading-relaxed mb-5">
          I'm Pranav, and I've built AI products at 100M+ user scale, shipped
          autonomous vehicle tooling, and led GTM strategy for deep tech
          ventures. I thrive on turning ambiguous problems into shipped
          products, whether that means running 20+ stakeholder interviews or
          building the pipeline myself.
        </p>

        <p className="leading-relaxed mb-10">
          I'm currently open to Product Manager and Technical Program Manager
          roles. Previously, I worked as a Product Manager at{" "}
          <LinkRow href="https://www.comcast.com" label="comcast" /> on AI/ML
          features at scale, and as a Technical Program Manager at{" "}
          <LinkRow href="https://torc.ai" label="torc robotics" /> on
          autonomous vehicle systems. I hold an M.S. in Engineering
          Management from{" "}
          <LinkRow href="https://www.jhu.edu" label="johns hopkins" />.
        </p>

        {/* Experience */}
        <SectionHeading>experience</SectionHeading>
        {EXPERIENCE.map((job) => (
          <div key={job.org} className="mb-4">
            <p className="leading-relaxed">
              {job.href ? (
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline underline-offset-4 decoration-1 decoration-line hover:decoration-ink"
                >
                  {job.org}
                </a>
              ) : (
                <span className="font-semibold">{job.org}</span>
              )}
              <span className={mutedText}> — {job.role} ({job.dates})</span>
            </p>
            {job.detail && (
              <p className={`${mutedText} text-sm leading-relaxed mt-1 max-w-2xl`}>
                {job.detail}
              </p>
            )}
          </div>
        ))}

        {/* Projects */}
        <SectionHeading>projects</SectionHeading>
        {STRATEGY_PROJECTS.map((p) => (
          <ProjectEntry key={p.title} {...p} />
        ))}

        {/* Product - Build & Shipped */}
        <SectionHeading>Product - Build & Shipped</SectionHeading>
        {BUILT_PROJECTS.map((p) => (
          <ProjectEntry key={p.title} {...p} />
        ))}
        <p className={`${mutedText} text-sm mt-2`}>
          read more on <LinkRow href="https://github.com/pranavaadhithyakalaibabu" label="github" />
        </p>

        {/* Education */}
        <SectionHeading>education</SectionHeading>
        {EDUCATION.map((e) => (
          <p key={e.school} className="leading-relaxed mb-2">
            <span className="font-semibold">{e.degree}</span>
            <span className={mutedText}> at {e.school} ({e.dates})</span>
          </p>
        ))}

        {/* Contact */}
        <div className={`flex items-center gap-6 mt-16 pt-8 border-t ${lineColor} text-sm flex-wrap`}>
          <LinkRow href="https://www.linkedin.com/in/pranavaadhithyakalaibabu/" label="linkedin" />
          <LinkRow href="https://github.com/pranavaadhithyakalaibabu" label="github" />
          <LinkRow href="mailto:aadhityapranav007@gmail.com" label="mail" />
        </div>
      </main>

      <StatusBar dark={dark} />
    </div>
  );
}
