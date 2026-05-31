"use client"

import React from "react"
import { Course } from "@/types/course"
import { GlowCard } from "../ui/GlowCard"
import { ProgressBar } from "./ProgressBar"
import { Code2, Sparkles, Braces, Database, HelpCircle, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface CourseCardProps {
  course: Course
}

const iconMap = {
  Code2,
  Sparkles,
  Braces,
  Database,
}

const styleMap = {
  Code2: {
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    glow: "rgba(6, 182, 212, 0.05)",
  },
  Sparkles: {
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    glow: "rgba(245, 158, 11, 0.05)",
  },
  Braces: {
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    glow: "rgba(168, 85, 247, 0.05)",
  },
  Database: {
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    glow: "rgba(16, 185, 129, 0.05)",
  },
}

export function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon_name as keyof typeof iconMap] || HelpCircle
  const style = styleMap[course.icon_name as keyof typeof styleMap] || {
    color: "text-slate-400 bg-slate-500/10 border-slate-500/20",
    glow: "rgba(148, 163, 184, 0.05)",
  }

  // Determine status labels based on progress
  const statusLabel =
    course.progress === 100
      ? "Completed"
      : course.progress === 0
      ? "Not Started"
      : "In Progress"

  const statusColors = {
    Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Not Started": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "In Progress": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  }

  return (
    <GlowCard
      as="article"
      className="h-full flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300 border-white/[0.04] relative overflow-hidden"
      glowColor={style.glow}
    >
      {/* Abstract subtle gradient mesh and repeating micro-dot grain texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.03),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none z-0" />

      {/* Top Header section */}
      <header className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className={cn("p-2.5 rounded-xl border flex items-center justify-center", style.color)}>
            <Icon className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "text-[10px] px-2.5 py-0.5 rounded-full border font-bold uppercase tracking-wider",
              statusColors[statusLabel]
            )}
          >
            {statusLabel}
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 min-h-[56px] flex items-center">
            {course.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
            <Calendar className="h-3.5 w-3.5 text-indigo-400" />
            <span>Enrolled: {course.created_at}</span>
          </div>
        </div>
      </header>

      {/* Progress Footer section */}
      <footer className="space-y-4 pt-6 mt-6 border-t border-white/[0.05] relative z-10">
        <ProgressBar progress={course.progress} />
      </footer>
    </GlowCard>
  )
}
