'use client'

export default function StrukturOrganisasi() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-green-800">
        Struktur Organisasi Desa Menur
      </h1>

      <p className="text-center text-gray-600">
        Berikut adalah susunan sementara dari struktur organisasi pemerintahan Desa Menur. Informasi ini akan diperbarui secara berkala sesuai dengan perubahan perangkat desa.
      </p>

      <div className="mt-8 space-y-4">
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <p className="text-lg font-semibold text-green-700">Kepala Desa</p>
          <p className="text-gray-700">Nama Kepala Desa</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <p className="text-lg font-semibold text-green-700">Sekretaris Desa</p>
          <p className="text-gray-700">Nama Sekretaris</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <p className="text-lg font-semibold text-green-700">Kaur Pemerintahan</p>
          <p className="text-gray-700">Nama Kaur Pemerintahan</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <p className="text-lg font-semibold text-green-700">Kaur Keuangan</p>
          <p className="text-gray-700">Nama Kaur Keuangan</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <p className="text-lg font-semibold text-green-700">Kaur Umum</p>
          <p className="text-gray-700">Nama Kaur Umum</p>
        </div>
      </div>
    </main>
  )
}
