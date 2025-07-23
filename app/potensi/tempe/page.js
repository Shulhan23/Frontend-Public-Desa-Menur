export const metadata = {
  title: 'Pengrajin Tempe - Desa Menur',
  description: 'Daftar Pengrajin Tempe di Desa Menur',
}

export default function PengrajinTempePage() {
  const data = [
    { nama: 'Busri', lokasi: 'RT 4 RW 1' },
    { nama: 'H. M. Asror', lokasi: 'RT 1 RW 3' },
    { nama: 'K. Baidlowi', lokasi: 'RT 7 RW 3' },
    { nama: 'Nurcolis', lokasi: 'RT 7 RW 3' },
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Pengrajin Tempe</h1>

      <Image
        src="/images/potensi/tempe.jpg"
        alt="Pengrajin Tempe"
        width={800}
        height={400}
        className="w-full h-auto rounded-2xl shadow mb-8 object-cover"
      />

      <p className="text-lg mb-6 text-justify">
        Tempe merupakan salah satu produk olahan kedelai yang sangat digemari masyarakat. Di Desa Menur, beberapa warga telah lama mengembangkan usaha rumahan pengolahan tempe sebagai mata pencaharian utama mereka.
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
