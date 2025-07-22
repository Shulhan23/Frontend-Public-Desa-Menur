'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import {
  MapPin,
  Users,
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

  const dataAgama = [
    { name: 'Islam', jumlah: 4691 },
    { name: 'Kristen', jumlah: 1 },
  ]

  const dataPekerjaan = [
    { name: 'Pedagang', jumlah: 59 },
    { name: 'Pengrajin', jumlah: 186 },
    { name: 'PNS', jumlah: 25 },
    { name: 'Montir', jumlah: 10 },
    { name: 'Karyawan Swasta', jumlah: 725 },
    { name: 'Peternak', jumlah: 93 },
    { name: 'Buruh Tani', jumlah: 241 },
    { name: 'Petani', jumlah: 659 },
    { name: 'TNI', jumlah: 5 },
    { name: 'Polri', jumlah: 6 },
    { name: 'Penjahit', jumlah: 12 },
    { name: 'Sopir', jumlah: 8 },
    { name: 'Tukang Kayu', jumlah: 35 },
    { name: 'Tukang Batu', jumlah: 212 },
    { name: 'Guru Swasta', jumlah: 50 },
    { name: 'PPPK', jumlah: 8 },
  ]

  const dataPBB = [
    { year: '2019', jumlah: 267 },
    { year: '2020', jumlah: 266 },
    { year: '2021', jumlah: 266 },
    { year: '2022', jumlah: 267 },
    { year: '2023', jumlah: 243 },
    { year: '2024', jumlah: 236 },
  ]

  const dataPertanian = [
    { name: 'Padi', luas: 115, hasil: '3–6 Ton/Ha' },
    { name: 'Jagung', luas: 100, hasil: '5–7 Ton/Ha' },
  ]
  
  const dataPeternakan = [
    { jenis: 'Peternak Sapi', jumlah: 22 },
    { jenis: 'Peternak Kambing', jumlah: 11 },
  ]

    const kelompokTani = ['Sri Rejeki', 'Rojosari', 'Gemah Ripah', 'Sidomulyo']
    const komoditas = [
      'padi, jagung',
      'terong, cabe, bawang merah, bayem, kacang panjang, pare, kangkung, daun glandir',
      'pisang bibit demak, pisang raja bulu, pisang raja tonto',
    ]

  const Box = ({ children, className = '' }) => (
    <div className={`bg-lime-100 text-center rounded-xl p-4 shadow-inner font-medium text-gray-800 ${className}`}>
      {children}
    </div>
  )

  return (
    <main className="w-full max-w-[1440px] mx-auto pt-28 px-4 md:px-12 space-y-20">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-6 bg-gradient-to-br from-lime-100 to-white p-6 rounded-xl shadow-md">
        <div className="text-left space-y-3 max-w-xl">
          <h2 className="text-3xl font-extrabold text-lime-700">Informasi Administratif Desa</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Data administratif Desa Menur menyajikan informasi lengkap seputar struktur kewilayahan,
            jumlah RW dan RT, data kepala keluarga, serta total penduduk berdasarkan jenis kelamin.
            Informasi ini disajikan secara visual agar mudah dipahami oleh masyarakat.
          </p>
        </div>
        <div className="text-lime-600">
          <FileText size={80} strokeWidth={1.5} className="mx-auto" />
        </div>
      </section>

      {/* Wilayah Dukuh */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-lime-700">
          <MapPin size={28} />
          <h2 className="text-2xl font-bold">Wilayah Dukuh</h2>
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
          <h2 className="text-2xl font-bold">Jumlah RW & RT</h2>
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

      {/* Kepala Keluarga */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-green-700 justify-center">
          <Home size={28} />
          <h2 className="text-2xl font-bold">Jumlah Kepala Keluarga</h2>
        </div>
        <div className="flex justify-center">
          <Box className="w-full max-w-md bg-green-200 text-4xl">
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
              <Legend />
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

      {/* Penduduk */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-blue-700 justify-center">
          <Users size={28} />
          <h2 className="text-2xl font-bold">Jumlah Penduduk</h2>
        </div>
        <div className="flex justify-center">
          <Box className="text-4xl bg-blue-200 w-full max-w-md">
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
              <Legend />
              <Bar dataKey="jumlah" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            <p className="font-medium text-gray-700">Rincian Penduduk:</p>
            <Box className="bg-blue-200">Penduduk Laki-Laki: 2.394</Box>
            <Box className="bg-pink-200">Penduduk Perempuan: 2.298</Box>
          </div>
        </div>
      </section>

      {/* Agama */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-purple-700 justify-center">
          <Landmark size={28} />
          <h2 className="text-2xl font-bold">Jumlah Penduduk Berdasarkan Agama</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataAgama}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jumlah" fill="#a3e635" />
            </BarChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            {dataAgama.map((item) => (
              <Box key={item.name}>{item.name}: {item.jumlah}</Box>
            ))}
          </div>
        </div>
      </section>

      {/* Pekerjaan */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-rose-700 justify-center">
          <Users size={28} />
          <h2 className="text-2xl font-bold">Jumlah Penduduk Berdasarkan Pekerjaan</h2>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dataPekerjaan}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="jumlah" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* PBB */}
      <section className="space-y-4">
        <div className="flex flex-col items-center gap-1 text-indigo-700 text-center">
          <div className="flex items-center gap-2">
            <FileText size={28} />
            <h2 className="text-2xl font-bold">Data Pajak Bumi Bangunan (PBB)</h2>
          </div>
          <p className="text-sm text-gray-500">(dalam juta rupiah)</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataPBB}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              tickFormatter={(value) => `${value}`}
              label={{
                value: 'PBB (juta)',
                angle: -90,
                position: 'insideLeft',
                fill: '#6b7280',
                fontSize: 12,
              }}
            />
            <Tooltip formatter={(value) => `${value} juta`} />
            <Legend />
            <Bar dataKey="jumlah" fill="#818cf8" />
          </BarChart>
        </ResponsiveContainer>
      </section>

     <section className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
              Pertanian Desa Menur
            </h1>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* KELOMPOK TANI */}
              <div className="bg-green-500 text-white rounded-2xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-3">4 KELOMPOK TANI :</h2>
                <ul className="list-disc list-inside space-y-1">
                  {kelompokTani.map((nama, idx) => (
                    <li key={idx} className="font-semibold">{nama}</li>
                  ))}
                </ul>
              </div>
    
              {/* KOMODITAS */}
              <div className="bg-green-500 text-white rounded-2xl p-6 shadow-md">
                <h2 className="text-xl font-bold mb-3">KOMODITAS :</h2>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {komoditas.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

      {/* PERTANIAN */}
      <section className="space-y-6">
        <div className="text-center text-green-700">
          <h2 className="text-2xl font-bold">Data Pertanian</h2>
        </div>

        {/* LUAS LAHAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {dataPertanian.map((item) => (
            <Box key={item.name} className="bg-green-200">
              <p className="text-3xl font-bold">{item.luas} Ha</p>
              <p className="text-sm text-gray-700">Luas Lahan Tanam {item.name}</p>
            </Box>
          ))}
        </div>

        {/* HASIL PANEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {dataPertanian.map((item) => (
            <Box key={item.name + '-hasil'} className="bg-green-300">
              <p className="text-lg font-bold">{item.hasil}</p>
              <p className="text-sm text-gray-700">Hasil Panen {item.name} per Tahun</p>
              <p className="text-xs text-gray-500">Menurut BPS</p>
            </Box>
          ))}
        </div>

        {/* JUMLAH PETANI */}
        <div className="flex justify-center">
          <Box className="bg-green-400 text-3xl font-bold">
            659
            <div className="text-base font-normal">Jumlah Petani di Desa Menur</div>
          </Box>
        </div>
      </section>

      {/* PETERNAKAN */}
      <section className="space-y-6">
        <div className="text-center text-amber-700">
          <h2 className="text-2xl font-bold">Data Peternakan</h2>
        </div>

        {/* CHART PETERNAKAN */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataPeternakan}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="jenis" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="jumlah" fill="#fbbf24" />
          </BarChart>
        </ResponsiveContainer>

        {/* JUMLAH PETERNAK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {dataPeternakan.map((item) => (
            <Box key={item.jenis} className="bg-yellow-100 text-xl">
              <p className="font-bold">{item.jumlah}</p>
              <p className="text-sm text-gray-700">Warga {item.jenis.toUpperCase()}</p>
            </Box>
          ))}
        </div>
      </section>

    </main>
  )
}
