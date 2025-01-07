import './globals.css'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
})

export const metadata = {
  title: 'Aradhya - A Tribute',
  description: 'A luxurious tribute to the beloved Aradhya, showcasing her beauty, talents, and virtues.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="bg-gray-900 text-gray-100 font-cormorant">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}



