'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const milestones = [
  { date: 'First Meeting', description: 'The day our eyes met and our hearts connected.' },
  { date: 'First Date', description: 'An unforgettable evening that marked the beginning of our journey.' },
  { date: 'Becoming Official', description: 'The moment we decided to embark on this beautiful adventure together.' },
  { date: 'First "I Love You"', description: 'Words that echoed the feelings in our hearts.' },
  { date: 'One Year Anniversary', description: 'Celebrating 365 days of love, laughter, and growth.' },
]

export default function LoveStory() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold mb-12 text-center text-gold">Our Love Story</h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-8"
            >
              <div className="w-1/4 text-right pr-4">
                <span className="text-gold font-playfair font-bold">{milestone.date}</span>
              </div>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <Heart className="text-gray-900" />
              </div>
              <div className="w-3/4 pl-4">
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

