import React from 'react'
import SkillCard from './SkillCard'

export default function SkillsGrid() {
  const skills: any[] = [] // empty for now; will connect to backend later

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Learning Paths</h2>
      </div>

      {skills.length === 0 ? (
        <div className="mt-6 p-8 rounded-lg border border-slate-100 flex items-center space-x-6">
          <div className="empty-illustration">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" fill="#2563EB" opacity="0.9"/>
              <rect x="4" y="10" width="16" height="10" rx="2" fill="#2563EB" opacity="0.12"/>
            </svg>
          </div>

          <div>
            <div className="text-lg font-medium">You haven't created any skills yet.</div>
            <div className="text-sm text-slate-600 mt-1">Enter a skill above to get started.</div>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={i} title={s.title} progress={s.progress} />
          ))}
        </div>
      )}
    </div>
  )
}
