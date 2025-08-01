import Link from 'next/link'

// Format tanggal Indonesia
function formatTanggal(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

// Base URL backend Laravel
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Fungsi untuk mengambil gambar dari konten berita
function getGambar(berita) {
  if (!berita?.konten || !Array.isArray(berita.konten)) return null

  const gambarKonten = berita.konten.find((k) => k.tipe === 'gambar')
  if (!gambarKonten || !gambarKonten.konten) return null

  try {
    return new URL(`/storage/${gambarKonten.konten}`, BASE_URL).toString()
  } catch (error) {
    console.error('Gagal membuat URL gambar:', error)
    return null
  }
}

// Fungsi konversi tag HTML tidak semantik ke tag semantik
function convertHtmlTags(html) {
  return html
    .replace(/<b>/g, '<strong>')
    .replace(/<\/b>/g, '</strong>')
    .replace(/<i>/g, '<em>')
    .replace(/<\/i>/g, '</em>')
}


export default async function BeritaPage() {
  const res = await fetch(`${BASE_URL}/berita`, {
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
    <div className="max-w-screen-xl mx-auto py-24 px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-green-500 inline-block pb-2">
        Berita Desa
      </h1>

      <p className="text-gray-700 text-base mb-10 leading-relaxed text-justify">
        Temukan informasi terbaru seputar kegiatan, pengumuman resmi, dan perkembangan terkini di Desa Menur.
        Semua berita disampaikan langsung oleh Pemerintah Desa sebagai bentuk transparansi dan keterbukaan informasi bagi masyarakat.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beritaList.map((berita) => {
          const gambar = getGambar(berita)
          const teksPertama = berita.konten?.find((k) => k.tipe === 'teks')?.konten || ''

          return (
            <Link
              href={`/berita/${berita.slug}`}
              key={berita.id}
              className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {gambar && (
                <img
                  src={gambar}
                  alt={berita.judul || 'Gambar Berita'}
                  className="w-full max-h-64 object-cover object-center"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-900 mb-1">{berita.judul}</h2>
                <p className="text-gray-500 text-sm mb-2">{formatTanggal(berita.created_at)}</p>
                <div
                  className="text-gray-700 text-sm leading-relaxed text-justify overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                  }}
                  dangerouslySetInnerHTML={{ __html: convertHtmlTags(teksPertama) }}
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
