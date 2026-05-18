'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

export default function JoinTeamPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-20 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="flex justify-center">
          <Sparkles className="w-16 h-16 text-foreground/40" />
        </div>
        <h1 className="text-4xl font-serif uppercase tracking-wide">Join the Team</h1>
        <p className="text-sm text-foreground/70 leading-relaxed">
          We are always looking for passionate, talented stylists and extension specialists to join our luxury space. Think you’d be a great fit? Drop us an inquiry.
        </p>
        <div className="pt-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border border-border rounded-full px-6 py-3 hover:bg-muted/20 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}