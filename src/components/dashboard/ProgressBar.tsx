"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
  className?: string
  color?: string
}

export function ProgressBar({
  progress,
  className,
  color = "bg-gradient-to-r from-indigo-500 to-purple-500",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max(progress, 0), 100)
  const scaleXValue = percentage / 100

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-400">Progress</span>
        <span className="text-indigo-400">{percentage}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-slate-900/80 overflow-hidden border border-white/[0.04] relative">
        {/* GPU-accelerated transform-based progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scaleXValue }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            restDelta: 0.001,
          }}
          style={{ originX: 0 }}
          className={cn("absolute inset-y-0 left-0 w-full rounded-full", color)}
        />
      </div>
    </div>
  )
}
