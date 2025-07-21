'use client'
import dynamic from 'next/dynamic'
import { Newspaper, MapPinned, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'

const PetaDesa = dynamic(() => import('@/components/public/PetaDesa'), { ssr: false })

export default function HomePage() {
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
          <source src="/assets/banner website menur.mp4" type="video/mp4" />
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
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full sm:w-64 text-center"
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

            {/* Bawah Kiri dan Kanan */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full sm:w-64 text-center"
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

              <motion.div
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full sm:w-64 text-center"
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
            </div>
          </div>
        </div>
      </section>

      {/* PETA DESA */}
      <section className="px-4 pb-24" id="peta-desa">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-800">Peta Interaktif Desa Menur</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px]">
            <PetaDesa />
          </div> 
        </div>
      </section>
    </main>
  )
}
