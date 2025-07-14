// app/(admin)/layout.js
import '../../styles/globals.css' // Penting: pastikan ini dimuat!

import AdminHeader from '@/components/admin/AdminHeader'
import AdminFooter from '@/components/admin/AdminFooter'

export const metadata = {
  title: 'Admin Desa Menur',
  description: 'Halaman Admin Website Desa Menur',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="id">
      <head />
      <body className="bg-gray-50 text-gray-800">
        <AdminHeader />
        <main className="min-h-screen p-6">{children}</main>
        <AdminFooter />
      </body>
    </html>
  )
}
