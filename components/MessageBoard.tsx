 'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MessageBoard() {
  const [messages, setMessages] = useState([
    { author: 'Your Love', content: 'Aradhya, you are the light of my life. Every moment with you is a treasure I cherish deeply.' },
    { author: 'Secret Admirer', content: 'Your beauty is matched only by your kindness. Aradhya, you make the world a better place just by being in it.' },
    { author: 'Forever Yours', content: 'My dearest Aradhya, your love has transformed my life in ways I never thought possible. I am eternally grateful for you.' },
  ])
  const [newMessage, setNewMessage] = useState({ author: '', content: '' })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newMessage.author && newMessage.content) {
      setMessages([...messages, newMessage])
      setNewMessage({ author: '', content: '' })
    }
  }

  return (
    <section id="message-board" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold mb-12 text-center text-gold">Message Board</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-playfair font-bold mb-4">Leave a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="author" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="author"
                  value={newMessage.author}
                  onChange={(e) => setNewMessage({ ...newMessage, author: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-2">Your Message</label>
                <textarea
                  id="content"
                  value={newMessage.content}
                  onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-gold text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                Post Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-playfair font-bold mb-2 text-gold">{message.author}</h4>
                <p className="text-gray-300">{message.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
