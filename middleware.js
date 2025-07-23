// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/((?!_next|_vercel|static|favicon.ico|api/|laravel-api/).*)'],
}
