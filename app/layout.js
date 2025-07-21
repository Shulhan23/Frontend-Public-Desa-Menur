import '../styles/globals.css'
import LayoutClient from '@/components/public/LayoutClient'

// ✅ Tambahkan import font
import { Poppins, Merriweather } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
})

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Desa Menur',
  description: 'Website Resmi Desa Menur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${poppins.variable} ${merriweather.variable}`}>
      <body className="font-sans">
        {/* LayoutClient hanya untuk publik */}
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Website Resmi Desa Menur',
  description: 'Informasi resmi, berita desa, dan layanan publik Desa Menur.',
  keywords: ['Desa Menur', 'Pemerintahan Desa', 'Website Resmi'],
  authors: [{ name: 'Desa Menur' }],
  robots: 'index, follow',
}

