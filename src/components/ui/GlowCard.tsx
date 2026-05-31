"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlowCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  glowColor?: string
  as?: "article" | "section" | "div" | "header"
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(99, 102, 241, 0.05)",
  as: Component = "article",
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Dynamically resolve the corresponding framer-motion semantic component
  const MotionComponent = (motion as any)[Component] || motion.article

  return (
    <MotionComponent
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.01,
        y: -3,
      }}
      transition={{
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      }}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden group shadow-xl hover:border-white/15 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {/* Background subtle glow tracker */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />
      {/* Very faint border highlight */}
      <div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl blur-[3px]"
        style={{
          background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.06), transparent 80%)`,
        }}
      />
      {/* Inner Content */}
      <div className="relative z-10">{children}</div>
    </MotionComponent>
  )
}
