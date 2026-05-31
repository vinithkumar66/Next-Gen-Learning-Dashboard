import React from "react"
import { Activity } from "@/types/course"
import { GlowCard } from "../ui/GlowCard"
import { CheckCircle2, FileText, Award, Calendar, BarChart2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActivityTileProps {
  activities: Activity[]
}

// Generate mock contribution grid cells representing study activity intensity
const daysOfWeek = ["M", "W", "F"]
const contributionWeeks = 18

// Seed random intensity levels (0 to 3) to mimic realistic study metrics
const gridData = Array.from({ length: 7 }, () =>
  Array.from({ length: contributionWeeks }, () => Math.floor(Math.random() * 4))
)

export function ActivityTile({ activities }: ActivityTileProps) {
  const iconMap = {
    quiz: Award,
    assignment: FileText,
    lecture: Calendar,
    completion: CheckCircle2,
  }

  const colorMap = {
    pending: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    completed: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    graded: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  }

  return (
    <GlowCard
      as="section"
      className="p-6 bg-slate-950/40 border-white/[0.04] space-y-6 flex flex-col justify-between"
      glowColor="rgba(168, 85, 247, 0.03)"
    >
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white tracking-tight">Study Contributions</h3>
          </div>
          <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase bg-white/5 border border-white/5 px-2 py-0.5 rounded">
            Last 3 Months
          </span>
        </header>

        {/* Breathtaking GitHub-style visual contribution grid */}
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/[0.04] space-y-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {/* Weekday indicators */}
            <div className="flex flex-col justify-around text-[9px] font-bold text-slate-500 h-28 pr-1 select-none">
              {daysOfWeek.map((day, idx) => (
                <span key={idx}>{day}</span>
              ))}
            </div>

            {/* Grid layout */}
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 flex-1 justify-between min-w-[240px]">
              {gridData.map((row, rowIdx) =>
                row.map((val, colIdx) => (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    title={`Study level: ${val}/3`}
                    className={cn(
                      "h-2.5 w-2.5 rounded-sm transition-all duration-300 hover:scale-110",
                      val === 0 && "bg-slate-900/60 border border-white/[0.02]",
                      val === 1 && "bg-indigo-900/30 border border-indigo-500/10",
                      val === 2 && "bg-indigo-700/50 border border-indigo-500/20",
                      val === 3 && "bg-indigo-500/70 border border-indigo-400/30 shadow-sm shadow-indigo-500/5"
                    )}
                  />
                ))
              )}
            </div>
          </div>

          {/* Grid Legend */}
          <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 pt-1 border-t border-white/[0.03]">
            <span>Less study</span>
            <div className="flex items-center gap-1 select-none">
              <div className="h-2 w-2 rounded-sm bg-slate-900/60 border border-white/[0.02]" />
              <div className="h-2 w-2 rounded-sm bg-indigo-900/30 border border-indigo-500/10" />
              <div className="h-2 w-2 rounded-sm bg-indigo-700/50 border border-indigo-500/20" />
              <div className="h-2 w-2 rounded-sm bg-indigo-500/70 border border-indigo-400/30" />
            </div>
            <span>More study</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t border-white/[0.04]">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Enrolled Activity Logs
        </h4>
        <ul className="space-y-3 list-none" aria-label="Activity Feed">
          {activities.slice(0, 2).map((activity) => {
            const Icon = iconMap[activity.type] || FileText
            return (
              <li key={activity.id}>
                <article className="flex items-start gap-4 p-2.5 rounded-xl hover:bg-white/[0.01] transition-colors duration-300 border border-transparent hover:border-white/[0.02]">
                  <div className={cn("p-2 rounded-lg border shrink-0", colorMap[activity.status])}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-xs font-bold text-slate-200 truncate">
                        {activity.title}
                      </h5>
                      <time className="text-[9px] text-slate-500 whitespace-nowrap">
                        {activity.timestamp}
                      </time>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                      {activity.courseName}
                    </p>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </GlowCard>
  )
}
