import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    console.log("Path: "+pathname)
    console.log("Orig: "+origin)
    return NextResponse.rewrite(`${origin}${pathname}`)
}