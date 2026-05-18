'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calendar, User, Phone, Sparkles } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '', phone: '', service: 'General Inquiry', date: '', time: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappNumber = '919876543210'
    const message = `Hello Velvet & Vine Salon! ✨\n\nI would like to request an appointment:\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n💇‍♀️ *Service:* ${formData.service}\n📅 *Date:* ${formData.date}\n⏰ *Preferred Time:* ${formData.time}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
    setIsBookingOpen(false)
  }

  return (
    <div className="bg-background text-foreground min-h-screen relative">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-foreground/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-xs uppercase tracking-widest text-background hover:opacity-80">Home</Link>
            <Link href="#about" className="text-xs uppercase tracking-widest text-background hover:opacity-80">About</Link>
            <Link href="#services" className="text-xs uppercase tracking-widest text-background hover:opacity-80">Services</Link>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-lg md:text-xl font-serif uppercase tracking-widest text-background">Velvet & Vine</div>
            <div className="text-xs uppercase tracking-widest text-background/70">Salon</div>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/policies" className="text-xs uppercase tracking-widest text-background hover:opacity-80">Policies</Link>
            <Link href="/join-the-team" className="text-xs uppercase tracking-widest text-background hover:opacity-80">Join the Team</Link>
            <button onClick={() => setIsBookingOpen(true)} className="text-xs uppercase tracking-widest text-foreground bg-background px-4 py-2 rounded-full font-medium hover:bg-background/90 transition-colors shadow-sm">
              Book Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-background" /> : <Menu className="w-6 h-6 text-background" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <Image src="/hero-salon.jpg" alt="Luxury salon interior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-4">
            <p className="text-xs md:text-sm uppercase tracking-widest text-background/90">Upscale Hair Experience & Luxury Aesthetics</p>
            <h1 className="text-5xl md:text-7xl font-serif uppercase tracking-wide text-background leading-tight">Luxury Hair,<br />Refined Elegance</h1>
          </div>
        </div>
      </section>

      {/* Services Section with Updated Neutral Background */}
      <section id="services" className="bg-zinc-900 border-t border-zinc-800 py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-wide text-background">Luxury Hair Services,<br />Curated for You</h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Select a category below to explore our detailed service menu on a dedicated page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* These links route to the dynamic sub-pages */}
            <Link href="/services/custom-color" className="group relative overflow-hidden rounded-lg h-96 cursor-pointer shadow-xl">
              <Image src="/service-color.jpg" alt="Custom Color" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-background text-center px-4 mb-2">Custom Color</h3>
                <span className="text-[10px] text-background/70 uppercase tracking-widest border border-background/30 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">View Menu</span>
              </div>
            </Link>

            <Link href="/services/hair-cut-and-styling" className="group relative overflow-hidden rounded-lg h-96 cursor-pointer shadow-xl">
              <Image src="/service-products.jpg" alt="Hair Cut & Styling" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-background text-center px-4 mb-2">Hair Cut & Styling</h3>
                <span className="text-[10px] text-background/70 uppercase tracking-widest border border-background/30 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">View Menu</span>
              </div>
            </Link>

            <Link href="/services/extensions" className="group relative overflow-hidden rounded-lg h-96 cursor-pointer shadow-xl">
              <Image src="/service-extensions.jpg" alt="Extensions" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-2xl md:text-3xl font-serif uppercase tracking-wide text-background text-center px-4 mb-2">Extensions</h3>
                <span className="text-[10px] text-background/70 uppercase tracking-widest border border-background/30 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm">View Menu</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-wide text-foreground leading-tight">We Believe Your Hair Is a Reflection of Who You Are</h2>
          <button onClick={() => setIsBookingOpen(true)} className="px-8 py-3 bg-foreground text-background text-xs uppercase tracking-widest hover:bg-foreground/80 transition-colors duration-300 mt-8">Book Now</button>
        </div>
      </section>

      {/* Booking Modal Element */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsBookingOpen(false)} />
            <motion.div className="relative bg-background text-foreground w-full max-w-md p-6 md:p-8 rounded-xl z-10" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button onClick={() => setIsBookingOpen(false)} className="absolute top-4 right-4 text-foreground/60"><X className="w-5 h-5" /></button>
              <div className="text-center space-y-2 mb-6">
                <h3 className="text-2xl font-serif uppercase tracking-wide">Request Booking</h3>
              </div>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60"><User className="w-3 h-3 inline mr-1" /> Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Aditi Sharma" className="w-full px-3 py-2 text-sm bg-muted/40 border border-border rounded-md text-foreground" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/60"><Phone className="w-3 h-3 inline mr-1" /> Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="9876543210" className="w-full px-3 py-2 text-sm bg-muted/40 border border-border rounded-md text-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" name="date" required value={formData.date} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-muted/40 border border-border rounded-md text-foreground" />
                  <input type="time" name="time" required value={formData.time} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-muted/40 border border-border rounded-md text-foreground" />
                </div>
                <button type="submit" className="w-full bg-foreground text-background py-3 font-semibold rounded-md uppercase tracking-widest text-xs">Confirm via WhatsApp 💬</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}