'use client'
import Header from './header'
import Footer from './footer'
import { usePathname } from 'next/navigation'

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Konten utama */}
      <main className={`flex-grow ${!isHome ? 'pt-[80px]' : ''}`}>
        {children}
      </main>

      <Footer />
    </div>
  )
}
