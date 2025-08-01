import Link from 'next/link'

const formatTanggal = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.desamenur.com'

const getGambar = (berita) => {
  const gambarItem = berita?.konten?.find((item) => item.tipe === 'gambar')
  return gambarItem?.konten
    ? new URL(`/storage/${gambarItem.konten}`, BASE_URL).toString()
    : null
}

const convertHtmlTags = (html) =>
  html
    .replace(/<b>/g, '<strong>')
    .replace(/<\/b>/g, '</strong>')
    .replace(/<i>/g, '<em>')
    .replace(/<\/i>/g, '</em>')

export default async function BeritaPage() {
  const res = await fetch(`${BASE_URL}/api/v1/berita`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })

  if (!res.ok) {
    const errorText = await res.text()
    console.error('Gagal fetch data berita:', errorText)
    throw new Error('Gagal mengambil data berita')
  }

  const beritaList = await res.json()

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-green-500 inline-block pb-2">
        Berita Desa
      </h1>

      <p className="text-gray-700 text-base mb-10 text-justify leading-relaxed">
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
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {gambar && (
                <img
                  src={gambar}
                  alt={berita.judul || 'Gambar Berita'}
                  className="w-full max-h-64 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-900 mb-1">{berita.judul}</h2>
                <p className="text-gray-500 text-sm mb-2">{formatTanggal(berita.created_at)}</p>
                <div
                  className="text-gray-700 text-sm leading-relaxed text-justify line-clamp-5"
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
