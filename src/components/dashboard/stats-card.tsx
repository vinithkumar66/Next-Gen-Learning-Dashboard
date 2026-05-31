import React from "react"
import { Sparkles, Trophy, BookOpen, Clock } from "lucide-react"
import { GlowCard } from "../ui/GlowCard"

interface StatsCardProps {
  studentName?: string
  gpa?: string
  studyHours?: number
  activeCourses?: number
}

// TODO: Move this formatter to a shared utils library eventually, works for now
function formatActiveCourseMessage(count: number): string {
  if (count === 0) return "No active courses right now."
  if (count === 1) return "You have 1 active course."
  return `You have ${count} active courses.`
}

export function StatsCard({
  studentName = "Vinith Kumar",
  gpa = "3.92",
  studyHours = 42,
  activeCourses = 4,
}: StatsCardProps) {
  return (
    <GlowCard
      as="section"
      className="p-8 bg-gradient-to-br from-slate-950 via-slate-900/90 to-indigo-950/15 border-white/[0.04]"
      glowColor="rgba(129, 140, 248, 0.05)"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <header className="space-y-3">
          <div className="flex items-center gap-3.5 flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Academic Dashboard</span>
            </div>
            {/* 7-Day Learning Streak Indicator */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-500/20 shadow-md shadow-amber-500/5 select-none">
              <span className="animate-bounce">🔥</span>
              <span>7 Day Streak</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {studentName}
            </span>
            ! 👋
          </h2>
          <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
            You're doing fantastic! {formatActiveCourseMessage(activeCourses)} Keep up the amazing momentum and semester focus.
          </p>
        </header>

        <ul className="grid grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-white/[0.05] backdrop-blur-md md:w-auto w-full list-none">
          <li className="text-center px-2">
            <div className="flex justify-center mb-1.5 text-yellow-400">
              <Trophy className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-slate-100">{gpa}</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              GPA
            </p>
          </li>
          <li className="text-center px-2 border-x border-white/[0.08]">
            <div className="flex justify-center mb-1.5 text-indigo-400">
              <Clock className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-slate-100">{studyHours}h</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              Study Time
            </p>
          </li>
          <li className="text-center px-2">
            <div className="flex justify-center mb-1.5 text-purple-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-slate-100">{activeCourses}</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              Active
            </p>
          </li>
        </ul>
      </div>
    </GlowCard>
  )
}
