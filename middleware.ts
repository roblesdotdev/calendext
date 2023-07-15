import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/sign-in') ||
      req.nextUrl.pathname.startsWith('/sign-up')

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/me', req.url))
      }

      return null
    }

    if (!isAuth) {
      let to = req.nextUrl.pathname
      if (req.nextUrl.search) {
        to += req.nextUrl.search
      }

      return NextResponse.redirect(
        new URL(`/sign-in?to=${encodeURIComponent(to)}`, req.url),
      )
    }
  },
  {
    callbacks: {
      async authorized() {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      },
    },
  },
)

export const config = {
  matcher: ['/me/:path*', '/sign-in', '/sign-up'],
}
