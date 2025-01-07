'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya smiling' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya in nature' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya reading' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya painting' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya dancing' },
  { src: '/placeholder.svg?height=600&width=800', alt: 'Aradhya with friends' },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold mb-12 text-center text-gold">Cherished Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-w-4 aspect-h-3 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg transition duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

