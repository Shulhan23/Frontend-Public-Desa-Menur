// app/layout.js
import '../styles/globals.css'
import LayoutClient from '@/components/LayoutClient'

export const metadata = {
  title: 'Desa Menur',
  description: 'Website Resmi Desa Menur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}
