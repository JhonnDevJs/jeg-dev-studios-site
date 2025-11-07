// middleware.js
import { NextResponse } from 'next/server';

export const config = {
  /*
   * Esto captura TODAS las rutas, excepto las internas de Next.js
   * (como _next/static, _next/image, favicon.ico)
   * para que la protección no rompa los archivos estáticos.
   */
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

export function middleware(req) {
  // 1. Usamos la variable de entorno estándar de Vercel
  if (process.env.VERCEL_ENV === 'preview') {
    
    // 2. Leemos las variables que configuraste en Vercel
    const user = process.env.AUTH_USER;
    const pass = process.env.AUTH_PASS;

    if (!user || !pass) {
      console.error('Variables de autenticación (AUTH_USER/AUTH_PASS) no configuradas');
      return new NextResponse('Auth config error', { status: 500 });
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      
      // 3. Usamos atob() que SÍ funciona en el Edge Runtime
      const [providedUser, providedPass] = atob(authValue).split(':');

      if (providedUser === user && providedPass === pass) {
        // Usuario y contraseña correctos, déjalo pasar
        return NextResponse.next();
      }
    }

    // 4. No hay 'basicAuth' o es incorrecto, pedimos la contraseña
    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Acceso restringido"',
      },
    });
  }

  // 5. Si NO es 'preview' (es 'production'), no hagas nada
  return NextResponse.next();
}