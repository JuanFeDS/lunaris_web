// Utilidades para formateo y otras funciones comunes

/**
 * Formatea un número como precio con puntos en los miles y sin decimales
 * @param price - El número a formatear
 * @returns - El precio formateado como string
 */
export function formatPrice(price: number): string {
  if (isNaN(price) || price === 0) return '$0';
  
  // Convertir a entero y formatear con puntos
  const integerPrice = Math.round(price);
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(integerPrice);
}

/**
 * Formatea un número con puntos en los miles
 * @param num - El número a formatear
 * @returns - El número formateado como string
 */
export function formatNumber(num: number): string {
  if (isNaN(num)) return '0';
  return new Intl.NumberFormat('es-CO').format(num);
}

/**
 * Trunca un texto a un máximo de caracteres
 * @param text - El texto a truncar
 * @param maxLength - Máximo número de caracteres
 * @returns - El texto truncado con "..." si es necesario
 */
export function truncateText(text: string, maxLength: number): string {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Genera un slug a partir de un texto
 * @param text - El texto a convertir
 * @returns - El slug generado
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
