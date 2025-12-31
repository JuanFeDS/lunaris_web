# 🌙 Lunaris - Catálogo de Productos

Catálogo virtual moderno y responsivo para productos con conexión a Google Sheets API.

## 📋 Descripción

Lunaris es una aplicación web de catálogo de productos que se conecta a una API independiente para mostrar productos dinámicamente desde Google Sheets. Incluye paginación, búsqueda, filtrado por categorías y un modal interactivo para ver detalles de productos.

## 🚀 Características

- ✅ **Catálogo de productos** con paginación (12 productos por página)
- ✅ **Búsqueda en tiempo real** de productos
- ✅ **Filtrado por categorías** dinámico
- ✅ **Modal interactivo** con detalles del producto
- ✅ **Selector de cantidad** con límites de stock
- ✅ **Dark mode** integrado con toggle
- ✅ **Diseño responsivo** para todos los dispositivos
- ✅ **API independiente** desplegada en Vercel
- ✅ **Conexión a Google Sheets** para datos de productos
- ✅ **Manejo de errores** y estados de carga
- ✅ **Formateo de precios** con puntos separadores

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **React Hooks** - Gestión de estado

### API
- **Node.js** - Runtime JavaScript
- **Google Sheets API** - Fuente de datos
- **Vercel** - Deploy de API

### Diseño
- **Tailwind CSS** - Estilos
- **Dark Mode** - Tema oscuro/claro
- **Responsive Design** - Mobile-first

## 📁 Estructura del Proyecto

```
lunaris/
├── app/                    # Páginas de Next.js
│   ├── catalogo/          # Página principal del catálogo
│   ├── contacto/          # Página de contacto
│   └── public/            # Página de inicio
├── components/            # Componentes React
│   ├── ProductModal.tsx   # Modal de detalles
│   └── Header.tsx         # Header con navegación
├── lib/                   # Utilidades
│   ├── utils.ts          # Funciones helper
│   └── api-config.ts     # Configuración de API
├── solo_api/             # API independiente
│   ├── index.js          # Servidor de API
│   └── vercel.json       # Configuración de Vercel
└── public/               # Archivos estáticos
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- npm o yarn

### 1. Clonar el repositorio
```bash
git clone https://github.com/JuanFeDS/lunaris_web.git
cd lunaris_web
```

### 2. Instalar dependencias
```bash
npm install
# o
yarn install
```

### 3. Configurar variables de entorno (opcional)
```bash
# Crear .env.local
NEXT_PUBLIC_API_URL=https://lunaris-api-jwvc.vercel.app
```

### 4. Iniciar servidor de desarrollo
```bash
npm run dev
# o
yarn dev
```

### 5. Abrir en navegador
```
http://localhost:3000
```

## 🔧 Configuración de la API

La API está desplegada independientemente en:
- **URL**: `https://lunaris-api-jwvc.vercel.app`
- **Endpoint productos**: `/api/products`
- **Health check**: `/health`

### Variables de la API (configuradas en Vercel)
- `GOOGLE_SHEETS_ID`: ID del spreadsheet
- `GOOGLE_SHEETS_API_KEY`: API key de Google Sheets

## 📊 Estructura de Google Sheets

Para que la API funcione correctamente, tu Google Sheet debe tener las siguientes columnas:

| Columna | Requerido | Descripción |
|---------|-----------|-------------|
| `nombre` | ✅ | Nombre del producto |
| `precio` | ✅ | Precio del producto |
| `stock` | ✅ | Unidades disponibles |
| `activo` | ✅ | "Si" para mostrar, "No" para ocultar |
| `descripcion` | ❌ | Descripción del producto |
| `categoria` | ❌ | Categoría del producto |
| `imagen_url` | ❌ | URL de la imagen del producto |
| `destacado` | ❌ | "TRUE" para productos destacados |
| `id` | ❌ | ID único del producto |

## 🎨 Uso de la Aplicación

### Navegación
- **Inicio**: Página de bienvenida
- **Catálogo**: Lista completa de productos
- **Contacto**: Formulario de contacto

### Catálogo de Productos
1. **Búsqueda**: Escribe para filtrar productos
2. **Categorías**: Filtra por categoría específica
3. **Paginación**: Navega entre páginas de productos
4. **Modal**: Click en producto para ver detalles
5. **Cantidad**: Selecciona cantidad en el modal

### Dark Mode
- Click en el botón de toggle en el header
- Cambia entre tema claro y oscuro
- Preferencia guardada localmente

## 🚀 Deploy

### Frontend (Vercel)
```bash
npm run build
vercel --prod
```

### API (Vercel)
La API está configurada para deploy automático en Vercel desde la carpeta `solo_api/`.

## 🔧 Desarrollo

### Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting del código
```

### Arquitectura
- **Frontend**: Next.js con TypeScript
- **API**: Node.js independiente
- **Datos**: Google Sheets API
- **Estilos**: Tailwind CSS con dark mode

## 📱 Características Técnicas

### Frontend
- **Server-Side Rendering** con Next.js App Router
- **TypeScript** para tipado seguro
- **Tailwind CSS** para estilos modernos
- **React Hooks** para gestión de estado
- **Responsive Design** mobile-first

### API
- **RESTful API** con Node.js
- **Google Sheets API** integración
- **CORS** configurado para frontend
- **Error handling** robusto
- **Paginación** implementada

### Performance
- **Optimización de imágenes** lazy loading
- **Caching** de respuestas de API
- **Component optimization** con React.memo
- **Bundle optimization** con Next.js

## 🤝 Contribuir

1. Fork del repositorio
2. Crear feature branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'Add nueva funcionalidad'`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

## 📄 Licencia

MIT License - ver archivo [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **GitHub**: [@JuanFeDS](https://github.com/JuanFeDS)
- **Email**: juanfer@example.com
- **Web**: [Lunaris](https://lunaris.example.com)

---

⭐ **Hecho con ❤️ y Next.js**
