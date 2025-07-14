'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminDashboard() {
  const router = useRouter()
  const [admin, setAdmin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch('/laravel-api/api/v1/berita', {
          credentials: 'include',
        })

        if (res.status === 401) {
          router.push('/admin/login')
        } else {
          const data = await res.json()
          setAdmin(data)
        }
      } catch {
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    fetchAdmin()
  }, [])

  if (loading) {
    return <div className="p-6">Memuat data admin...</div>
  }

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
      <p className="text-gray-700 mb-2">Selamat datang di halaman admin Desa Menur!</p>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Contoh Data</h3>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
          {JSON.stringify(admin, null, 2)}
        </pre>
      </div>
    </section>
  )
}
