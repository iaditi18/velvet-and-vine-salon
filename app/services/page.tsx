'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Sparkles } from 'lucide-react'

// This dictionary maps the URL slugs to real display data
const SERVICES_DATA: Record<string, { title: string; description: string; items: { name: string; price: string; time: string }[] }> = {
  'custom-color': {
    title: 'Custom Color',
    description: 'Bespoke coloring sessions tailored completely to your hair texture, skin tone, and lifestyle.',
    items: [
      { name: 'Lived-In Balayage', price: '₹12,500+', time: '180 mins' },
      { name: 'Full Luxury Highlights', price: '₹9,800+', time: '150 mins' },
      { name: 'Root Touch Up & Gloss', price: '₹4,500+', time: '90 mins' },
    ]
  },
  'hair-cut-and-styling': {
    title: 'Hair Cut & Styling',
    description: 'Precision cutting techniques designed to create seamless movement, shape, and structure.',
    items: [
      { name: 'Signature Luxury Haircut', price: '₹3,200', time: '60 mins' },
      { name: 'Bespoke Blowout & Style', price: '₹2,000', time: '45 mins' },
      { name: 'Red Carpet Editorial Styling', price: '₹4,500+', time: '75 mins' },
    ]
  },
  'extensions': {
    title: 'Extensions',
    description: 'Premium, ethically sourced luxury hair extensions for seamless length, volume, and thickness.',
    items: [
      { name: 'Kera-Link Keratin Bond Install', price: 'Price on Consultation', time: '240 mins' },
      { name: 'Seamless Tape-In Volume Boost', price: '₹18,000+', time: '120 mins' },
      { name: 'Extension Removal & Detox Treatment', price: '₹3,500', time: '90 mins' },
    ]
  }
}

export default function ServiceCategoryPage() {
  const params = useParams()
  const categorySlug = params?.category as string

  // Fallback data if the slug doesn't match perfectly
  const service = SERVICES_DATA[categorySlug] || {
    title: 'Service Menu',
    description: 'Explore our premium hair treatment and styling options.',
    items: [{ name: 'Custom Consultation', price: 'Complimentary', time: '15 mins' }]
  }

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen py-20 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* Back Button */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-100 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 border-b border-zinc-800 pb-6">
          <h1 className="text-4xl font-serif uppercase tracking-wide text-zinc-100">{service.title}</h1>
          <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
        </div>

        {/* Menu Items List */}
        <div className="space-y-6">
          {service.items.map((item, index) => (
            <div key={index} className="flex justify-between items-start border-b border-zinc-900 pb-4 group">
              <div className="space-y-1">
                <h3 className="text-base font-medium tracking-wide group-hover:text-amber-200 transition-colors">{item.name}</h3>
                <p className="text-xs text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {item.time}
                </p>
              </div>
              <div className="text-sm font-semibold tracking-wider text-zinc-300">{item.price}</div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="pt-4 text-center">
          <p className="text-xs text-zinc-500 italic flex items-center justify-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-300" /> Bookings are processed securely via our homepage scheduler.
          </p>
        </div>

      </div>
    </div>
  )
}