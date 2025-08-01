import { notFound } from 'next/navigation'
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.desamenur.com'

const formatTanggal = (date) =>
  new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const renderFormattedText = (text) =>
  DOMPurify.sanitize(marked.parse(text || ''))

const fetchBerita = async (slug) => {
  const res = await fetch(`${API_BASE}/api/v1/berita/${slug}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })
  return res.ok ? res.json() : null
}

export async function generateMetadata({ params }) {
  const berita = await fetchBerita(params.slug)
  if (!berita) {
    return {
      title: 'Berita Tidak Ditemukan',
      description: 'Halaman berita yang Anda cari tidak ditemukan.',
    }
  }

  const deskripsi =
    berita.konten?.find((i) => i.tipe === 'teks')?.konten
      ?.replace(/[*_]/g, '')
      .slice(0, 150) + '...' || 'Berita Desa Menur'

  const imageUrl = berita.gambar
    ? `${API_BASE}/storage/berita/${berita.gambar}`
    : undefined

  return {
    title: berita.judul,
    description: deskripsi,
    openGraph: {
      title: berita.judul,
      description: deskripsi,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: berita.judul,
      description: deskripsi,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function BeritaDetail({ params }) {
  const berita = await fetchBerita(params.slug)
  if (!berita) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 py-24 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-950 mb-4">{berita.judul}</h1>
      <p className="text-sm text-gray-500 mb-8">{formatTanggal(berita.created_at)}</p>

      {berita.gambar && (
        <img
          src={`${API_BASE}/storage/berita/${berita.gambar}`}
          alt={berita.judul}
          className="w-full rounded-md shadow-sm mb-8"
        />
      )}

      <article className="prose prose-lg prose-slate max-w-none">
        {berita.konten?.map((item, i) =>
          item.tipe === 'gambar' ? (
            <figure key={i} className="mb-8">
              <img
                src={`${API_BASE}/storage/${item.konten}`}
                alt={`Gambar ${i + 1}`}
                className="rounded-md shadow"
              />
            </figure>
          ) : item.tipe === 'teks' ? (
            <p
              key={i}
              className="mb-6 whitespace-pre-line text-justify"
              dangerouslySetInnerHTML={{ __html: renderFormattedText(item.konten) }}
            />
          ) : null
        )}
      </article>
    </div>
  )
}
