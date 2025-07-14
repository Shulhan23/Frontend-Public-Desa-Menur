// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const hostname = request.headers.get('host') || ''
  const isAdmin = hostname.startsWith('admin.')

  const url = request.nextUrl.clone()

  if (isAdmin && !url.pathname.startsWith('/admin')) {
    url.pathname = `/admin${url.pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico).*)'],
}
