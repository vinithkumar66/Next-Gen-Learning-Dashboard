"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
}

export function CourseGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]",
        className
      )}
    >
      {children}
    </motion.section>
  )
}

export function CourseGridItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
}: {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3 | 4
  rowSpan?: 1 | 2 | 3
}) {
  const colSpans = {
    1: "md:col-span-1 xl:col-span-1",
    2: "md:col-span-2 xl:col-span-2",
    3: "md:col-span-2 xl:col-span-3",
    4: "md:col-span-2 xl:col-span-4",
  }

  const rowSpans = {
    1: "xl:row-span-1",
    2: "xl:row-span-2",
    3: "xl:row-span-3",
  }

  return (
    <motion.article
      variants={itemVariants}
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur",
        colSpans[colSpan],
        rowSpans[rowSpan],
        className
      )}
    >
      {children}
    </motion.article>
  )
}
