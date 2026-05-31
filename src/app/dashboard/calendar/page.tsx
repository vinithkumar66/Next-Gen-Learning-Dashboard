import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { GlowCard } from "@/components/ui/GlowCard"
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react"

export const dynamic = "force-dynamic"

interface Event {
  id: string
  title: string
  course: string
  time: string
  location: string
  type: "lecture" | "exam" | "assignment"
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Neural Networks & Deep Learning Lecture",
    course: "Introduction to Artificial Intelligence",
    time: "10:00 AM - 11:30 AM",
    location: "Auditorium B & Zoom Live",
    type: "lecture",
  },
  {
    id: "2",
    title: "Advanced Bento Grid Layout Submission",
    course: "Advanced UI/UX & Glassmorphism Design",
    time: "By 11:59 PM",
    location: "EduPulse Submission Portal",
    type: "assignment",
  },
  {
    id: "3",
    title: "Distributed Systems Midterm Exam",
    course: "Distributed Systems & Cloud Architecture",
    time: "02:00 PM - 04:00 PM",
    location: "Hall C (In-Person)",
    type: "exam",
  },
]

export default function CalendarPage() {
  const typeStyles = {
    lecture: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    exam: "text-red-400 bg-red-500/10 border-red-500/20",
    assignment: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  }

  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>Academic Scheduler</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Semester Calendar</h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Track your class lectures, exams, and project submission deadlines.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main events list */}
          <section className="xl:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">Today's Schedule</h3>
            <ul className="space-y-4 list-none" aria-label="Today's Events">
              {mockEvents.map((event) => (
                <li key={event.id}>
                  <GlowCard className="p-6 border-white/[0.04] bg-white/5 backdrop-blur">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider ${
                            typeStyles[event.type]
                          }`}
                        >
                          {event.type}
                        </span>
                        <h4 className="text-base font-bold text-white">{event.title}</h4>
                        <p className="text-xs text-slate-400">{event.course}</p>
                      </div>
                      <div className="space-y-2 text-xs text-slate-400 border-l border-white/5 md:pl-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-indigo-400" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-indigo-400" />
                          <span className="truncate max-w-[200px]">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick info panel */}
          <GlowCard
            as="section"
            className="p-6 border-white/[0.04] bg-white/5 backdrop-blur h-fit space-y-6"
          >
            <h3 className="text-lg font-bold text-white tracking-tight">Deadlines Summary</h3>
            <ul className="space-y-4 list-none text-sm">
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">Assignment 4</p>
                  <p className="text-xs text-slate-500">UI/UX Design</p>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Today
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">Cloud Architecture Lab</p>
                  <p className="text-xs text-slate-500">Distributed Systems</p>
                </div>
                <span className="text-xs font-bold text-slate-400">June 5</span>
              </li>
            </ul>
          </GlowCard>
        </div>
      </div>
    </DashboardShell>
  )
}
