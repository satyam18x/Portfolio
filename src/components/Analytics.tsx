"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import {
  Flame,
  Trophy,
  Calendar,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

/* ============================================================
   Types
   ============================================================ */

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  streak: number;
  totalActiveDays: number;
  submissionCalendar: Record<string, number>;
}

interface GitHubStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  bestDay: { date: string; count: number };
  activeDays: number;
}

interface TooltipState {
  text: string;
  x: number;
  y: number;
}

/* ============================================================
   Constants
   ============================================================ */

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const GITHUB_COLORS = [
  "rgba(6, 182, 212, 0.06)",
  "rgba(6, 182, 212, 0.25)",
  "rgba(6, 182, 212, 0.45)",
  "rgba(6, 182, 212, 0.7)",
  "rgba(6, 182, 212, 0.95)",
];

const LEETCODE_COLORS = [
  "rgba(255, 180, 84, 0.06)",
  "rgba(255, 180, 84, 0.25)",
  "rgba(255, 180, 84, 0.45)",
  "rgba(255, 180, 84, 0.7)",
  "rgba(255, 180, 84, 0.95)",
];

const DIFFICULTY_COLORS = {
  easy: "#00b8a3",
  medium: "#ffc01e",
  hard: "#ff375f",
};

/* ============================================================
   Animation Variants
   ============================================================ */

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ============================================================
   Helper Functions
   ============================================================ */

function computeGitHubStats(contributions: ContributionDay[]): GitHubStats {
  const sorted = [...contributions].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  let total = 0;
  let longest = 0;
  let tempStreak = 0;
  let bestDay = { date: "", count: 0 };
  let activeDays = 0;

  for (const day of sorted) {
    total += day.count;
    if (day.count > 0) {
      activeDays++;
      tempStreak++;
      longest = Math.max(longest, tempStreak);
      if (day.count > bestDay.count)
        bestDay = { date: day.date, count: day.count };
    } else {
      tempStreak = 0;
    }
  }

  let current = 0;
  const rev = [...sorted].reverse();
  const today = new Date().toISOString().split("T")[0];
  let started = false;

  for (const day of rev) {
    if (!started && day.count === 0) {
      if (day.date === today) continue;
      break;
    }
    if (day.count > 0) {
      started = true;
      current++;
    } else {
      break;
    }
  }

  return {
    totalContributions: total,
    currentStreak: current,
    longestStreak: longest,
    bestDay,
    activeDays,
  };
}

function processLeetCodeCalendar(
  calendar: Record<string, number>
): ContributionDay[] {
  const dateMap: Record<string, number> = {};
  for (const [ts, count] of Object.entries(calendar)) {
    const d = new Date(parseInt(ts) * 1000);
    const key = d.toISOString().split("T")[0];
    dateMap[key] = (dateMap[key] || 0) + count;
  }

  const today = new Date();
  const counts = Object.values(dateMap).filter((c) => c > 0);
  const max = counts.length ? Math.max(...counts) : 1;
  const days: ContributionDay[] = [];

  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    const count = dateMap[key] || 0;
    const level =
      count === 0
        ? 0
        : count <= max * 0.25
        ? 1
        : count <= max * 0.5
        ? 2
        : count <= max * 0.75
        ? 3
        : 4;
    days.push({ date: key, count, level });
  }

  return days;
}

type WeekDays = (ContributionDay | null)[];

function groupByWeeks(contributions: ContributionDay[]): WeekDays[] {
  const weeks: WeekDays[] = [];
  let week: WeekDays = [];

  if (contributions.length > 0) {
    const firstDow = new Date(contributions[0].date).getDay();
    for (let i = 0; i < firstDow; i++) week.push(null);
  }

  for (const day of contributions) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return weeks;
}

function getMonthLabels(weeks: WeekDays[]) {
  const labels: { month: string; weekIndex: number }[] = [];
  let last = -1;

  weeks.forEach((w, i) => {
    const first = w.find((d) => d !== null);
    if (first) {
      const m = new Date(first.date).getMonth();
      if (m !== last) {
        labels.push({ month: MONTHS[m], weekIndex: i });
        last = m;
      }
    }
  });

  return labels;
}

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ============================================================
   Sub-components
   ============================================================ */

