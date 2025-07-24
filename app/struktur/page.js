'use client'

import Image from 'next/image'

export default function StrukturOrganisasi() {
  return (
    <main className="max-w-5xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Struktur Organisasi Desa Menur
      </h1>

      <Image
        src="/assets/Dukuh Menur.png"
        alt="Struktur Organisasi Dukuh Menur"
        width={1000}
        height={700}
        className="mx-auto rounded shadow"
      />
    </main>
  )
}
