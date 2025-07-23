export const metadata = {
  title: 'Bengkel SPM - Desa Menur',
  description: 'Daftar Bengkel Sepeda Motor di Desa Menur',
}

export default function BengkelSPMPage() {
  const bengkelList = [
    { nama: 'ARIF WAHYUDIN', lokasi: 'RT 3 RW 1' },
    { nama: 'Joko Samudro', lokasi: 'RT 5 RW 1' },
    { nama: 'Ahsin Sholehan', lokasi: 'RT 7 RW 1' },
    { nama: 'Andri Jaka Pratama', lokasi: 'RT 1 RW 2' },
    { nama: 'Rofi\'i', lokasi: 'RT 1 RW 2' },
    { nama: 'Nur Rofiq', lokasi: 'RT 3 RW 4' },
    { nama: 'Kasmiran', lokasi: 'RT 4 RW 4' },
  ]

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Bengkel Sepeda Motor (SPM)</h1>

      <Image
        src="/images/potensi/bengkel.jpg"
        alt="Bengkel di Desa Menur"
        width={800}
        height={400}
        className="w-full h-auto rounded-2xl shadow mb-8 object-cover"
      />

      <p className="text-lg mb-6 text-justify">
        Berikut adalah daftar usaha bengkel sepeda motor (SPM) yang tersebar di berbagai RT dan RW di Desa Menur. Mereka menyediakan layanan perawatan dan perbaikan kendaraan roda dua bagi masyarakat sekitar.
      </p>

      <ul className="space-y-4">
        {bengkelList.map((bengkel, i) => (
          <li key={i} className="p-4 bg-gray-100 rounded-xl shadow">
            <span className="block font-semibold text-lg">{bengkel.nama}</span>
            <span className="text-gray-700">{bengkel.lokasi}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
