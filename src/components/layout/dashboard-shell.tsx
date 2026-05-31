"use client"

import React, { useState } from "react"
import { Sidebar, MobileNav } from "./Sidebar"
import { cn } from "@/lib/utils"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden relative selection:bg-indigo-500/30 selection:text-white">
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-[100px] pointer-events-none" />

      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <MobileNav />

      <div
        className={cn(
          "min-h-screen flex flex-col transition-all duration-300 ease-in-out pl-0 pb-24 md:pb-8",
          isCollapsed ? "md:pl-20" : "md:pl-20 xl:pl-64"
        )}
      >
        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto relative z-10" role="main">
          {children}
        </main>
      </div>
    </div>
  )
}
