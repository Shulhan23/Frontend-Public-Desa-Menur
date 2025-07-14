'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const API = process.env.NEXT_PUBLIC_API_URL

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Ambil CSRF cookie jika perlu (bisa tetap pakai ini untuk Sanctum)
      await fetch(`${API}/sanctum/csrf-cookie`, {
        credentials: 'include',
      })

      const response = await fetch(`${API}/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Login gagal')
      }

      const data = await response.json()

      // ✅ Simpan token ke localStorage, bukan cookies
      localStorage.setItem('admin-token', data.token)

      // Redirect ke dashboard
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login Admin</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <input type="email" required className="mb-3 w-full" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" required className="mb-4 w-full" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
          {loading ? 'Memproses...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
