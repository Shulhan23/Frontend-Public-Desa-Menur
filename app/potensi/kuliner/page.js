'use client'
import { useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

export default function KulinerPage() {
  useEffect(() => {
    document.title = 'Usaha Kuliner | Desa Menur'
  }, [])

  const dataKuliner = [
    'Nasi Goreng Mas Tiyo – RT 1 RW 1',
    'Es Degan Mbak Siti Rohmah – RT 5 RW 1',
    'Aneka Es & Gorengan Mbak AL QOMAH – RT 5 RW 1',
    'Aneka Gorengan Mbak Mustofiyah – RT 1 RW 1',
    'Mie Ayam Mbak JUMINAH – RT 5 RW 1',
    'Nasi & Gendar Pecel Mbak Mursiah – RT 4 RW 1',
    'Aneka Es Syirup & Gorengan Mbak Umi Saadah – RT 1 RW 2',
    'Es Kuwud & Pecel Mbak Suwaibah – RT 3 RW 2',
    'Mie Ayam Mbak Misroch – RT 3 RW 2',
    'Aneka Gorengan & Pecel Yuu SITI – RT 4 RW 2',
    'Angkringan Mas SYAIKUN – RT 4 RW 2',
    'Es Syirup & Gorengan Mbak Arum – RT 5 RW 2',
    'Es Teh Mas ZÊN – RT 5 RW 2',
    'Es Teh & Gorengan Mas ZÊN – RT 2 RW 2',
    'Lontong Campur Ibu Suripah – RT 2 RW 3',
    'Aneka Gorengan & Lontong Campur Mbak Darfiyah – RT 2 RW 3',
    'Aneka Sayur Mateng, Tumis & Gorengan Mbak DAR – RT 3 RW 3',
    'Mie Ayam & Bakso Bang Rondi – RT 4 RW 3',
    'Mie Ayam Mbak Juminah – RT 4 RW 3',
    'Aneka Sayur Mateng & Gorengan Ibu Muntomah – RT 1 RW 4',
    'Es Kopi & Siomay Bakar Mbak Nurul – RT 3 RW 4',
    'Ayam Goreng Kremes Pak Ashari – RT 4 RW 4',
    'Aneka Es & Gorengan Pak Joko – RT 9 RW 4',
  ]

  return (
    <main className="max-w-6xl mx-auto py-24 px-6">
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-green-800 mb-4 border-b-2 border-yellow-600 pb-2">
          Usaha Kuliner Warga
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Desa Menur kaya akan ragam kuliner khas rumahan yang dibuat langsung oleh warga.
          Berikut adalah daftar UMKM bidang kuliner yang tersebar di berbagai RT dan RW,
          mencerminkan semangat gotong royong dan cita rasa lokal.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataKuliner.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-50 border border-yellow-200 shadow-md p-5 rounded-xl transition duration-200 hover:shadow-xl"
          > 
            <div className="flex items-start gap-3">
              <ChevronRight className="text-green-700 mt-1" />
              <p className="text-gray-800 font-medium">{item}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
