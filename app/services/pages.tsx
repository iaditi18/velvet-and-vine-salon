'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ServicesRootPage() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-serif uppercase tracking-widest">Our Service Menu</h1>
        <p className="text-sm text-zinc-400">Please select a category from our homepage to view tailored treatments.</p>
        <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-zinc-800 rounded-full px-6 py-2.5 hover:bg-zinc-900 transition-all">
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  )
}