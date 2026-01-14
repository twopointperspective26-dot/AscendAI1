import React from 'react'

type Props = {
  title: string
  progress: number
}

export default function SkillCard({ title, progress }: Props) {
  return (
    <div className="p-4 rounded-lg border border-slate-100 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm text-slate-500">{Math.round(progress)}%</div>
      </div>

      <div className="mt-3 w-full bg-slate-100 rounded-full h-2">
        <div className="h-2 rounded-full bg-electric" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-4">
        <button className="px-3 py-2 bg-electric text-white rounded-md">Continue</button>
      </div>
    </div>
  )
}
