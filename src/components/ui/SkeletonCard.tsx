"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col justify-between min-h-[220px] select-none",
        className
      )}
    >
      {/* Top Header Loader */}
      <header className="space-y-4 w-full">
        <div className="flex items-center justify-between">
          <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/5" />
          <div className="h-5 w-20 rounded-full bg-white/10 border border-white/5" />
        </div>
        <div className="space-y-2.5">
          <div className="h-5 w-3/4 rounded-lg bg-white/10" />
          <div className="h-3.5 w-1/2 rounded-md bg-white/10" />
        </div>
      </header>

      {/* Bottom Progress Bar Loader */}
      <footer className="space-y-3 pt-6 mt-6 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-12 rounded bg-white/10" />
          <div className="h-3 w-8 rounded bg-white/10" />
        </div>
        <div className="h-2 w-full rounded-full bg-white/10" />
      </footer>
    </motion.article>
  )
}