/* ---- Stat Card ---- */
function StatCard({
  icon,
  label,
  value,
  suffix,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
  color: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="an-stat-card rounded-[14px] p-5 transition-all duration-300"
      style={{ "--stat-color": color } as React.CSSProperties}
    >
      <div className="an-stat-icon flex items-center justify-center w-[38px] h-[38px] rounded-[10px] mb-3">
        {icon}
      </div>
      <div
        className="text-2xl font-bold text-slate-50 leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
        {suffix && (
          <span className="text-sm font-medium text-slate-400">{suffix}</span>
        )}
      </div>
      <div className="text-xs text-slate-400 mt-1">{label}</div>
    </motion.div>
  );
}

/* ---- Contribution Heatmap ---- */
function ContributionHeatmap({
  contributions,
  colors,
  platform,
}: {
  contributions: ContributionDay[];
  colors: string[];
  platform: "github" | "leetcode";
}) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const weeks = useMemo(() => groupByWeeks(contributions), [contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);
  const noun = platform === "github" ? "contributions" : "submissions";

  return (
    <div className="relative">
      {/* scrollable area */}
      <div className="overflow-x-auto pb-1 an-scroll">
        {/* month labels */}
        <div
          className="flex gap-[3px] mb-1.5"
          style={{ paddingLeft: "36px" }}
        >
          {weeks.map((_, i) => {
            const lbl = monthLabels.find((m) => m.weekIndex === i);
            return (
              <div
                key={i}
                className="w-[13px] shrink-0 text-[10px] text-slate-600 whitespace-nowrap"
                style={{ fontFamily: "var(--font-code)" }}
              >
                {lbl ? lbl.month : ""}
              </div>
            );
          })}
        </div>

        <div className="flex gap-1.5">
          {/* day labels */}
          <div
            className="shrink-0 w-7"
            style={{
              display: "grid",
              gridTemplateRows: "repeat(7, 13px)",
              gap: "3px",
            }}
          >
            <span />
            <span
              className="text-[9px] text-slate-600 flex items-center"
              style={{ fontFamily: "var(--font-code)" }}
            >
              Mon
            </span>
            <span />
            <span
              className="text-[9px] text-slate-600 flex items-center"
              style={{ fontFamily: "var(--font-code)" }}
            >
              Wed
            </span>
            <span />
            <span
              className="text-[9px] text-slate-600 flex items-center"
              style={{ fontFamily: "var(--font-code)" }}
            >
              Fri
            </span>
            <span />
          </div>

          {/* cells grid */}
          <div className="flex gap-[3px]">
            {weeks.map((wk, wi) => (
              <div
                key={wi}
                style={{
                  display: "grid",
                  gridTemplateRows: "repeat(7, 13px)",
                  gap: "3px",
                }}
              >
                {wk.map((day, di) => (
                  <div
                    key={di}
                    className={`w-[13px] h-[13px] rounded-[3px] transition-transform duration-100${
                      day ? " an-hcell cursor-crosshair" : ""
                    }`}
                    style={{
                      backgroundColor: day
                        ? colors[day.level]
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!day) return;
                      const r = e.currentTarget.getBoundingClientRect();
                      setTooltip({
                        text: `${day.count} ${noun} on ${fmtDate(day.date)}`,
                        x: r.left + r.width / 2,
                        y: r.top - 8,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* legend */}
      <div className="flex items-center gap-1 mt-4 justify-end">
        <span
          className="text-[10px] text-slate-600 mx-1"
          style={{ fontFamily: "var(--font-code)" }}
        >
          Less
        </span>
        {colors.map((c, i) => (
          <div
            key={i}
            className="w-[13px] h-[13px] rounded-[3px]"
            style={{ backgroundColor: c }}
          />
        ))}
        <span
          className="text-[10px] text-slate-600 mx-1"
          style={{ fontFamily: "var(--font-code)" }}
        >
          More
        </span>
      </div>

      {/* tooltip */}
      {tooltip && (
        <div
          className="an-tooltip fixed z-[9999] pointer-events-none rounded-lg px-3 py-2 text-xs text-slate-200 whitespace-nowrap"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}

/* ---- Difficulty Progress Bar ---- */
function DifficultyBar({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (solved / total) * 100 : 0;

  return (
    <motion.div variants={fadeUp}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-semibold" style={{ color }}>
          {label}
        </span>
        <span
          className="text-sm font-semibold text-white"
          style={{ fontFamily: "var(--font-code)" }}
        >
          {solved}
          <span className="text-slate-600 font-normal">/{total}</span>
        </span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

/* ---- Loading Skeleton ---- */
function Skeleton() {
  return (
    <div className="py-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-[110px] rounded-[14px] an-skel" />
        ))}
      </div>
      <div className="h-[150px] rounded-[14px] an-skel" />
    </div>
  );
}

/* ---- Error Box ---- */
function ErrorBox({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <motion.div
      className="an-error text-center py-12 px-8 rounded-[14px] mb-6"
      variants={fadeUp}
    >
      <p className="mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="an-retry inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200"
      >
        <RefreshCw size={14} /> Retry
      </button>
    </motion.div>
  );
}

/* ============================================================
   Main Component
   ============================================================ */

export default function Analytics() {
  const [gh, setGh] = useState<GitHubData | null>(null);
  const [lc, setLc] = useState<LeetCodeData | null>(null);
  const [ghLoading, setGhLoading] = useState(true);
  const [lcLoading, setLcLoading] = useState(true);
  const [ghError, setGhError] = useState<string | null>(null);
  const [lcError, setLcError] = useState<string | null>(null);

  const fetchGH = useCallback(async () => {
    setGhLoading(true);
    setGhError(null);
    try {
      const r = await fetch("/api/github");
      if (!r.ok) throw new Error();
      setGh(await r.json());
    } catch {
      setGhError("Couldn't load GitHub data — try again in a moment.");
    } finally {
      setGhLoading(false);
    }
  }, []);

  const fetchLC = useCallback(async () => {
    setLcLoading(true);
    setLcError(null);
    try {
      const r = await fetch("/api/leetcode");
      if (!r.ok) throw new Error();
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      setLc(data);
    } catch {
      setLcError("Couldn't load LeetCode data — try again in a moment.");
    } finally {
      setLcLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGH();
    fetchLC();
  }, [fetchGH, fetchLC]);

  const ghStats = useMemo(
    () => (gh ? computeGitHubStats(gh.contributions) : null),
    [gh]
  );

  const lcCalendar = useMemo(
    () =>
      lc?.submissionCalendar
        ? processLeetCodeCalendar(lc.submissionCalendar)
        : null,
    [lc]
  );

  const lcTotal = lc ? lc.totalEasy + lc.totalMedium + lc.totalHard : 1;
  const donutR = 76;
  const donutC = 2 * Math.PI * donutR;

  return (
    <main
      className="min-h-screen relative z-[1]"
      style={{ padding: "7rem 1.5rem 5rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* ── ambient background ── */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="an-orb an-orb-cyan" />
        <div className="an-orb an-orb-blue" />
        <div className="an-orb an-orb-amber" />
      </div>

      {/* ── Hero ── */}
      <motion.section
        className="flex flex-col items-center justify-center text-center pt-8 pb-14 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="an-badge inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium mb-5"
          style={{ fontFamily: "var(--font-code)" }}
        >
          <BarChart3 size={14} />
          <span>Developer Metrics</span>
        </div>
        <h1
          className="font-bold mb-4 text-center tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
        >
          <span className="gradient-text">Analytics</span>
        </h1>
        <p className="text-center text-slate-300/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Tracking my coding journey across platforms — every commit, every submission, every streak.
        </p>
      </motion.section>

      {/* ══════════════════════════════════════════════
          GitHub Section
          ══════════════════════════════════════════════ */}
      <motion.section
        className="mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* header */}
        <motion.div
          className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]"
          variants={fadeUp}
        >
          <div
            className="inline-flex items-center gap-2.5 text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <SiGithub size={22} className="text-slate-200" />
            <span>GitHub</span>
          </div>
          <a
            href="https://github.com/satyam18x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
          >
            View Profile <ChevronRight size={16} />
          </a>
        </motion.div>

        {ghLoading ? (
          <Skeleton />
        ) : ghError ? (
          <ErrorBox message={ghError} onRetry={fetchGH} />
        ) : gh && ghStats ? (
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              variants={stagger}
            >
              <StatCard
                icon={<Flame size={20} />}
                label="Total Contributions"
                value={ghStats.totalContributions.toLocaleString()}
                color="#06b6d4"
              />
              <StatCard
                icon={<Zap size={20} />}
                label="Current Streak"
                value={ghStats.currentStreak}
                suffix=" days"
                color="#10b981"
              />
              <StatCard
                icon={<Trophy size={20} />}
                label="Longest Streak"
                value={ghStats.longestStreak}
                suffix=" days"
                color="#f59e0b"
              />
              <StatCard
                icon={<Target size={20} />}
                label="Best Day"
                value={ghStats.bestDay.count}
                suffix=" commits"
                color="#8b5cf6"
              />
            </motion.div>

            {/* heatmap */}
            <motion.div className="card p-6 mb-6" variants={fadeUp}>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-5">
                <Calendar size={16} />
                <span>Contribution Activity</span>
                <span
                  className="ml-auto text-xs text-slate-600"
                  style={{ fontFamily: "var(--font-code)" }}
                >
                  Last 12 months
                </span>
              </div>
              <ContributionHeatmap
                contributions={gh.contributions}
                colors={GITHUB_COLORS}
                platform="github"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </motion.section>

      {/* ══════════════════════════════════════════════
          LeetCode Section
          ══════════════════════════════════════════════ */}
      <motion.section
        className="mb-16"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* header */}
        <motion.div
          className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]"
          variants={fadeUp}
        >
          <div
            className="inline-flex items-center gap-2.5 text-xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <SiLeetcode size={22} className="text-amber-400" />
            <span>LeetCode</span>
          </div>
          <a
            href="https://leetcode.com/u/XuwoembeVc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
          >
            View Profile <ChevronRight size={16} />
          </a>
        </motion.div>

        {lcLoading ? (
          <Skeleton />
        ) : lcError ? (
          <ErrorBox message={lcError} onRetry={fetchLC} />
        ) : lc ? (
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* donut + difficulty */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 mb-6"
              variants={stagger}
            >
              {/* circular chart */}
              <motion.div
                className="card p-8 flex items-center justify-center relative"
                variants={fadeUp}
              >
                <svg
                  width={180}
                  height={180}
                  viewBox="0 0 200 200"
                  className="block"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r={donutR}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="14"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r={donutR}
                    fill="none"
                    stroke="url(#lcGrad)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={donutC}
                    initial={{ strokeDashoffset: donutC }}
                    whileInView={{
                      strokeDashoffset:
                        donutC - (lc.totalSolved / lcTotal) * donutC,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" as const }}
                    transform="rotate(-90 100 100)"
                  />
                  <defs>
                    <linearGradient
                      id="lcGrad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFB454" />
                      <stop offset="100%" stopColor="#F07178" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span
                    className="text-4xl font-bold text-white leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {lc.totalSolved}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">Solved</span>
                </div>
              </motion.div>

              {/* difficulty bars */}
              <motion.div
                className="card px-7 py-6 flex flex-col justify-center gap-5"
                variants={fadeUp}
              >
                <h3
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Problem Breakdown
                </h3>
                <DifficultyBar
                  label="Easy"
                  solved={lc.easySolved}
                  total={lc.totalEasy}
                  color={DIFFICULTY_COLORS.easy}
                />
                <DifficultyBar
                  label="Medium"
                  solved={lc.mediumSolved}
                  total={lc.totalMedium}
                  color={DIFFICULTY_COLORS.medium}
                />
                <DifficultyBar
                  label="Hard"
                  solved={lc.hardSolved}
                  total={lc.totalHard}
                  color={DIFFICULTY_COLORS.hard}
                />
              </motion.div>
            </motion.div>

            {/* stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              variants={stagger}
            >
              <StatCard
                icon={<Flame size={20} />}
                label="Problems Solved"
                value={lc.totalSolved}
                color="#FFB454"
              />
              <StatCard
                icon={<TrendingUp size={20} />}
                label="Current Streak"
                value={lc.streak || "—"}
                suffix={lc.streak ? " days" : ""}
                color="#00b8a3"
              />
              <StatCard
                icon={<Trophy size={20} />}
                label="Global Ranking"
                value={lc.ranking ? lc.ranking.toLocaleString() : "—"}
                color="#ffc01e"
              />
              <StatCard
                icon={<Calendar size={20} />}
                label="Active Days"
                value={
                  lc.totalActiveDays ||
                  lcCalendar?.filter((d) => d.count > 0).length ||
                  0
                }
                color="#ff375f"
              />
            </motion.div>

            {/* heatmap */}
            {lcCalendar && (
              <motion.div className="card p-6 mb-6" variants={fadeUp}>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-5">
                  <Calendar size={16} />
                  <span>Submission Activity</span>
                  <span
                    className="ml-auto text-xs text-slate-600"
                    style={{ fontFamily: "var(--font-code)" }}
                  >
                    Last 12 months
                  </span>
                </div>
                <ContributionHeatmap
                  contributions={lcCalendar}
                  colors={LEETCODE_COLORS}
                  platform="leetcode"
                />
              </motion.div>
            )}
          </motion.div>
        ) : null}
      </motion.section>
    </main>
  );
}
