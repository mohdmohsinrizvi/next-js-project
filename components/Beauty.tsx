'use client'

import { motion } from 'framer-motion'
import { Sun, Moon, Star, Heart, Sparkles, Smile } from 'lucide-react'

const beautyTraits = [
  { icon: Sun, title: 'Radiant Smile', description: 'Aradhya\'s smile outshines the sun, lighting up every room she enters and warming the hearts of all around her.' },
  { icon: Moon, title: 'Enchanting Eyes', description: 'Her eyes are like the night sky, deep and mysterious, sparkling with the light of a thousand stars.' },
  { icon: Star, title: 'Ethereal Grace', description: 'Aradhya moves with an effortless grace that seems almost otherworldly, captivating everyone in her presence.' },
  { icon: Heart, title: 'Alluring Charm', description: 'Her charm is irresistible, drawing people in with a magnetic allure that\'s impossible to ignore.' },
  { icon: Sparkles, title: 'Flawless Complexion', description: 'Aradhya\'s skin glows with a natural radiance, smooth and flawless like the finest porcelain.' },
  { icon: Smile, title: 'Mesmerizing Aura', description: 'There\'s an indescribable aura about her that mesmerizes everyone, making her the center of attention wherever she goes.' },
]

export default function Beauty() {
  return (
    <section id="beauty" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold mb-12 text-center text-gold">Aradhya&apos;s Breathtaking Beauty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beautyTraits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <trait.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-2xl font-playfair font-bold mb-2">{trait.title}</h3>
              <p className="text-gray-300">{trait.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

