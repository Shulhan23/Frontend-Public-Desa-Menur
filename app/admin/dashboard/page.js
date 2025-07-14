'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cek apakah user sudah login (berbasis cookie session Sanctum)
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/v1/berita', {
          credentials: 'include',
        });

        if (res.status === 401) {
          router.push('/admin/login'); // redirect kalau belum login
        } else {
          const data = await res.json();
          setAdmin(data); // bisa ubah ini jika kamu punya endpoint profile admin
        }
      } catch (err) {
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  const handleLogout = async () => {
    await fetch('http://localhost:8000/api/v1/logout', {
      method: 'POST',
      credentials: 'include',
    });

    router.push('/admin/login');
  };

  if (loading) {
    return <div className="p-6">Memuat data admin...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {/* Konten */}
      <main className="p-6">
        <p className="text-lg">Selamat datang di halaman admin!</p>
        <p className="text-gray-600 mt-2">Anda sekarang sudah login.</p>
      </main>
    </div>
  );
}
