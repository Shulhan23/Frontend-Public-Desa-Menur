import Link from 'next/link'

// Fungsi untuk memformat tanggal ke format Indonesia
function formatTanggal(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

export default async function BeritaPage() {
  const res = await fetch('https://api.desamenur.com/api/v1/berita', {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Respon error dari backend:', text)
    throw new Error('Gagal mengambil data berita')
  }

  const beritaList = await res.json()

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-4 lg:px-8 bg-gradient-to-b from-white to-white min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-green-500 inline-block pb-2">
        Berita Desa
      </h1>

      <p className="text-gray-700 text-base mb-10 max-w-3xl">
        Temukan informasi terbaru seputar kegiatan, pengumuman resmi, dan perkembangan terkini di Desa Menur. 
        Semua berita disampaikan langsung oleh Pemerintah Desa sebagai bentuk transparansi dan keterbukaan informasi bagi masyarakat.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beritaList.map((berita) => (
          <Link
            href={`/berita/${berita.id}`}
            key={berita.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            {berita.gambar && (
              <img
                src={`https://api.desamenur.com/storage/${berita.gambar}`}
                alt={berita.judul}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-blue-900 mb-1">
                {berita.judul}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {formatTanggal(berita.created_at)}
              </p>
              <p className="text-gray-700 text-sm line-clamp-5">
                {berita.isi}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
