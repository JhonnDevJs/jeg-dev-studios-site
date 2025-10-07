// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // o cualquier otra configuración que ya tengas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '', // Generalmente vacío para puertos estándar (80 para http, 443 para https)
        pathname: '/**', // Aún más flexible, permite cualquier ruta en ese hostname.
      },
      {
        protocol: 'https',
        hostname: 'jhoneg-17.github.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;