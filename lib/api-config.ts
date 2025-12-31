// Configuración de URLs de la API
export const API_CONFIG = {
  // URL de la API desplegada en Vercel (puede ser configurada por variable de entorno)
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://lunaris-api-jwvc.vercel.app',
  
  // Endpoints
  ENDPOINTS: {
    PRODUCTS: '/api/products',
    HEALTH: '/health'
  },
  
  // URLs completas
  get URLS() {
    return {
      PRODUCTS: `${this.BASE_URL}/api/products`,
      HEALTH: `${this.BASE_URL}/health`
    };
  }
};

// Helper para construir URLs
export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  if (!params) return url;
  
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });
  
  return `${url}?${searchParams.toString()}`;
};
