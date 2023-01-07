import { NextResponse } from 'next/server'

const signedinPages = ['/', '/playlist', '/library']

// All this happens on the edge
export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.SPOTIFY_ACCESS_TOKEN
    if (!token) {
      return NextResponse.redirect('/signin')
    }
  }
}
