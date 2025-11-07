// middleware.js
import { NextResponse } from 'next/server';

// Log 1: Para ver si Vercel lee el archivo
console.log('--- [DEBUG] INICIO: ARCHIVO MIDDLEWARE.JS SE ESTÁ LEYENDO ---');

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

export function middleware(req) {
  // Log 2: Para ver si la función se ejecuta en cada petición
  console.log(`--- [DEBUG] EJECUTANDO MIDDLEWARE para: ${req.nextUrl.pathname}`);
  
  // Log 3: La variable de entorno más importante
  const env = process.env.VERCEL_ENV;
  console.log(`--- [DEBUG] process.env.VERCEL_ENV es: "${env}"`);

  if (env === 'preview') {
    console.log('--- [DEBUG] MODO PREVIEW DETECTADO. Aplicando autenticación...');

    const user = process.env.AUTH_USER;
    const pass = process.env.AUTH_PASS;

    if (!user || !pass) {
      console.error('--- [DEBUG] ERROR: AUTH_USER/AUTH_PASS no encontradas');
      return new NextResponse('Auth config error', { status: 500 });
    }

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
      try {
        const authValue = basicAuth.split(' ')[1];
        const [providedUser, providedPass] = atob(authValue).split(':');

        if (providedUser === user && providedPass === pass) {
          console.log('--- [DEBUG] Autenticación exitosa');
          return NextResponse.next();
        }
      } catch (e) {
        console.error('--- [DEBUG] Error al decodificar basic auth:', e.message);
      }
    }

    console.log('--- [DEBUG] Autenticación fallida o no proporcionada. Pidiendo credenciales.');
    return new NextResponse('Auth required', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Acceso restringido"' },
    });
  }

  console.log('--- [DEBUG] MODO PRODUCCIÓN (o local). Saltando autenticación.');
  return NextResponse.next();
}