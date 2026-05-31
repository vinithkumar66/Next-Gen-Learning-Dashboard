import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { GlowCard } from "@/components/ui/GlowCard"
import { Users, Mail, Building, Clock } from "lucide-react"

export const dynamic = "force-dynamic"

interface Instructor {
  id: string
  name: string
  role: string
  department: string
  email: string
  office: string
  hours: string
}

const mockInstructors: Instructor[] = [
  {
    id: "1",
    name: "Dr. Sarah Jenkins",
    role: "Senior AI Researcher & Lecturer",
    department: "Computer Science",
    email: "s.jenkins@university.edu",
    office: "Tech Building, Room 402",
    hours: "Mon/Wed 2:00 PM - 4:00 PM",
  },
  {
    id: "2",
    name: "Prof. Ryan Carter",
    role: "Design Lead & Adjunct Professor",
    department: "Advanced UI/UX Design",
    email: "r.carter@university.edu",
    office: "Creative Labs, Room 108",
    hours: "Tue/Thu 10:00 AM - 12:00 PM",
  },
  {
    id: "3",
    name: "Dr. Marcus Vance",
    role: "Associate Professor of Engineering",
    department: "Distributed Infrastructure",
    email: "m.vance@university.edu",
    office: "Engineering Hall, Room 315",
    hours: "Friday 1:00 PM - 3:00 PM",
  },
  {
    id: "4",
    name: "Elena Rostova",
    role: "Guest Lecturer & WebGL Specialist",
    department: "Interactive Media Design",
    email: "e.rostova@university.edu",
    office: "Creative Labs, Room 112",
    hours: "By Appointment",
  },
]

export default function InstructorsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <Users className="h-3.5 w-3.5" />
            <span>Faculty Directory</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Course Instructors</h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Connect with your professors and lecturers, and schedule office hours.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Faculty Directory">
          {mockInstructors.map((instructor) => (
            <GlowCard
              as="article"
              key={instructor.id}
              className="p-6 border-white/[0.04] bg-white/5 backdrop-blur flex flex-col justify-between"
            >
              <div className="space-y-4">
                <header className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-indigo-400 text-lg">
                    {instructor.name
                      .split(" ")
                      .slice(-1)[0]
                      .charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {instructor.name}
                    </h3>
                    <p className="text-xs text-indigo-400 font-semibold mt-0.5">
                      {instructor.role}
                    </p>
                  </div>
                </header>

                <div className="space-y-2.5 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-indigo-400/80" />
                    <span>
                      {instructor.department} — {instructor.office}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indigo-400/80" />
                    <span>Office Hours: {instructor.hours}</span>
                  </div>
                </div>
              </div>

              <footer className="pt-6 mt-6 border-t border-white/5">
                <a
                  href={`mailto:${instructor.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/2 hover:bg-white/5 py-2.5 text-xs font-semibold text-white transition-all duration-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Send Email Request</span>
                </a>
              </footer>
            </GlowCard>
          ))}
        </section>
      </div>
    </DashboardShell>
  )
}
