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
          <p className="text-xs">📞 Phone/WA : 0822-5785-9091</p>
          <p className="text-xs">Jam Kerja: Senin - Jumat, 08:00 - 16:00</p>

          <a
            href="https://youtube.com/@desamenurmranggendemak?si=AGwNAyyLRhbizMhx" // Ganti dengan link channel YouTube desa kamu
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-400 hover:underline flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a2.996 2.996 0 0 0-2.111-2.12C19.712 3.5 12 3.5 12 3.5s-7.713 0-9.388.566A2.996 2.996 0 0 0 .501 6.186 31.333 31.333 0 0 0 0 12a31.333 31.333 0 0 0 .501 5.814 2.996 2.996 0 0 0 2.111 2.12C4.287 20.5 12 20.5 12 20.5s7.713 0 9.388-.566a2.996 2.996 0 0 0 2.111-2.12A31.333 31.333 0 0 0 24 12a31.333 31.333 0 0 0-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
            </svg>
            <span>Kunjungi YouTube Desa</span>
          </a>
        </div>

        {/* Kolom 3*/}
          <div className="flex flex-col space-y-1">
            <h4 className="text-yellow-300 font-bold text-xs">Motto Desa</h4>
            <p className="text-xs">&quot;Membangun bersama, menuju desa mandiri dan sejahtera.&quot;</p>
          </div>
      </div>

      <div className="text-center mt-4 pt-2 border-t border-white/30 text-xs max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        © 2025 Digital Desa Menur. Semua Hak Dilindungi.
      </div>
    </footer>
  )
}
