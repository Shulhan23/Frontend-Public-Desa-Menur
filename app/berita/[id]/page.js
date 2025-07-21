// app/(public)/berita/[id]/page.js
import { notFound } from 'next/navigation'

export default async function BeritaDetail({ params }) {
  const { id } = params;

  const res = await fetch(`https://api.desamenur.com/api/v1/berita/${id}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) return notFound();

  const berita = await res.json();

  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-green-500 pb-2">
        {berita.judul}
      </h1>

      {berita.gambar && (
        <img
          src={`https://api.desamenur.com/storage/${berita.gambar}`}
          alt={berita.judul}
          className="w-full h-96 object-cover rounded-md mb-6"
        />
      )}

      <div className="text-gray-800 text-base leading-relaxed whitespace-pre-line">
        {berita.isi}
      </div>
    </div>
  );
}
