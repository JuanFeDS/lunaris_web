# Plan de Acción: Desarrollo de Tienda Virtual (3 Fases)

Este documento detalla la hoja de ruta para la construcción modular de la plataforma ecommerce.

---

## 📦 Fase 1: Catálogo Virtual
*Objetivo: Establecer presencia online y mostrar la oferta de productos.*

- [ ] **Infraestructura Base**
  - [ ] Compra de dominio y hosting.
  - [ ] Configuración de entorno de desarrollo (CMS o Framework).
  - [ ] Instalación de certificado de seguridad SSL.
- [ ] **Arquitectura de Producto**
  - [ ] Definición de categorías y etiquetas.
  - [ ] Diseño de base de datos de productos (Nombres, descripciones, precios).
  - [ ] Optimización de imágenes (Formato WebP/JPG progresivo).
- [ ] **Interfaz de Usuario (UI)**
  - [ ] Landing page con productos destacados.
  - [ ] Buscador funcional y filtros básicos.
  - [ ] Vista de detalle de producto.
- [ ] **Canal de Ventas Manual**
  - [ ] Integración de botón de contacto directo (WhatsApp/Email).

---

## 👤 Fase 2: Sistema de Autenticación
*Objetivo: Fidelización de clientes y personalización de la experiencia.*

- [ ] **Gestión de Cuentas**
  - [ ] Formulario de registro y login (Frontend).
  - [ ] Lógica de autenticación (Backend / Firebase / Auth0).
  - [ ] Funcionalidad de "Olvidé mi contraseña".
- [ ] **Perfil de Usuario**
  - [ ] Dashboard de cliente para editar datos personales.
  - [ ] Gestión de libreta de direcciones (Envío/Facturación).
- [ ] **Funciones de Interés**
  - [ ] Implementación de "Lista de deseos" (Wishlist).
  - [ ] Guardado de preferencias de navegación.
- [ ] **Seguridad de Datos**
  - [ ] Encriptación de contraseñas.
  - [ ] Configuración de roles (Admin vs Cliente).

---

## 💳 Fase 3: Pasarela de Pagos
*Objetivo: Automatización total del ciclo de venta y transacciones seguras.*

- [ ] **Sistema de Carrito**
  - [ ] Lógica de persistencia del carrito de compras.
  - [ ] Cálculo dinámico de totales, descuentos e impuestos.
- [ ] **Integración de Checkout**
  - [ ] Selección e integración de API (Stripe, PayPal, Mercado Pago, etc.).
  - [ ] Implementación de entorno de pruebas (Sandbox).
  - [ ] Manejo de respuestas (Éxito, Error, Pendiente).
- [ ] **Logística y Notificaciones**
  - [ ] Configuración de Webhooks para actualización automática de pedidos.
  - [ ] Generación de comprobantes de pago/facturas en PDF.
  - [ ] Automatización de correos transaccionales (Confirmación de compra).
- [ ] **Lanzamiento (Go-Live)**
  - [ ] Auditoría de seguridad final.
  - [ ] Activación de llaves de producción en la pasarela.

---
