'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import {
  MapPin,
  Users,
  User2,
  Home,
  Landmark,
  FileText,
} from 'lucide-react'

export default function LamanAdministrasi() {
  const dataKK = [
    { name: 'Laki-Laki', jumlah: 1309 },
    { name: 'Perempuan', jumlah: 185 },
  ]

  const dataPenduduk = [
    { name: 'Laki-Laki', jumlah: 2394 },
    { name: 'Perempuan', jumlah: 2298 },
  ]

  const Box = ({ children, className = '' }) => (
    <div className={`bg-lime-200 text-center rounded-2xl p-5 shadow font-medium text-gray-800 ${className}`}>
      {children}
    </div>
  )

  return (
    <main className="w-full max-w-[1440px] mx-auto pt-28 px-4 md:px-12 space-y-16">
        {/* SECTION PEMBUKA DENGAN IKON DI KANAN */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-xl shadow-lg ">
        {/* TEKS DI KIRI */}
        <div className="text-left space-y-3 max-w-xl">
            <h2 className="text-2xl font-bold text-lime-700">Informasi Administratif Desa</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
            Data administratif Desa Menur menyajikan informasi lengkap seputar struktur kewilayahan,
            jumlah RW dan RT, data kepala keluarga, serta total penduduk berdasarkan jenis kelamin.
            Informasi ini disajikan secara visual agar mudah dipahami oleh masyarakat.
            </p>
        </div>

        {/* IKON DI KANAN */}
        <div className="text-lime-600">
            <FileText size={80} strokeWidth={1.5} className="mx-auto" />
        </div>
        </section>

      {/* Wilayah Dukuh */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-lime-700">
          <MapPin size={28} />
          <h2 className="text-2xl font-semibold">Wilayah Dukuh</h2>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <Box>Dukuh Menur</Box>
          <Box>Dukuh Semen</Box>
        </div>
      </section>

      {/* RW & RT */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-yellow-700">
          <Landmark size={28} />
          <h2 className="text-2xl font-semibold">Jumlah RW & RT</h2>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <Box>
            <p className="text-5xl">4</p>
            <p>RW</p>
          </Box>
          <Box>
            <p className="text-5xl">27</p>
            <p>RT</p>
          </Box>
        </div>
      </section>

      {/* Jumlah Kepala Keluarga */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-green-700 justify-center">
          <Home size={28} />
          <h2 className="text-2xl font-semibold">Jumlah Kepala Keluarga</h2>
        </div>
        <div className="flex justify-center">
          <Box className="w-full max-w-md bg-green-300 text-4xl">
            1.494 Kepala Keluarga
          </Box>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataKK}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            <p className="font-medium text-gray-700">Rincian Kepala Keluarga:</p>
            <Box>Kepala Keluarga Laki-Laki: 1.309</Box>
            <Box>Kepala Keluarga Perempuan: 185</Box>
          </div>
        </div>
      </section>

      {/* Jumlah Penduduk */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-blue-700 justify-center">
          <Users size={28} />
          <h2 className="text-2xl font-semibold">Jumlah Penduduk</h2>
        </div>
        <div className="flex justify-center">
          <Box className="text-4xl bg-blue-300 w-full max-w-md">
            4.692 Penduduk
          </Box>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataPenduduk}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            <p className="font-medium text-gray-700">Rincian Penduduk:</p>
            <Box className="bg-blue-300">Penduduk Laki-Laki: 2.394</Box>
            <Box className="bg-pink-300">Penduduk Perempuan: 2.298</Box>
          </div>
        </div>
      </section>
    </main>
  )
}
