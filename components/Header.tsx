'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-dark-bg-primary shadow-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-brand-pink-medium to-brand-pink-vibrant bg-clip-text text-transparent"
            >
              Lunaris
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium dark:hover:text-brand-pink-vibrant px-3 py-2 text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium dark:hover:text-brand-pink-vibrant px-3 py-2 text-sm font-medium transition-colors"
            >
              Catálogo
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium dark:hover:text-brand-pink-vibrant px-3 py-2 text-sm font-medium transition-colors"
            >
              Contacto
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium block px-3 py-2 text-base font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/catalogo"
                className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium block px-3 py-2 text-base font-medium"
              >
                Catálogo
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-dark-text-primary hover:text-brand-pink-medium block px-3 py-2 text-base font-medium"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
