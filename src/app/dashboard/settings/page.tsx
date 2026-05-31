import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { GlowCard } from "@/components/ui/GlowCard"
import { Settings, User, Bell, Shield, Keyboard } from "lucide-react"

export const dynamic = "force-dynamic"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <Settings className="h-3.5 w-3.5" />
            <span>Academic Preferences</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">System Settings</h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Manage your personal academic profile settings, notify levels, and preferences.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Settings Nav */}
          <nav className="space-y-2" aria-label="Settings Categories">
            <button className="w-full flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-xs font-bold text-white transition-all text-left">
              <User className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>Student Profile Details</span>
            </button>
            <button className="w-full flex items-center gap-3 rounded-2xl bg-transparent hover:bg-white/[0.02] border border-transparent px-4 py-3.5 text-xs font-bold text-slate-400 hover:text-slate-200 transition-all text-left">
              <Bell className="h-4 w-4 text-slate-400 shrink-0" />
              <span>Academic Notifications</span>
            </button>
            <button className="w-full flex items-center gap-3 rounded-2xl bg-transparent hover:bg-white/[0.02] border border-transparent px-4 py-3.5 text-xs font-bold text-slate-400 hover:text-slate-200 transition-all text-left">
              <Shield className="h-4 w-4 text-slate-400 shrink-0" />
              <span>Security & Password</span>
            </button>
            <button className="w-full flex items-center gap-3 rounded-2xl bg-transparent hover:bg-white/[0.02] border border-transparent px-4 py-3.5 text-xs font-bold text-slate-400 hover:text-slate-200 transition-all text-left">
              <Keyboard className="h-4 w-4 text-slate-400 shrink-0" />
              <span>Console Integrations</span>
            </button>
          </nav>

          {/* Form details wrapper */}
          <section className="xl:col-span-2">
            <GlowCard className="p-6 border-white/[0.04] bg-white/5 backdrop-blur space-y-6">
              <header className="border-b border-white/5 pb-4">
                <h3 className="text-base font-bold text-white tracking-tight">
                  Academic Profile Information
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Adjust visual settings and standard semester details.
                </p>
              </header>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Vinith Kumar"
                      className="w-full rounded-xl bg-slate-950/60 border border-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-400 outline-none select-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Academic Email
                    </label>
                    <input
                      type="email"
                      disabled
                      value="vinithkumar@university.edu"
                      className="w-full rounded-xl bg-slate-950/60 border border-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-400 outline-none select-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Active Major
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Computer Science & Design"
                      className="w-full rounded-xl bg-slate-950/60 border border-white/[0.06] px-4 py-2.5 text-xs font-semibold text-slate-400 outline-none select-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Registration Status
                    </label>
                    <input
                      type="text"
                      disabled
                      value="Enrolled (Full-Time)"
                      className="w-full rounded-xl bg-slate-950/60 border border-white/[0.06] px-4 py-2.5 text-xs font-semibold text-emerald-400 outline-none select-all"
                    />
                  </div>
                </div>
              </div>
            </GlowCard>
          </section>
        </div>
      </div>
    </DashboardShell>
  )
}
