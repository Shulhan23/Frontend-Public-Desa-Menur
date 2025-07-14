// src/components/admin/AdminHeader.jsx
'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await fetch('/laravel-api/api/v1/logout', {
      method: 'POST',
      credentials: 'include',
    })
    router.push('/admin/login')
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all bg-white border-b shadow-sm ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">Admin - Desa Menur</h1>
        <nav className="flex gap-6 text-sm font-semibold text-gray-700">
          <Link href="/admin/dashboard" className={pathname === '/admin/dashboard' ? 'text-green-700' : 'hover:text-green-700'}>
            Dashboard
          </Link>
          <Link href="/admin/berita" className={pathname === '/admin/berita' ? 'text-green-700' : 'hover:text-green-700'}>
            Kelola Berita
          </Link>
          <button onClick={handleLogout} className="text-red-600 hover:underline ml-4">
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}
