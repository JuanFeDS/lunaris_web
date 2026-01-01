/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages project site (dominio por defecto)
  basePath: '/lunaris_web',
  assetPrefix: '/lunaris_web/',
  
  // Configuración para optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Para GitHub Pages
  },
  
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  
  // Nota: headers no funcionan con output: export
  // La configuración de seguridad se manejará en el nivel de hosting
};

module.exports = nextConfig;
