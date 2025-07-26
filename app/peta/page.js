'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PemetaanPage() {
  return (
    <main className="px-4 py-16 bg-white text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Judul Halaman */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pemetaan Wilayah Desa Menur
        </motion.h1>

        {/* Peta Tata Guna Lahan */}
        <section className="mb-20">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Peta Tata Guna Lahan
          </motion.h2>

          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <Image
              src="/assets/maps/PETA-INKLUSI-PUPUK-KIMIA.webp" // Ganti sesuai path gambar kamu
              alt="Peta Tata Guna Lahan"
              width={1200}
              height={800}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-700 font-serif text-justify">
            Peta ini menunjukkan distribusi penggunaan lahan di Desa Menur, seperti area pertanian, pemukiman, dan fasilitas umum berdasarkan wilayah RT/RW.
          </p>
        </section>

        {/* Peta Inklusi Pupuk Kimia */}
        <section>
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Peta Inklusi Pupuk Kimia
          </motion.h2>

          <div className="rounded-lg overflow-hidden shadow-md mb-4">
            <Image
              src="/assets/maps/PETA-INKLUSI-PUPUK-KIMIA.webp" // Ganti sesuai path gambar kamu
              alt="Peta Inklusi Pupuk Kimia"
              width={1200}
              height={800}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-700 font-serif text-justify">
            Peta ini menggambarkan potensi pencemaran lingkungan akibat penggunaan pupuk kimia di wilayah pertanian dan perairan. Warna merah menunjukkan potensi tinggi, kuning sedang, dan hijau rendah.
          </p>
        </section>
      </div>
    </main>
  )
}
