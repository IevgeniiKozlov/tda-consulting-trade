import type { Metadata } from 'next'
import { Russo_One, Space_Grotesk } from 'next/font/google'
import Footer from './(components)/Footer'
import Header from './(components)/Header'
import './globals.css'
import { Providers } from './providers'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

const russo = Russo_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-russo',
})

export const metadata: Metadata = {
  title: 'TDA Consulting Trade | Oil and Gas Industry Services',
  description:
    'TDA Consulting Trade offers comprehensive services in the oil and gas sector, including trading, quality assurance, and consulting.',
  keywords:
    'TDA Consulting Trade, oil and gas, trading, quality assurance, consulting, logistics, market analysis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${grotesk.variable} ${russo.variable}`}>
        <Providers>
          <main className='h-full bg-white bg-noise bg-cover'>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
