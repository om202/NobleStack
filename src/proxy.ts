import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect old capitalized URLs to lowercase for SEO preservation (301).
 * Uses proxy for case-sensitive matching (next.config redirects are case-insensitive).
 */
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path starts with an uppercase letter after the slash
  // Only redirect exact old capitalized routes, not already-lowercase ones
  const uppercaseRoutes: Record<string, string> = {
    '/Products': '/products',
    '/About': '/about',
    '/Services': '/services',
    '/Career': '/career',
    '/Contact': '/contact',
    '/Blogs': '/blogs',
  };

  // Check exact match first
  if (uppercaseRoutes[path]) {
    const url = request.nextUrl.clone();
    url.pathname = uppercaseRoutes[path];
    return NextResponse.redirect(url, 301);
  }

  // Check sub-routes like /Services/full-stack-engineering → /services/full-stack-engineering
  for (const [oldPrefix, newPrefix] of Object.entries(uppercaseRoutes)) {
    if (path.startsWith(oldPrefix + '/')) {
      const url = request.nextUrl.clone();
      url.pathname = newPrefix + path.slice(oldPrefix.length);
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Only run on page routes, skip static files and API routes
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$).*)'],
};
