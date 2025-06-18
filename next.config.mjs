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
        pathname: '/img/b/R29vZ2xl/**', // Ajusta el pathname según sea necesario, '**' es un comodín
      },
    ],
  },
};

export default nextConfig;
