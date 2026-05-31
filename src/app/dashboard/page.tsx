import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { StatsCard } from "@/components/dashboard/stats-card"
import { CourseGrid, CourseGridItem } from "@/components/dashboard/course-grid"
import { CourseCard } from "@/components/dashboard/CourseCard"
import { ActivityTile } from "@/components/dashboard/ActivityTile"
import { Course, Activity } from "@/types/course"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

// Robust structured fallback mock data for graceful connectivity warnings/previewing
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

const mockActivities: Activity[] = [
  {
    id: "1",
    type: "quiz",
    title: "Neural Networks Quiz 3",
    courseName: "Introduction to Artificial Intelligence",
    timestamp: "2 hours ago",
    status: "graded",
    score: "96/100",
  },
  {
    id: "2",
    type: "assignment",
    title: "Bento Grid Layout Proposal",
    courseName: "Advanced UI/UX & Glassmorphism Design",
    timestamp: "5 hours ago",
    status: "completed",
  },
  {
    id: "3",
    type: "completion",
    title: "Course Completed: Distributed Systems",
    courseName: "Distributed Systems & Cloud Architecture",
    timestamp: "Yesterday",
    status: "completed",
  },
  {
    id: "4",
    type: "lecture",
    title: "Upcoming Live Session: Three.js Lighting",
    courseName: "Game Development with WebGL & Three.js",
    timestamp: "Tomorrow at 10:00 AM",
    status: "pending",
  },
]

// Secure server-side dynamic fetching handler
async function getCourses(): Promise<Course[]> {
  try {
    const supabase = await createClient()

    // Query courses securely from Supabase courses table on the server
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: false })

    if (error) {
      console.warn("Supabase secure fetch warning (using preview fallback):", error.message)
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
    console.warn("Secure fetch failed. Gracefully falling back to visual preview data.", err)
    return fallbackCourses
  }
}

export default async function DashboardPage() {
  const courses = await getCourses()

  // Gracefully ensure at least 4 items are present to populate the Bento layout beautifully
  const firstCourse = courses[0] || fallbackCourses[0]
  const secondCourse = courses[1] || fallbackCourses[1]
  const thirdCourse = courses[2] || fallbackCourses[2]
  const fourthCourse = courses[3] || fallbackCourses[3]

  return (
    <DashboardShell>
      <div className="space-y-6">
        {/* Dashboard Bento Grid */}
        <CourseGrid>
          {/* Row 1, Col 1-2: Hero Greetings */}
          <CourseGridItem colSpan={2} rowSpan={1}>
            <StatsCard
              studentName="Vinith Kumar"
              gpa="3.92"
              studyHours={42}
              activeCourses={courses.filter((c) => c.progress > 0 && c.progress < 100).length}
            />
          </CourseGridItem>

          {/* Row 1-2, Col 3-4: Activity Feed (spans 2 rows, 2 columns - medium width) */}
          <CourseGridItem colSpan={2} rowSpan={2}>
            <ActivityTile activities={mockActivities} />
          </CourseGridItem>

          {/* Row 2, Col 1: Course Card 1 */}
          <CourseGridItem colSpan={1} rowSpan={1}>
            <CourseCard course={firstCourse} />
          </CourseGridItem>

          {/* Row 2, Col 2: Course Card 2 */}
          <CourseGridItem colSpan={1} rowSpan={1}>
            <CourseCard course={secondCourse} />
          </CourseGridItem>

          {/* Row 3, Col 1: Course Card 3 */}
          <CourseGridItem colSpan={1} rowSpan={1}>
            <CourseCard course={thirdCourse} />
          </CourseGridItem>

          {/* Row 3, Col 2-4: Upcoming Course */}
          <CourseGridItem colSpan={3} rowSpan={1}>
            <CourseCard course={fourthCourse} />
          </CourseGridItem>
        </CourseGrid>
      </div>
    </DashboardShell>
  )
}
