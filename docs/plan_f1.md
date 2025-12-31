# Especificaciones Técnicas - Fase 1: Catálogo Virtual

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 14 (React 18+) con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + shadcn/ui
- **Gestión de estado**: React Server Components + Server Actions
- **Formularios**: React Hook Form con validación Zod
- **Bundler**: Turbopack (nuevo empaquetador de Vercel)

### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Next.js API Routes
- **Base de datos**: PostgreSQL con Prisma ORM
- **Almacenamiento**: Vercel Blob Storage (para imágenes)
- **Búsqueda**: Meilisearch (open source, alternativa a Algolia)

### Infraestructura
- **Hosting**: Vercel (para frontend + API)
- **Base de datos**: Supabase (PostgreSQL)
- **CDN**: Vercel Edge Network
- **Dominio**: Configuración recomendada con Cloudflare
- **SSL**: Automático con Let's Encrypt (gratuito)

## 📁 Estructura del Proyecto

```
/lunaris-ecommerce
├── /app
│   ├── /(public)           # Rutas públicas
│   │   ├── /(landing)      # Landing page
│   │   ├── /productos      # Listado de productos
│   │   └── /producto/[id]  # Detalle de producto
│   ├── /api                # Endpoints de API
│   └── /admin              # Panel de administración (protegido)
├── /components
│   ├── /ui                 # Componentes reutilizables
│   ├── /product            # Componentes de producto
│   └── /layout             # Componentes de layout
├── /lib
│   ├── /db                 # Configuración de base de datos
│   └── /utils              # Utilidades
├── /public                 # Archivos estáticos
│   └── /images             # Imágenes optimizadas
├── .env.local              # Variables de entorno
└── package.json
```

## 🚀 Implementación Técnica

### 1. Configuración Inicial
- [ ] Inicializar proyecto con `create-next-app@latest` (seleccionar TypeScript, ESLint, Tailwind CSS)
- [ ] Configurar ESLint y Prettier con reglas estrictas
- [ ] Configurar husky para pre-commit hooks
- [ ] Configurar CI/CD con GitHub Actions

### 2. Base de Datos
```prisma
// schema.prisma
model Producto {
  id          String   @id @default(uuid())
  nombre      String
  descripcion String
  precio     Float
  categoria   String
  stock       Int
  imagenes    String[]
  destacado   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### 3. Componentes Principales

#### ProductCard.tsx
```tsx
interface ProductCardProps {
  id: string
  nombre: string
  precio: number
  imagen: string
  destacado?: boolean
}

export function ProductCard({ id, nombre, precio, imagen, destacado }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={imagen}
          alt={nombre}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/producto/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {nombre}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${precio.toFixed(2)}</p>
      </div>
    </div>
  )
}
```

### 4. Optimización de Imágenes
- Usar componente `next/image` con formatos modernos (WebP/AVIF)
- Implementar lazy loading
- Configurar tamaños responsive
- Usar CDN para entrega optimizada

### 5. Búsqueda y Filtrado
- Implementar búsqueda en tiempo real con Meilisearch
- Filtros por categoría, precio y disponibilidad
- Ordenamiento por relevancia, precio, novedades

## 🚀 Despliegue

1. **Configuración en Vercel**
   - Conectar repositorio de GitHub
   - Configurar variables de entorno
   - Habilitar funciones serverless

2. **Base de Datos**
   - Crear instancia en Supabase
   - Configurar conexión segura
   - Realizar migración inicial

3. **Dominio**
   - Configurar DNS en Cloudflare
   - Habilitar SSL automático
   - Configurar redirecciones

## 📊 Métricas y Monitoreo
- Vercel Analytics para rendimiento
- Sentry para monitoreo de errores
- Google Analytics 4 para métricas de usuario

## 🔒 Seguridad
- Validación de datos con Zod
- Protección contra CSRF
- Rate limiting en endpoints de API
- Headers de seguridad con next-safe

## 📅 Próximos Pasos
1. Configurar entorno de desarrollo
2. Implementar autenticación (Fase 2)
3. Integrar pasarela de pagos (Fase 3)
