'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-playfair font-bold text-gold">Aradhya</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#gallery" className="hover:text-gold transition duration-300">Our Moments</Link></li>
              <li><Link href="#beauty" className="hover:text-gold transition duration-300">Aradhya&apos;s Beauty</Link></li>
              <li><Link href="#love-story" className="hover:text-gold transition duration-300">Our Love Story</Link></li>
              <li><Link href="#message-board" className="hover:text-gold transition duration-300">Love Notes</Link></li>
            </ul>
          </nav>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 py-4"
        >
          <nav>
            <ul className="flex flex-col items-center space-y-4">
              <li><Link href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-gold transition duration-300">Our Moments</Link></li>
              <li><Link href="#beauty" onClick={() => setIsOpen(false)} className="hover:text-gold transition duration-300">Aradhya&apos;s Beauty</Link></li>
              <li><Link href="#love-story" onClick={() => setIsOpen(false)} className="hover:text-gold transition duration-300">Our Love Story</Link></li>
              <li><Link href="#message-board" onClick={() => setIsOpen(false)} className="hover:text-gold transition duration-300">Love Notes</Link></li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

