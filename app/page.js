'use client'
import dynamic from 'next/dynamic'
import Link from 'next/link'
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
          <h2 className="text-3xl font-bold mb-6 font-sans text-gray-800">Peta Interaktif Desa Menur</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px]">
            <PetaDesa />
          </div> 
        </div>
      </section>

      {/* PETA TATA GUNA LAHAN & INKLUSI PUPUK */}
      <section className="py-20 bg-white" id="pemetaan-desa">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 font-sans">
            Peta Tata Guna Lahan & Inklusi Pupuk Kimia
          </h2>

          {/* PETA TATA GUNA LAHAN */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Peta Tata Guna Lahan</h3>
            <img
              src="/assets/peta/peta-tata-guna.jpg" // Ganti dengan path gambar kamu
              alt="Peta Tata Guna Lahan Desa Menur"
              className="w-full rounded-lg shadow-md object-contain"
            />
            <p className="text-gray-700 mt-4 font-serif text-justify">
              Peta ini menggambarkan distribusi penggunaan lahan di Desa Menur, mencakup area pertanian, pemukiman, dan fasilitas umum berdasarkan wilayah RT/RW yang ada.
            </p>
          </div>

          {/* PETA INKLUSI PUPUK KIMIA */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Peta Inklusi Pupuk Kimia</h3>
            <img
              src="/assets/peta/peta-inklusi-pupuk.jpg" // Ganti dengan path gambar kamu
              alt="Peta Inklusi Pupuk Kimia Desa Menur"
              className="w-full rounded-lg shadow-md object-contain"
            />
            <p className="text-gray-700 mt-4 font-serif text-justify">
              Peta ini menunjukkan potensi pencemaran lingkungan akibat penggunaan pupuk kimia di wilayah pertanian dan perairan Desa Menur. Zona merah menunjukkan tingkat pencemaran tinggi, kuning sedang, dan hijau rendah.
            </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <a href="/potensi/kuliner" className="block rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">
            <img
              src="/assets/potensi/pariwisata.jpg"
              alt="Kuliner"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-lg font-bold text-center text-gray-800">Usaha Kuliner</h3>
          </a>

          {/* Card 2 */}
          <a href="/potensi/tempe" className="block rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">
            <img
              src="/assets/potensi/perikanan.jpg"
              alt="Tempe"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-lg font-bold text-center text-gray-800">Usaha Tempe</h3>
          </a>

          {/* Card 3 */}
          <a href="/potensi/bengkel-spm" className="block rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">
            <img
              src="/assets/potensi/kerajinan.jpg"
              alt="Kerajinan"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-lg font-bold text-center text-gray-800">Usaha Bengkel SPM</h3>
          </a>

          {/* Card 4 */}
          <a href="/potensi/bengkel-r4" className="block rounded-lg shadow-md hover:shadow-lg transition p-4 bg-white">
            <img
              src="/assets/potensi/pakaian.jpg"
              alt="Pakaian"
              className="rounded-lg object-cover w-full h-48 mb-4"
            />
            <h3 className="text-lg font-bold text-center text-gray-800">Usaha Bengekl R4</h3>
          </a>
        </div>
      </div>
    </section>
    </main>
  )
}
