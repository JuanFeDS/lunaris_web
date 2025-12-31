/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores de marca basados en la imagen
        brand: {
          // Tonos rosados de la imagen
          'pink-light': '#FFE4E9',      // Rosa muy claro (fondo)
          'pink-soft': '#FFC0CB',       // Rosa suave (fondo secundario)
          'pink-medium': '#FF69B4',     // Rosa medio (texto principal)
          'pink-vibrant': '#FF1493',    // Rosa vibrante (números, acentos)
          'pink-hot': '#FF007F',        // Rosa intenso (botones, hover)
          
          // Tonos crema/beige de la imagen
          'cream': '#FFF8F3',           // Crema base
          'cream-light': '#FFFEF7',     // Crema muy claro
          'cream-warm': '#FAF0E6',      // Crema cálido
        },
        // Modo dark
        dark: {
          'bg-primary': '#1a1a2e',     // Fondo principal dark
          'bg-secondary': '#16213e',    // Fondo secundario dark
          'accent': '#e94560',          // Acento rosado para dark
          'text-primary': '#e0e0e0',    // Texto principal dark
          'text-secondary': '#a0a0a0',  // Texto secundario dark
        }
      },
    },
  },
  plugins: [],
}
