'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Newspaper, MapPinned, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'

const PetaDesa = dynamic(() => import('@/components/public/PetaDesa'), { ssr: false })

export default function HomePage() {

    const [jenisList, setJenisList] = useState([])
    const fetchJenis = async () => {
      try {
        const res = await fetch('/laravel-api/api/v1/jenis-umkm', {
          headers: {
            Accept: 'application/json',
          },
          credentials: 'omit', // <- ini penting jika endpoint tidak butuh cookie auth
        })

        if (!res.ok) throw new Error('Gagal fetch data jenis')

        const data = await res.json()
        console.log('Data jenis dari API:', data)
        setJenisList(data)
      } catch (err) {
        console.error('Gagal mengambil jenis UMKM:', err)
      }
    }
    useEffect(() => {
      fetchJenis()
    }, [])

    console.log('Isi jenisList:', jenisList)


  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video sebagai latar belakang */}
          <video
            autoPlay
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
          <source src="/assets/banner-web.mp4" type="video/mp4" />
          Browser kamu tidak mendukung pemutaran video.
        </video>

        {/* Overlay dan konten */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4 z-10">
          <motion.div
            className="text-white max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 font-sans drop-shadow-lg">
              Selamat Datang di Desa Menur
            </h1>
            <a
              href="/profil"
              className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition font-sans"
            >
              Lihat Profil Desa
            </a>
          </motion.div>
        </div>
      </section>

      {/* INFO BOXES */}
      <section className="py-16" id="profil-desa">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-start justify-between gap-12">
          {/* TEKS DI KIRI */}
          <motion.div
            className="md:w-1/2 flex flex-col justify-center h-auto mt-12 md:mt-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Desa Menur</h2>
            <p className="text-gray-700 font-serif leading-relaxed text-justify">
              Desa Menur adalah salah satu dari 19 desa yang terletak di Kecamatan Mranggen, Kabupaten Demak. Desa Menur memiliki luas sebesar 3,37 km2 yang didominasi oleh Lahan Pertanian Padi dan Jagung. Dapatkan informasi desa lebih lanjut disini
            </p>
          </motion.div>

          {/* PIRAMIDA */}
          <div className="md:w-1/2 flex flex-col items-center space-y-6">
            {/* Atas Tengah */}
            <Link href="/profil" className="w-full sm:w-64">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <MapPinned className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sans text-gray-800">Wilayah Desa</h3>
                <p className="text-gray-700 font-serif">
                  Informasi geografi dan batas wilayah Desa Menur.
                </p>
              </motion.div>
            </Link>

            {/* Bawah Kiri dan Kanan */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/administrasi" className="w-full sm:w-64">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Users2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sans text-gray-800">Penduduk</h3>
                <p className="text-gray-700 font-serif">
                  Jumlah, statistik, dan info kependudukan terkini.
                </p>
              </motion.div>
            </Link>
                
            <Link href="/berita" className="w-full sm:w-64">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Newspaper className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 font-sans text-gray-800">Berita Terkini</h3>
                <p className="text-gray-700 font-serif">
                  Update kegiatan dan informasi resmi dari desa.
                </p>
              </motion.div>
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PETA DESA */}
      <section className="px-4 pb-24" id="peta-desa">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans text-gray-800">Peta Interaktif Desa Menur</h2>
          <p className="text-gray-600 font-serif mb-6">
            Jelajahi wilayah desa secara interaktif. Untuk peta lainnya seperti tata guna lahan dan inklusi pupuk kimia, klik tombol di bawah ini.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px]">
            <PetaDesa />
          </div> 

          {/* Tombol Lihat Peta Lainnya */}
          <div className="mt-8">
            <a
              href="/peta"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition"
            >
              Lihat Peta Lebih Banyak
            </a>
          </div>
        </div>
      </section>

    <section className="bg-gray-50 py-20" id="potensi-desa">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-black-600 font-sans mb-2">UMKM Desa</h2>
            <p className="text-gray-700 font-serif max-w-xl">
              Berbagai potensi usaha mikro dan kecil yang tumbuh di Desa Menur, mendukung ekonomi lokal dengan semangat gotong royong.
            </p>
          </div>
        </div>

        {/* Potensi Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {jenisList.map((jenis) => (
            <motion.div
              key={jenis.id}
              className="bg-white shadow-md rounded-2xl p-4"
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-xl font-semibold mb-2">{jenis.nama_jenis}</h2>
              
              <Link
                href={`/potensi/jenis/${jenis.slug}`}
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                Lihat UMKM
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </main>
  )
}
