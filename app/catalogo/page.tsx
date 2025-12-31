'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Luna Lamp',
    price: 89.99,
    category: 'Iluminación',
    image: '/api/placeholder/300/300',
    description: 'Una lámpara elegante inspirada en la luna',
    inStock: true,
  },
  {
    id: '2',
    name: 'Star Necklace',
    price: 124.99,
    category: 'Joyería',
    image: '/api/placeholder/300/300',
    description: 'Collar de estrellas en plata pura',
    inStock: true,
  },
  {
    id: '3',
    name: 'Moon Phase Clock',
    price: 199.99,
    category: 'Decoración',
    image: '/api/placeholder/300/300',
    description: 'Reloj que muestra las fases de la luna',
    inStock: false,
  },
  {
    id: '4',
    name: 'Celestial Tea Set',
    price: 79.99,
    category: 'Hogar',
    image: '/api/placeholder/300/300',
    description: 'Juego de té con motivos celestiales',
    inStock: true,
  },
  {
    id: '5',
    name: 'Galaxy Art Print',
    price: 45.99,
    category: 'Arte',
    image: '/api/placeholder/300/300',
    description: 'Impresión artística de galaxias',
    inStock: true,
  },
  {
    id: '6',
    name: 'Aurora Candle',
    price: 34.99,
    category: 'Aromaterapia',
    image: '/api/placeholder/300/300',
    description: 'Vela aromática con fragancia de aurora boreal',
    inStock: true,
  },
];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Iluminación', 'Joyería', 'Decoración', 'Hogar', 'Arte', 'Aromaterapia'];

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Catálogo de Productos</h1>
          <p className="text-lg text-gray-600">Descubre nuestra selección exclusiva</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
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
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Imagen de {product.name}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <button
                    disabled={!product.inStock}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Añadir al carrito' : 'Agotado'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
