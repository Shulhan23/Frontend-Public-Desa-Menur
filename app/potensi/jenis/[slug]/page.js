import { notFound } from "next/navigation";

export default async function UMKMByJenisPage({ params }) {
  // params harus digunakan setelah function dijalankan secara async
  const slug = params?.slug;

  if (!slug || typeof slug !== "string") {
    notFound(); // Akan menampilkan halaman 404
  }

  try {
    const jenisRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/jenis-umkm`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!jenisRes.ok) {
      throw new Error("Gagal mengambil data jenis UMKM");
    }

    const jenisData = await jenisRes.json();
    const jenis = Array.isArray(jenisData)
      ? jenisData.find((j) => j.slug === slug)
      : null;

    if (!jenis) {
      notFound(); // Jenis UMKM tidak ditemukan, tampilkan 404
    }

    const jenisId = jenis.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/umkm?jenis=${jenisId}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data UMKM");
    }

    const data = await res.json();
    const umkmList = data.data;

    return (
      <section className="min-h-screen pt-24 pb-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            UMKM: {jenis.nama_jenis}
          </h1>

          {umkmList.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada UMKM untuk kategori ini.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umkmList.map((umkm) => (
                <div
                  key={umkm.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
                >
                  <h2 className="text-xl font-semibold text-gray-800">{umkm.nama_umkm}</h2>
                  <p className="text-sm text-gray-500 mt-2">Produk: {umkm.produk_jasa}</p>
                  <p className="text-sm text-gray-500">Alamat: {umkm.alamat}</p>
                  <p className="text-sm text-gray-500">No. HP: {umkm.no_hp}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  } catch (error) {
return (
    <div className="text-red-500 p-8 text-center">
      Terjadi kesalahan: {error instanceof Error ? error.message : "Unknown error"}
    </div>
);
  }
}
