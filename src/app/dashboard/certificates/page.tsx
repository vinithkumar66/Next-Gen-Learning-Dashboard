import React from "react"
import { DashboardShell } from "@/components/layout/dashboard-shell"
import { GlowCard } from "@/components/ui/GlowCard"
import { Award, Calendar, ShieldCheck, Download } from "lucide-react"

export const dynamic = "force-dynamic"

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  code: string
}

const mockCertificates: Certificate[] = [
  {
    id: "1",
    title: "Distributed Infrastructure & Cloud Specialist",
    issuer: "EduPulse Tech Academy",
    date: "April 2026",
    code: "EP-DIS-9902",
  },
]

export default function CertificatesPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-500/20">
            <Award className="h-3.5 w-3.5" />
            <span>Academic Achievements</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Earned Certifications
          </h2>
          <p className="text-slate-400 text-sm max-w-lg">
            Review your semester credentials, verifiable academic achievements, and download certificates.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Certificate List */}
          <section className="xl:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">Active Credentials</h3>
            <ul className="space-y-4 list-none" aria-label="Academic Certificates">
              {mockCertificates.length === 0 ? (
                <li className="text-sm text-slate-500 text-center py-8">
                  Complete semestral courses to generate verified credentials.
                </li>
              ) : (
                mockCertificates.map((cert) => (
                  <li key={cert.id}>
                    <GlowCard className="p-6 border-white/[0.04] bg-white/5 backdrop-blur flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-3">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                          Verified
                        </span>
                        <h4 className="text-base font-bold text-white leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-slate-400">{cert.issuer}</p>
                      </div>

                      <div className="flex flex-col gap-2.5 text-xs text-slate-400 border-l border-white/5 md:pl-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-indigo-400" />
                          <span>Issued: {cert.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-indigo-400" />
                          <span>Code: {cert.code}</span>
                        </div>
                        <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-bold text-white transition-all duration-300 shadow-md shadow-indigo-500/10 cursor-pointer">
                          <Download className="h-3.5 w-3.5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </GlowCard>
                  </li>
                ))
              )}
            </ul>
          </section>

          {/* Quick achievements sidebar card */}
          <GlowCard
            as="section"
            className="p-6 border-white/[0.04] bg-white/5 backdrop-blur h-fit space-y-6"
          >
            <h3 className="text-lg font-bold text-white tracking-tight">Milestones Summary</h3>
            <ul className="space-y-4 list-none text-xs text-slate-400">
              <li className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-semibold text-indigo-300">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-200">First Semester Certificate</p>
                  <p className="text-[10px] text-slate-500">Issued April 2026</p>
                </div>
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <div className="h-8 w-8 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center font-semibold text-slate-500">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-400">Semester Mastery (Active)</p>
                  <p className="text-[10px] text-slate-500">Est. June 2026</p>
                </div>
              </li>
            </ul>
          </GlowCard>
        </div>
      </div>
    </DashboardShell>
  )
}
