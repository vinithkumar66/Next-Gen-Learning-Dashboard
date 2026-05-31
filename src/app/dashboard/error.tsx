"use client"

import { useEffect } from "react"
import { AlertCircle, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[75vh] items-center justify-center p-4">
      {/* Sleek, futuristic glassmorphic error panel */}
      <motion.article
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur max-w-md w-full text-center space-y-6 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle background red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Warning Icon Badge */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center text-red-400 shadow-lg shadow-red-500/5">
          <AlertCircle className="h-6 w-6" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Syncing Interrupted
          </h2>
          <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
            We ran into an issue connecting securely to your academic profile. Let's try to restore the link.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => reset()}
          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-[0.98] cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Restablish Connection</span>
        </button>
      </motion.article>
    </div>
  )
}
