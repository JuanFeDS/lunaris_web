import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Lunaris</h3>
            <p className="text-gray-300 text-sm">
              Tu tienda en línea de confianza, ofreciendo los mejores productos con calidad y servicio excepcional.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-gray-300 hover:text-white transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@lunaris.com</li>
              <li>Teléfono: +1 234 567 890</li>
              <li>Dirección: Calle Luna 123, Ciudad</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 Lunaris. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
