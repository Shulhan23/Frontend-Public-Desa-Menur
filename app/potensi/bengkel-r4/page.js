import Image from 'next/image'

export const metadata = {
  title: 'Bengkel Roda 4 - Desa Menur',
  description: 'Daftar Bengkel Mobil (Roda 4) di Desa Menur',
}

export default function BengkelR4Page() {
  const data = [
    { nama: 'ROKALI', lokasi: 'RT 3 RW 3' },
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Bengkel Mobil (Roda 4)</h1>

      <Image
        src="/assets/potensi/bengkel-r4.jpg"
        alt="Bengkel Mobil"
        width={800}
        height={400}
        className="w-full h-auto rounded-2xl shadow mb-8 object-cover"
      />

      <p className="text-lg mb-6 text-justify">
        Usaha perbengkelan roda empat turut membantu masyarakat dalam merawat dan memperbaiki kendaraan mobil pribadi maupun niaga di Desa Menur.
      </p>

      <ul className="space-y-4">
        {data.map((item, i) => (
          <li key={i} className="p-4 bg-gray-100 rounded-xl shadow">
            <span className="block font-semibold text-lg">{item.nama}</span>
            <span className="text-gray-700">{item.lokasi}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
