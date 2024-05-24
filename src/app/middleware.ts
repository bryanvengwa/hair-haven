// pages/_middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Check if the request is for an admin route
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
console.log(true, ",..............")
  if (isAdminRoute) {
    // Perform middleware logic for admin routes
    // For example, check if the user is authenticated
    const isAuthenticated = false
    // Implement this function based on your auth mechanism

    if (!isAuthenticated) {
      // If not authenticated, redirect to login or show an error
      return NextResponse.redirect('/login');
    }else 
    return NextResponse.redirect('/login');
    
  }

  // If not an admin route or already passed the middleware checks, proceed without modifications
  return NextResponse.next();
}

export const config = {
  matcher : ['/admin', '/']
}
