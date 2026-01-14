import React from 'react'

export default function Hero() {
  return (
    <section className="bg-white rounded-lg p-8 shadow-sm">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Master Any Skill with AI-Powered Learning</h1>
          <p className="mt-3 text-slate-600">Ascend AI creates personalized, gamified lessons that actually teach.</p>
        </div>

        <div className="mt-6 md:mt-0 md:ml-6">
          <div className="flex items-center space-x-2">
            <input
              aria-label="What do you want to learn?"
              className="w-64 md:w-80 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-500"
              placeholder="What do you want to learn?"
            />
            <button className="px-4 py-3 bg-electric text-white rounded-lg hover:bg-electric/90">Create Skill</button>
          </div>
        </div>
      </div>
    </section>
  )
}
