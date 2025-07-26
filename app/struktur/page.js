'use client';

export default function StrukturOrganisasi() {
  return (
    <main className="px-4 py-10 bg-white min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-12">STRUKTUR ORGANISASI PEMERINTAH DESA MENUR</h1>

        {/* Kepala Desa */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-lime-300 px-6 py-2 rounded-md font-bold italic text-lg">KEPALA DESA</div>
          <div className="bg-lime-200 px-6 py-2 rounded-md mt-1">Ahmad Siswanto</div>
        </div>

        {/* Sekretaris Desa */}
        <div className="relative mb-16">
          {/* Garis dari kepala desa ke sekretaris */}
          <div className="absolute left-1/2 top-0 h-6 border-l-2 border-black"></div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-cyan-300 px-6 py-2 rounded-md font-bold italic text-lg">SEKRETARIS DESA</div>
              <div className="bg-cyan-100 px-6 py-2 rounded-md mt-1">Zaenal Abidin</div>
            </div>
          </div>
        </div>

        {/* Garis dan Sub Divisi */}
        <div className="relative mb-16">
          {/* Garis horizontal */}
          <div className="absolute left-0 right-0 top-4 h-0.5 bg-black mx-auto w-full max-w-4xl"></div>
          {/* Garis vertikal */}
          <div className="absolute left-1/4 top-0 h-4 border-l-2 border-black"></div>
          <div className="absolute left-2/4 top-0 h-4 border-l-2 border-black"></div>
          <div className="absolute left-3/4 top-0 h-4 border-l-2 border-black"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">
            {/* Kaur */}
            <div className="flex flex-col items-center">
              <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic">KAUR KESEJAHTERAAN</div>
              <div className="bg-cyan-100 px-4 py-2 rounded-md">Kumaidi</div>
              <div className="mt-2 bg-rose-200 px-4 py-2 rounded-md italic font-semibold text-sm">STAFF KESEJAHTERAAN</div>
              <div className="bg-rose-100 px-4 py-2 rounded-md">Romli</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic">KAUR PERENCANAAN</div>
              <div className="bg-cyan-100 px-4 py-2 rounded-md">Ahmad Munif</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic">KAUR KEUANGAN</div>
              <div className="bg-cyan-100 px-4 py-2 rounded-md">Muhlisin</div>
            </div>
          </div>
        </div>

        {/* Baris Kedua Subdivisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 px-4 md:px-32">
          <div className="flex flex-col items-center">
            <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic text-center">KAUR TATA USAHA & UMUM</div>
            <div className="bg-cyan-100 px-4 py-2 rounded-md">Abdullah Zazid</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-amber-300 px-4 py-2 rounded-md font-bold italic">KASI PEMERINTAHAN</div>
            <div className="bg-amber-100 px-4 py-2 rounded-md">Warsono, S.Pd.I</div>
            <div className="mt-2 bg-rose-200 px-4 py-2 rounded-md italic font-semibold text-sm">STAFF PEMERINTAHAN</div>
            <div className="bg-rose-100 px-4 py-2 rounded-md">Fatchan</div>
          </div>
        </div>

        {/* Kasi Pelayanan */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col items-center">
            <div className="bg-amber-300 px-4 py-2 rounded-md font-bold italic">KASI PELAYANAN</div>
            <div className="bg-amber-100 px-4 py-2 rounded-md">Sopiyah</div>
            <div className="mt-2 bg-rose-200 px-4 py-2 rounded-md italic font-semibold text-sm">STAFF PELAYANAN</div>
            <div className="bg-rose-100 px-4 py-2 rounded-md">Murodi</div>
          </div>
        </div>

        {/* Ketua Dusun */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic">KETUA DUSUN MENUR</div>
            <div className="bg-cyan-100 px-4 py-2 rounded-md">Ashari Ahmad Syukur</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-cyan-300 px-4 py-2 rounded-md font-bold italic">KETUA DUSUN SEMEN</div>
            <div className="bg-cyan-100 px-4 py-2 rounded-md">Shobirin, SE</div>
          </div>
        </div>
      </div>
    </main>
  );
}
