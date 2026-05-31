export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

export interface Activity {
  id: string
  type: "quiz" | "assignment" | "lecture" | "completion"
  title: string
  courseName: string
  timestamp: string
  status: "pending" | "completed" | "graded"
  score?: string
}

export interface StudentStats {
  completedCourses: number
  activeCourses: number
  totalStudyHours: number
  averageGrade: number
  nextClass?: string
}
