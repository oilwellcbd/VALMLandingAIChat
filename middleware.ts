import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // You can add middleware logic here for things like:
  // - Authentication
  // - Redirects
  // - Request/response modification
  // - Logging
  
  // For now, we'll just pass through all requests
  return NextResponse.next();
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};
