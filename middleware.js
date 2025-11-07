// middleware.js
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export function middleware(req) {
  if (process.env.ROUTE_AUTH === 'preview') {
    
    const user = process.env.AUTH_USER; 
    const pass = process.env.AUTH_PASS; 

    if (!user || !pass) {
      console.error("Variables de autenticación no configuradas");
      return new NextResponse('Auth config error', { status: 500 });
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [providedUser, providedPass] = atob(authValue).split(':');

      if (providedUser === user && providedPass === pass) {
        return NextResponse.next();
      }
    }

    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Acceso restringido"',
      },
    });
  }

  return NextResponse.next();
}