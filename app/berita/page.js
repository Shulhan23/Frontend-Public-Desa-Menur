export default async function BeritaPage() {
  const res = await fetch('http://localhost:8000/api/v1/berita', {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('Respon error dari backend:', text)
    throw new Error('Gagal mengambil data berita')
  }

  const beritaList = await res.json()

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Berita Desa</h1>

      <div className="space-y-6">
        {beritaList.map((berita) => (
          <div key={berita.id} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold">{berita.judul}</h2>
            {berita.gambar && (
              <img
                src={`http://localhost:8000/storage/${berita.gambar}`}
                alt={berita.judul}
                className="my-4 w-full max-h-64 object-cover rounded"
              />
            )}
            <p>{berita.isi}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
