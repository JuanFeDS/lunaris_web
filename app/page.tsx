import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-brand-cream dark:bg-dark-bg-primary transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenido a Lunaris
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-pink-light">
              Descubre productos únicos que iluminarán tu vida
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4 sm:space-x-4">
              <Link
                href="/catalogo"
                className="bg-white text-brand-pink-medium px-8 py-3 rounded-full font-semibold hover:bg-brand-cream transition-colors text-center w-full sm:w-auto"
              >
                Ver Catálogo
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-pink-medium transition-colors text-center w-full sm:w-auto"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text-primary mb-4">
              ¿Por qué elegir Lunaris?
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary">
              Calidad, confianza y servicio excepcional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-pink-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text-primary">Calidad Garantizada</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Productos seleccionados con los más altos estándares de calidad</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-pink-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text-primary">Envío Rápido</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Recibe tus pedidos en tiempo récord</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-pink-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-text-primary">Soporte 24/7</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Estamos aquí para ayudarte cuando nos necesites</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-pink-medium text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para descubrir algo increíble?
          </h2>
          <p className="text-xl mb-8 text-brand-pink-light">
            Explora nuestro catálogo y encuentra el producto perfecto para ti
          </p>
          <Link
            href="/catalogo"
            className="bg-white text-brand-pink-medium px-8 py-3 rounded-full font-semibold hover:bg-brand-cream transition-colors inline-block text-center w-full sm:w-auto"
          >
            Explorar Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
}
