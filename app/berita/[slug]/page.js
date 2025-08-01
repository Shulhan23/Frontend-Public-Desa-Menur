import { notFound } from 'next/navigation'
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom' 

// Format tanggal Indonesia
function formatTanggal(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

// Konversi *italic* dan **bold**
function renderFormattedText(text) {
  const rawHtml = marked.parse(text || '')
  return DOMPurify.sanitize(rawHtml)
}

export async function generateMetadata({ params }) {
  const { slug } = params

  try {
    const res = await fetch(`http://localhost:8000/api/v1/berita/${slug}`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      return {
        title: 'Berita Tidak Ditemukan',
        description: 'Halaman berita yang Anda cari tidak ditemukan.',
      }
    }

    const berita = await res.json()

    // Ambil teks pertama dari konten
    const deskripsi =
      berita.konten
        ?.find((item) => item.tipe === 'teks')
        ?.konten.replace(/[*_]/g, '') // Hapus markdown
        .slice(0, 150) + '...' || 'Berita Desa Menur'

    return {
      title: berita.judul,
      description: deskripsi,
      openGraph: {
        title: berita.judul,
        description: deskripsi,
        images: berita.gambar
          ? [
              {
                url: `http://localhost:8000/storage/berita/${berita.gambar}`,
                width: 1200,
                height: 630,
                alt: berita.judul,
              },
            ]
          : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: berita.judul,
        description: deskripsi,
        images: berita.gambar
          ? [`http://localhost:8000/storage/berita/${berita.gambar}`]
          : [],
      },
    }
  } catch (err) {
    return {
      title: 'Kesalahan Server',
      description: 'Terjadi kesalahan saat memuat halaman.',
    }
  }
}

export default async function BeritaDetail({ params }) {
  const { slug } = params

  console.log('Slug dari params:', slug) // Debug: cek slug yang diterima

  const res = await fetch(`http://localhost:8000/api/v1/berita/${slug}`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!res.ok) {
    console.error(`Gagal fetch: status ${res.status}`)
    return notFound()
  }

  const berita = await res.json()

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0 py-24 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-950 leading-tight mb-4">
        {berita.judul}
      </h1>

      <p className="text-sm text-gray-500 mb-8">{formatTanggal(berita.created_at)}</p>

      {berita.gambar && (
        <img
          src={`http://localhost:8000/storage/berita/${berita.gambar}`}
          alt={berita.judul}
          className="w-full h-auto rounded-md shadow-sm mb-8"
        />
      )}

      <article className="prose prose-lg prose-slate max-w-none">
        {berita.konten?.map((item, index) => {
          if (item.tipe === 'gambar') {
            return (
              <figure key={index} className="mb-8">
                <img
                  src={`http://localhost:8000/storage/${item.konten}`}
                  alt={`Gambar ${index + 1}`}
                  className="rounded-md w-full h-auto shadow"
                />
              </figure>
            )
          }

          if (item.tipe === 'teks') {
            return (
              <p
                key={index}
                className="mb-6 whitespace-pre-line text-justify"
                dangerouslySetInnerHTML={{
                  __html: renderFormattedText(item.konten),
                }}
              />
            )
          }

          return null
        })}
      </article>
    </div>
  )
}
