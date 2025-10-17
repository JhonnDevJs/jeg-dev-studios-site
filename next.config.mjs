// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // o cualquier otra configuración que ya tengas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'embed.figma.com', // CORREGIDO: El hostname no debe llevar "https://"
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // AÑADIDAS TODAS LAS REGLAS DE REDIRECCIÓN:
  async redirects() {
    return [
      // --- REGLAS DE TRADUCCIÓN (Inglés a Español) ---
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/sobre-nosotros',
        permanent: true,
      },

      // --- REGLA DE MIGRACIÓN A SUBDOMINIO (Blog) ---
      {
        source: '/blog',
        destination: 'https://blog.jegdevstudios.com/', // URL completa porque cambia el host
        permanent: true,
      },

      // --- REGLAS DE REESTRUCTURA DE SERVICIOS (desde /servicios/) ---
      {
        source: '/servicios/desarrollo-web',
        destination: '/servicios/desarrollo/web',
        permanent: true,
      },
      {
        source: '/servicios/desarrollo-aplicaciones',
        destination: '/servicios/desarrollo/apps',
        permanent: true,
      },
      {
        source: '/servicios/desarrollo-movil',
        destination: '/servicios/desarrollo/apps',
        permanent: true,
      },
      {
        source: '/servicios/desarrollo-software',
        destination: '/servicios/desarrollo/software-empresarial',
        permanent: true,
      },

      // --- REGLAS DE REESTRUCTURA DE SERVICIOS (desde /services/) ---
      {
        source: '/services/desarrollo-web',
        destination: '/servicios/desarrollo/web',
        permanent: true,
      },
      {
        source: '/services/desarrollo-movil',
        destination: '/servicios/desarrollo/apps',
        permanent: true,
      },
      {
        source: '/services/desarrollo-software',
        destination: '/servicios/desarrollo/software-empresarial',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;