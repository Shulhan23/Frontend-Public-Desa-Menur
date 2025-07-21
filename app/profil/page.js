'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { MapPinned, Users2 } from 'lucide-react'

const PetaDesa = dynamic(() => import('@/components/public/PetaDesa'), { ssr: false })

export default function ProfilDesaPage() {
  return (
    <main className="bg-gray-50 font-sans">
      {/* GAMBARAN UMUM SECTION */}
      <section className="py-16 bg-amber-50" id="gambaran-umum">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
            Gambaran Umum
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
            <p className="text-gray-700 font-serif leading-relaxed text-justify">
              Desa Menur adalah salah satu dari 19 desa yang terletak di Kecamatan Mranggen, salah satu desa dari 243 desa yang berada di Kabupaten Demak Provinsi Jawa Tengah. Desa Menur merupakan salah satu Desa Adat di Negara Republik Indonesia sebagaimana merupakan bagian dari desa yang dimaksud dalam Undang-Undang Nomor 6 Tahun 2014, terletak di barat laut Kecamatan Mranggen memiliki 2 dukuh yaitu dukuh Menur dan dukuh Semen.
            </p>
          </div>
        </div>
      </section>

      {/* VISI DAN MISI SECTION */}
      <section className="py-16 bg-gray-100" id="visi-misi">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
            Visi dan Misi
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
            <p className="text-gray-700 font-serif leading-relaxed text-justify">
              <strong>Visi:</strong> Terwujudnya masyarakat Desa Menur yang sejahtera dan dinamis<br/>
              <strong>Misi:</strong><br/>
              1) Mewujudkan desa yang bersih, amanah, dan transparan<br/>
              2) Berorientasi pada optimalisasi pelayanan pada masyarakat<br/>
              3) Meningkatkan kesejahteraan sosial ekonomi masyarakat<br/>
              4) Meningkatkan kualitas SDM yang berbasis iman dan taqwa<br/>
              5) Mewujudkan lingkungan masyarakat yang bersih, aman, tertib, dan teratur
            </p>
          </div>
        </div>
      </section>

      {/* PETA LOKASI DAN BATASAN SECTION */}
<section className="py-16 bg-amber-50" id="peta-lokasi">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-2 border-gray-300 pb-4">
      Peta Lokasi dan Batasan
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Box Peta Lokasi */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
        <MapPinned className="w-16 h-16 mx-auto text-green-600 mb-4" />
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center font-serif">
          Peta Lokasi
        </h3>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <PetaDesa />
        </div>
      </div>

      {/* Box Batasan & Luas Desa */}
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 bg-opacity-90 backdrop-blur-sm">
    <MapPinned className="w-16 h-16 mx-auto text-green-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center font-serif">
        Batasan dan Luas Desa
    </h3>

    <div className="overflow-x-auto font-serif">
        {/* Tabel Batasan Desa */}
        <table className="w-full table-auto text-left border border-gray-300 mb-6">
        <thead>
            <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Arah</th>
            <th className="px-4 py-2 border-b">Batas Desa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="px-4 py-2 border-b">Utara</td>
            <td className="px-4 py-2 border-b">Desa Wringinjajar / Desa Waru</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Timur</td>
            <td className="px-4 py-2 border-b">Desa Waru / Desa Tamansari / Desa Ngemplak</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Selatan</td>
            <td className="px-4 py-2 border-b">Desa Brumbung</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Barat</td>
            <td className="px-4 py-2 border-b">Desa Jamus / Desa Wringinjajar</td>
            </tr>
        </tbody>
        </table>

        {/* Tabel Luas Wilayah */}
        <table className="w-full table-auto text-left border border-gray-300">
        <thead>
            <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Kategori</th>
            <th className="px-4 py-2 border-b">Luas (km²)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td className="px-4 py-2 border-b">Total Luas</td>
            <td className="px-4 py-2 border-b font-semibold">337,1</td>
            </tr>
            <tr>
            <td className="px-4 py-2 border-b">Bangunan & Pekarangan</td>
            <td className="px-4 py-2 border-b">82</td>
            </tr>
            <tr>
            <td className="px-4 py-2">Sawah</td>
            <td className="px-4 py-2">255,1</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
    </div>
  </div>
</section>

    </main>
  )
}