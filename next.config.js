/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para optimización de imágenes
  images: {
    domains: ['localhost'], // Agrega aquí los dominios de tus imágenes
    formats: ['image/avif', 'image/webp'],
  },
  // Configuración de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
