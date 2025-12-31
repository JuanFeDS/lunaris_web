'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  featured: boolean;
  active: boolean;
  available: boolean;
}

interface ApiResponse {
  success: boolean;
  data: Product[];
  count: number;
  lastUpdated: string;
  error?: string;
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Cargar productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        const data: ApiResponse = await response.json();
        
        if (data.success) {
          setProducts(data.data);
          setError(null);
        } else {
          setError(data.error || 'Error al cargar productos');
          setProducts(data.data); // Usar productos de respaldo
        }
      } catch (err) {
        setError('Error de conexión');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Obtener categorías únicas de los productos
  const categories = ['Todos', ...Array.from(new Set(products.map(p => p.category)))];

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="bg-brand-cream dark:bg-dark-bg-primary min-h-screen transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-pink-medium mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-dark-text-secondary">Cargando productos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-cream dark:bg-dark-bg-primary min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant bg-clip-text text-transparent mb-4">
            Catálogo de Productos
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary">
            Descubre nuestra selección exclusiva
            {error && (
              <span className="block text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                ⚠️ Usando catálogo de respaldo
              </span>
            )}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-dark-bg-secondary rounded-lg focus:ring-2 focus:ring-brand-pink-medium focus:border-transparent bg-white dark:bg-dark-bg-secondary text-gray-900 dark:text-dark-text-primary"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-pink-medium text-white'
                    : 'bg-white dark:bg-dark-bg-secondary text-gray-700 dark:text-dark-text-primary hover:bg-brand-pink-light dark:hover:bg-brand-pink-medium/20 border border-gray-300 dark:border-dark-bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 dark:bg-dark-bg-primary">
                <div className="w-full h-48 bg-gradient-to-br from-brand-pink-light to-brand-pink-soft dark:from-brand-pink-medium/20 dark:to-brand-pink-vibrant/20 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-dark-text-secondary text-sm">
                    {product.image ? 'Imagen de producto' : `Imagen de ${product.name}`}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary">{product.name}</h3>
                  <span className="text-lg font-bold bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant bg-clip-text text-transparent">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                {product.description && (
                  <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-3">{product.description}</p>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-brand-pink-light dark:bg-brand-pink-medium/20 text-brand-pink-medium dark:text-brand-pink-vibrant px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    {product.stock <= 5 && (
                      <span className="text-xs text-red-500 dark:text-red-400">
                        ¡Solo {product.stock} left!
                      </span>
                    )}
                    <button
                      disabled={!product.available || product.stock === 0}
                      className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                        product.available && product.stock > 0
                          ? 'bg-brand-pink-medium text-white hover:bg-brand-pink-vibrant'
                          : 'bg-gray-300 dark:bg-dark-bg-primary text-gray-500 dark:text-dark-text-secondary cursor-not-allowed'
                      }`}
                    >
                      {product.available && product.stock > 0 ? 'Añadir al carrito' : 
                       !product.available ? 'No disponible' : 'Agotado'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-dark-text-secondary text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
