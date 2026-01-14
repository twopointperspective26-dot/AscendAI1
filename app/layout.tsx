import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Ascend AI',
  description: 'Master any skill with AI-powered learning',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div className="min-h-screen max-w-6xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
