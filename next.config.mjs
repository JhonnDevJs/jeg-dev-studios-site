// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bp.blogspot.com',
        // puedes añadir port y pathname si son específicos
      },
      {
        protocol: 'http', // Si algunas imágenes son http
        hostname: 'bp.blogspot.com',
      },
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
      },
      // Añade más dominios si es necesario
    ],
  },
};

export default nextConfig;
