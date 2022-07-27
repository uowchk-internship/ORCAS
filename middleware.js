import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    return NextResponse.rewrite(`${origin}${pathname}`)
}