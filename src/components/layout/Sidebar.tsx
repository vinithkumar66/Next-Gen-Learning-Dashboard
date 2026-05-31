"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  LogOut,
  GraduationCap,
  Calendar,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Courses", icon: BookOpen, href: "/dashboard/courses" },
  { label: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { label: "Instructors", icon: Users, href: "/dashboard/instructors" },
  { label: "Certificates", icon: Award, href: "/dashboard/certificates" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
]

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-white/[0.04] bg-slate-950/80 backdrop-blur-xl flex flex-col justify-between py-6 px-3.5 transition-all duration-300 ease-in-out select-none hidden md:flex",
        isCollapsed ? "w-20" : "w-20 xl:w-64"
      )}
    >
      <div className="space-y-8 flex-1 flex flex-col">
        {/* Sidebar Header */}
        <header className="relative flex items-center justify-between px-1.5 h-10">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/10">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span
              className={cn(
                "whitespace-nowrap transition-opacity duration-300",
                isCollapsed ? "hidden" : "hidden xl:block"
              )}
            >
              <h1 className="text-sm font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-none">
                EduPulse
              </h1>
              <p className="text-[9px] text-indigo-400 font-semibold tracking-wider uppercase mt-0.5">
                Academy
              </p>
            </span>
          </div>

          {/* Toggle Control Button */}
          <button
            onClick={onToggle}
            className="absolute -right-[23px] top-2 h-5 w-5 rounded-full border border-white/[0.06] bg-slate-950 text-slate-400 hover:text-white flex items-center justify-center hover:bg-slate-900 transition-colors shadow-md z-50 cursor-pointer"
            aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-3 w-3" />
            ) : (
              <ChevronLeft className="h-3 w-3" />
            )}
          </button>
        </header>

        {/* Semantic Navigation */}
        <nav className="space-y-1 flex-1 mt-6" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href))
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-3 rounded-xl py-3 px-3 text-xs font-semibold transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                )}
                title={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/5 border-l-2 border-indigo-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  className={cn(
                    "h-4 w-4 relative z-10 transition-transform duration-300 group-hover:scale-105 shrink-0",
                    isActive
                      ? "text-indigo-400"
                      : "text-slate-400 group-hover:text-slate-200"
                  )}
                />
                <span
                  className={cn(
                    "relative z-10 whitespace-nowrap transition-opacity duration-300",
                    isCollapsed ? "hidden" : "hidden xl:block"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Semantic Footer */}
      <footer className="space-y-4 pt-4 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 px-1.5 overflow-hidden">
          <div className="h-9 w-9 shrink-0 rounded-full bg-slate-850 border border-white/[0.06] flex items-center justify-center text-xs font-bold text-indigo-400">
            VK
          </div>
          <div
            className={cn(
              "flex-1 min-w-0 transition-opacity duration-300",
              isCollapsed ? "hidden" : "hidden xl:block"
            )}
          >
            <p className="text-xs font-bold text-slate-200 truncate">Vinith Kumar</p>
            <p className="text-[10px] text-slate-500 truncate">vinithkumar@edu.com</p>
          </div>
        </div>
        <button
          className={cn(
            "w-full flex items-center gap-3 rounded-xl py-3 px-3 text-xs font-semibold text-red-400/90 hover:text-red-400 hover:bg-red-500/10 transition-colors duration-300 cursor-pointer",
            isCollapsed ? "justify-center" : "justify-center xl:justify-start"
          )}
          title="Sign Out"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          <span className={isCollapsed ? "hidden" : "hidden xl:block"}>Sign Out</span>
        </button>
      </footer>
    </aside>
  )
}

// Sleek Mobile Bottom Navigation Bar
export function MobileNav() {
  const pathname = usePathname()
  const items = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { label: "Courses", icon: BookOpen, href: "/dashboard/courses" },
    { label: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-slate-950/95 border-t border-white/10 backdrop-blur-lg flex items-center justify-around px-6 md:hidden">
      {items.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/dashboard" && pathname.startsWith(item.href))
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 text-[9px] font-bold transition-all duration-300 select-none",
              isActive ? "text-indigo-400" : "text-slate-400 hover:text-slate-200"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                isActive ? "scale-105" : "scale-100"
              )}
            />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
