import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EduPulse Dashboard — Next-Gen Student Analytics",
  description: "A highly dynamic, premium student dashboard for course management, academic progress analytics, and activity tracking.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
