import React from 'react'

export default function NavBar() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-semibold">Ascend AI</div>
      </div>

      <nav className="hidden md:flex items-center space-x-6 text-slate-600">
        <a className="hover:text-slate-900" href="#">Dashboard</a>
        <a className="hover:text-slate-900" href="#">Learn</a>
        <a className="hover:text-slate-900" href="#">Profile</a>
      </nav>
    </header>
  )
}
