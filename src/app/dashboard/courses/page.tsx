import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { CourseGrid, CourseGridItem } from "@/components/dashboard/course-grid"
import { CourseCard } from "@/components/dashboard/CourseCard"
import { Course } from "@/types/course"
import { createClient } from "@/lib/supabase/server"
import { BookOpen } from "lucide-react"

export const dynamic = "force-dynamic"

const fallbackCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Artificial Intelligence",
    progress: 68,
    icon_name: "Code2",
    created_at: "May 10, 2026",
  },
  {
    id: "2",
    title: "Advanced UI/UX & Glassmorphism Design",
    progress: 85,
    icon_name: "Sparkles",
    created_at: "May 15, 2026",
  },
  {
    id: "3",
    title: "Distributed Systems & Cloud Architecture",
    progress: 100,
    icon_name: "Braces",
    created_at: "April 20, 2026",
  },
  {
    id: "4",
    title: "Game Development with WebGL & Three.js",
    progress: 0,
    icon_name: "Database",
    created_at: "May 28, 2026",
  },
]

async function getCourses(): Promise<Course[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: false })

    if (error) {
      console.warn("Supabase courses page warning (using fallback):", error.message)
      return fallbackCourses
    }

    if (data && data.length > 0) {
      return data.map((item: any) => ({
        id: String(item.id),
        title: String(item.title),
        progress: Number(item.progress),
        icon_name: String(item.icon_name),
        created_at: new Date(item.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      }))
    }
    return fallbackCourses
  } catch (err) {
    return fallbackCourses
  }
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Course Catalog</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            My Enrolled{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Academic Courses
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Track your semester progress, access coursework resources, and review learning materials for your active topics.
          </p>
        </header>

        <CourseGrid>
          {courses.map((course) => (
            <CourseGridItem key={course.id} colSpan={1} rowSpan={1}>
              <CourseCard course={course} />
            </CourseGridItem>
          ))}
        </CourseGrid>
      </div>
    </DashboardShell>
  )
}
