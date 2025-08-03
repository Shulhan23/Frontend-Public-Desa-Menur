export default async function UMKMByJenisPage({ params }) {
  const slug = typeof params?.slug === 'string' ? params.slug : null;

  if (!slug) {
    return <div>Error: slug tidak tersedia</div>;
  }

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const jenisRes = await fetch(`${BASE_URL}/jenis-umkm`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!jenisRes.ok) {
    return <div>Gagal mengambil data jenis UMKM</div>;
  }

  const jenisData = await jenisRes.json();
  const jenis = Array.isArray(jenisData)
    ? jenisData.find(j => j.slug === slug)
    : null;

  if (!jenis) {
    return <div>Jenis UMKM tidak ditemukan</div>;
  }

  const jenisId = jenis.id;

  const res = await fetch(`${BASE_URL}/umkm?jenis=${jenisId}`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    return <div>Gagal mengambil data UMKM</div>;
  }

  const data = await res.json();
  const umkmList = data.data;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">UMKM: {jenis.nama_jenis}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {umkmList.map((umkm) => (
          <div
            key={umkm.id}
            className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{umkm.nama_umkm}</h2>
            <p className="text-sm text-gray-600">Produk: {umkm.produk_jasa}</p>
            <p className="text-sm">Alamat: {umkm.alamat}</p>
            <p className="text-sm">No. HP: {umkm.no_hp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
