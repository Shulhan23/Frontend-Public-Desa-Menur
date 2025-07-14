'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_API_URL

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('admin-token')
    if (!token) {
      router.push('/admin/login')
      return
    }

    const validate = async () => {
      try {
        const res = await fetch(`${API}/api/v1/check`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        })

        if (!res.ok) {
          localStorage.removeItem('admin-token')
          router.push('/admin/login')
        }
      } catch {
        localStorage.removeItem('admin-token')
        router.push('/admin/login')
      } finally {
        setLoading(false)
      }
    }

    validate()
  }, [router])

  if (loading) return <div className="p-6">Memuat halaman...</div>

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
      <p className="text-gray-700">Selamat datang, Anda telah login sebagai admin.</p>
    </section>
  )
}
