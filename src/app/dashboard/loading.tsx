"use client"

import React from "react"
import { SkeletonCard } from "@/components/ui/SkeletonCard"
import { motion } from "framer-motion"

export default function Loading() {
  return (
    <motion.section
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.7, 0.5] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)] select-none"
    >
      {/* Row 1, Col 1-2: Hero Greetings Skeleton */}
      <article className="md:col-span-2 xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur flex flex-col justify-between min-h-[220px]">
        <div className="space-y-4">
          <div className="h-6 w-36 rounded-full bg-white/10" />
          <div className="h-9 w-3/4 rounded-xl bg-white/10" />
          <div className="h-4 w-5/6 rounded-md bg-white/10" />
        </div>
        <div className="grid grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-xl border border-white/5 backdrop-blur-md md:w-auto w-full mt-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-5 w-5 rounded bg-white/10" />
              <div className="h-4 w-8 rounded bg-white/10" />
              <div className="h-3 w-12 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </article>

      {/* Row 1-2, Col 3-4: Activity Feed Skeleton */}
      <article className="md:col-span-2 xl:col-span-2 xl:row-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col justify-between min-h-[460px]">
        <div className="space-y-6 flex-1 flex flex-col justify-between">
          <header className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="h-6 w-32 rounded bg-white/10" />
            <div className="h-4 w-12 rounded bg-white/10" />
          </header>
          <ul className="space-y-4 flex-1 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/2">
                <div className="h-10 w-10 rounded-lg bg-white/10 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-1/3 rounded bg-white/10" />
                    <div className="h-3 w-12 rounded bg-white/10" />
                  </div>
                  <div className="h-3.5 w-1/2 rounded bg-white/10" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Row 2, Col 1: Course Card 1 Skeleton */}
      <SkeletonCard />

      {/* Row 2, Col 2: Course Card 2 Skeleton */}
      <SkeletonCard />

      {/* Row 3, Col 1: Course Card 3 Skeleton */}
      <SkeletonCard />

      {/* Row 3, Col 2-4: Upcoming Course Skeleton */}
      <SkeletonCard className="md:col-span-2 xl:col-span-3" />
    </motion.section>
  )
}
