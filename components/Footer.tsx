import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Aradhya Tribute. All Rights Reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#gallery" className="hover:text-gold transition duration-300">Our Moments</Link></li>
              <li><Link href="#beauty" className="hover:text-gold transition duration-300">Aradhya's Beauty</Link></li>
              <li><Link href="#love-story" className="hover:text-gold transition duration-300">Our Love Story</Link></li>
              <li><Link href="#message-board" className="hover:text-gold transition duration-300">Love Notes</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

