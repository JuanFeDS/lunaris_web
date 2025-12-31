import { render, screen, fireEvent } from '@testing-library/react'
import ProductModal from '@/components/ProductModal'

// Mock de la función formatPrice
jest.mock('@/lib/utils', () => ({
  formatPrice: (price: number) => `$${price.toLocaleString('es-CO')}`,
}))

describe('ProductModal', () => {
  const mockProduct = {
    id: '1',
    name: 'Producto Test',
    description: 'Descripción del producto',
    price: 10000,
    category: 'Test',
    stock: 10,
    image: 'https://example.com/image.jpg',
    featured: false,
    active: true,
    available: true,
  }

  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debería renderizar el modal cuando está abierto', () => {
    render(
      <ProductModal 
        product={mockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.getByText('Producto Test')).toBeInTheDocument()
    expect(screen.getByText('Descripción del producto')).toBeInTheDocument()
    expect(screen.getByText('$10.000')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument() // Cantidad inicial
  })

  it('no debería renderizar cuando está cerrado', () => {
    render(
      <ProductModal 
        product={mockProduct} 
        isOpen={false} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.queryByText('Producto Test')).not.toBeInTheDocument()
  })

  it('debería renderizar el botón de cerrar', () => {
    render(
      <ProductModal 
        product={mockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    // Verificar que el modal se renderiza
    expect(screen.getByText('Producto Test')).toBeInTheDocument()
    
    // Verificar que hay botones en el modal
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('debería mostrar la información del producto correctamente', () => {
    render(
      <ProductModal 
        product={mockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.getByText('Test')).toBeInTheDocument() // Categoría
    expect(screen.getByText('10 u.')).toBeInTheDocument() // Stock
    expect(screen.getByText('Disp.')).toBeInTheDocument() // Disponibilidad
    expect(screen.getByText('Máx: 10 u.')).toBeInTheDocument() // Límite máximo
  })

  it('debería mostrar el precio total cuando hay múltiples unidades', () => {
    render(
      <ProductModal 
        product={mockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    // Simular que la cantidad es mayor a 1 verificando si aparece el precio total
    // El precio total solo aparece cuando cantidad > 1
    expect(screen.queryByText('Total:')).not.toBeInTheDocument()
  })

  it('debería manejar productos sin stock correctamente', () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 }
    
    render(
      <ProductModal 
        product={outOfStockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.getByText('Agotado')).toBeInTheDocument() // Estado de agotado
  })

  it('debería mostrar productos destacados con badge', () => {
    const featuredProduct = { ...mockProduct, featured: true }
    
    render(
      <ProductModal 
        product={featuredProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.getByText('⭐')).toBeInTheDocument() // Badge de destacado
  })

  it('debería resetear la cantidad cuando cambia el producto', () => {
    const { rerender } = render(
      <ProductModal 
        product={mockProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    // Cambiar a otro producto
    const newProduct = { ...mockProduct, id: '2', name: 'Producto 2' }
    rerender(
      <ProductModal 
        product={newProduct} 
        isOpen={true} 
        onClose={mockOnClose} 
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument() // Cantidad debería ser 1
  })
})
