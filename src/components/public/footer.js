import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-6 text-sm">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Kolom 1 - Pemerintah Desa + Logo Horizontal */}
        <div className="flex items-start gap-3">
          <Image
            src="/assets/logo-desa.png" // pastikan file ini ada di folder /public/assets
            alt="Logo Desa Menur"
            width={80}
            height={80}
            className="rounded-md"
          />
          <div className="space-y-1">
            <h4 className="text-yellow-300 font-bold text-xs">Pemerintah Desa Menur</h4>
            <p className="text-xs">JL. Banowo No. 140 RT 003 RW 003 Dukuh Semen</p>
            <p className="text-xs">Desa Menur, Kecamatan Mranggen</p>
            <p className="text-xs">Kabupaten Demak,</p>
            <p className="text-xs">Provinsi Jawa Tengah, 59567</p>
          </div>
        </div>

        {/* Kolom 2 - Kontak */}
        <div className="flex flex-col space-y-1">
          <h4 className="text-yellow-300 font-bold text-xs">Hubungi Kami</h4>
          <p className="text-xs">📞 Phone/WA : 0822-5785-9091-</p>
          <p className="text-xs">Jam Kerja: Senin - Jumat, 08:00 - 16:00</p>
        </div>

        {/* Kolom 3 - Nomor Penting */}
          <div className="flex flex-col space-y-1">
            <h4 className="text-purple-600 font-bold text-xs">Motto Desa</h4>
            <p className="text-xs italic text-gray-700">"Membangun bersama, menuju desa mandiri dan sejahtera."</p>
          </div>
      </div>

      <div className="text-center mt-4 pt-2 border-t border-white/30 text-xs max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        © 2025 Digital Desa Menur. Semua Hak Dilindungi.
      </div>
    </footer>
  )
}
