'use client';

import { useState, useEffect } from 'react';
import { formatPrice } from '@/lib/utils';

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

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  // Resetear cantidad cuando cambia el producto
  useEffect(() => {
    if (product) {
      setQuantity(1);
    }
  }, [product?.id]);

  if (!product || !isOpen) return null;

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark-bg-secondary rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start p-4 border-b border-gray-200 dark:border-dark-bg-primary">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text-primary">
              {product.name}
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-pink-light dark:bg-brand-pink-medium/20 text-brand-pink-medium dark:text-brand-pink-vibrant">
                {product.category}
              </span>
              {product.featured && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400">
                  ⭐ Destacado
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-dark-text-secondary transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Imagen */}
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-bg-primary dark:to-dark-bg-primary rounded-lg overflow-hidden relative">
              {product.image && product.image !== "/images/placeholder.jpg" ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-pink-light to-brand-pink-soft dark:from-brand-pink-medium/20 dark:to-brand-pink-vibrant/20 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 dark:text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586 1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Imagen no disponible
                    </p>
                  </div>
                </div>
              )}
              {product.featured && (
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900 shadow-lg">
                    ⭐
                  </span>
                </div>
              )}
            </div>

            {/* Detalles */}
            <div className="space-y-4">
              {/* Precio */}
              <div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant bg-clip-text text-transparent">
                    {formatPrice(product.price)}
                  </div>
                  {product.stock <= 5 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                      ¡Últimas {product.stock}!
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Precio unitario
                </p>
              </div>

              {/* Descripción */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text-primary mb-2">
                  Descripción
                </h3>
                <div className="bg-gray-50 dark:bg-dark-bg-primary rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {product.description || 'Sin descripción disponible para este producto.'}
                  </p>
                </div>
              </div>

              {/* Información adicional */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 dark:bg-dark-bg-primary rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-dark-text-primary mb-1">
                    Disponibilidad
                  </h4>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      product.stock > 0 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                    }`} />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {product.stock > 0 
                        ? `${product.stock} u.` 
                        : 'Agotado'
                      }
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-dark-bg-primary rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-dark-text-primary mb-1">
                    Estado
                  </h4>
                  <div className="flex items-center space-x-1">
                    <div className={`w-2 h-2 rounded-full ${
                      product.available 
                        ? 'bg-green-500' 
                        : 'bg-gray-400'
                    }`} />
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {product.available ? 'Disp.' : 'No disp.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Selector de cantidad */}
              {product.stock > 0 && product.available && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-text-primary mb-2">
                    Cantidad
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="w-8 h-8 rounded-lg border border-gray-300 dark:border-dark-bg-primary flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <div className="w-16 h-8 rounded-lg border border-gray-300 dark:border-dark-bg-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900 dark:text-dark-text-primary">
                        {quantity}
                      </span>
                    </div>
                    <button
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                      className="w-8 h-8 rounded-lg border border-gray-300 dark:border-dark-bg-primary flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-bg-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Máx: {product.stock} u.
                  </p>
                </div>
              )}

              {/* Precio total */}
              {quantity > 1 && (
                <div className="border-t border-gray-200 dark:border-dark-bg-primary pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-dark-text-primary">
                      Total:
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant bg-clip-text text-transparent">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
