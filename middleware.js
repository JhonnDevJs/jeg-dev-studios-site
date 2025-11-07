// middleware.js
import { NextResponse } from "next/server";

export const config = {
  // Aplica el middleware a todas las rutas del sitio
  matcher: "/:path*",
};

export function middleware(req) {
  // 1. Usa la variable de entorno del sistema de Vercel
  // Esta variable ('preview') existe automáticamente en todos los
  // despliegues que no son de producción.
  if (process.env.VERCEL_ENV === "preview") {
    
    const user = process.env.AUTH_USER;
    const pass = process.env.AUTH_PASS;

    if (!user || !pass) {
      console.error("Variables de autenticación no configuradas");
      return new NextResponse("Auth config error", { status: 500 });
    }

    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      
      // 2. USA atob(), que SÍ está disponible en el Edge Runtime
      const [providedUser, providedPass] = atob(authValue).split(":");

      if (providedUser === user && providedPass === pass) {
        return NextResponse.next();
      }
    }

    // 3. Si no hay autenticación, pide la contraseña
    return new NextResponse("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Acceso restringido"',
      },
    });
  }

  // 4. Si es producción, simplemente continúa.
  return NextResponse.next();
}