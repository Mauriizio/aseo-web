# Aseo Market - Sitio Web Corporativo

Sitio web moderno y elegante para Aseo Market, empresa especializada en servicios de aseo industrial, mantención y certificaciones.

## 🚀 Características

- **Diseño Dark Mode Premium**: Tema oscuro elegante con acentos en rojo neón
- **Animaciones Suaves**: Implementado con Framer Motion para transiciones fluidas
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Efectos Neón**: Bordes luminosos en tarjetas con efecto hover
- **Formulario de Contacto**: Integración lista para conectar con n8n
- **Social Rail**: Barra lateral fija con enlaces a redes sociales y contacto
- **SEO Optimizado**: Metadatos y estructura semántica

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.17 o superior)
  - Descarga desde: https://nodejs.org/
  - Verifica la instalación: `node --version`
- **npm** (viene incluido con Node.js)
  - Verifica la instalación: `npm --version`

## 🛠️ Instalación

### Opción 1: Descargar y Ejecutar (Recomendado)

1. **Descarga el proyecto**
   - Haz clic en el botón de descarga (tres puntos) en la esquina superior derecha
   - Selecciona "Download ZIP"
   - Extrae el archivo ZIP en tu computador

2. **Abre la terminal en la carpeta del proyecto**
   - En Windows: Shift + Click derecho en la carpeta → "Abrir ventana de PowerShell aquí"
   - En Mac: Click derecho en la carpeta → "Servicios" → "Nueva terminal en carpeta"
   - En Linux: Click derecho en la carpeta → "Abrir en terminal"

3. **Instala las dependencias**
   \`\`\`bash
   npm install
   \`\`\`
   Este comando instalará automáticamente todas las librerías necesarias:
   - Next.js 16
   - React 19
   - Tailwind CSS v4
   - @tailwindcss/postcss (plugin de PostCSS para Tailwind v4)
   - Framer Motion
   - Lucide React (iconos)
   - shadcn/ui components

4. **Inicia el servidor de desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Abre tu navegador**
   - Ve a: http://localhost:3000
   - El sitio se recargará automáticamente cuando hagas cambios

### Opción 2: Crear Proyecto Nuevo con shadcn CLI

Si prefieres crear un proyecto desde cero:

1. **Instala el proyecto usando shadcn CLI**
   \`\`\`bash
   npx shadcn@latest init
   \`\`\`

2. **Copia los archivos descargados**
   - Copia todos los archivos del ZIP al nuevo proyecto
   - Reemplaza los archivos existentes cuando se te pregunte

3. **Instala las dependencias adicionales**
   \`\`\`bash
   npm install framer-motion lucide-react @tailwindcss/postcss
   \`\`\`

4. **Inicia el servidor**
   \`\`\`bash
   npm run dev
   \`\`\`

## 📦 Librerías Incluidas

El proyecto utiliza las siguientes tecnologías:

### Core
- **Next.js 15**: Framework de React con App Router y Turbopack
- **React 18**: Biblioteca de UI
- **TypeScript**: Tipado estático para JavaScript

### Estilos
- **Tailwind CSS v3**: Framework de CSS utility-first (versión estable)
- **PostCSS**: Procesador de CSS
- **Autoprefixer**: Prefijos automáticos para compatibilidad de navegadores

### Animaciones
- **Framer Motion**: Animaciones y transiciones suaves
  - `whileInView`: Animaciones al hacer scroll
  - `motion` components: Elementos animados
  - `stagger`: Efectos en cascada

### UI Components
- **shadcn/ui**: Componentes de UI pre-construidos
  - Button, Input, Textarea
  - Card, Badge, Avatar
- **Lucide React**: Iconos SVG optimizados

## 🎨 Personalización

### Colores

Los colores se definen en `app/globals.css`:

\`\`\`css
--background: oklch(0.08 0.02 250);    /* Fondo principal oscuro */
--primary: oklch(0.52 0.24 25);        /* Rojo neón */
--accent: oklch(0.68 0.19 65);         /* Amarillo/dorado */
\`\`\`

Para cambiar los colores:
1. Abre `app/globals.css`
2. Modifica los valores OKLCH en las variables CSS
3. Los cambios se aplicarán automáticamente

### Contenido

Para modificar el contenido:

- **Servicios**: Edita `components/services-section.tsx`
- **Testimonios**: Edita `components/testimonials-section.tsx`
- **Información de contacto**: Edita `components/contact-section.tsx`
- **Hero principal**: Edita `components/hero.tsx`

### Imágenes

Para agregar tus propias imágenes:
1. Coloca las imágenes en la carpeta `public/images/`
2. Referéncialas en el código como: `/images/tu-imagen.jpg`

## 🔧 Scripts Disponibles

\`\`\`bash
# Desarrollo - Inicia el servidor local con Turbopack
npm run dev

# Producción - Construye la versión optimizada
npm run build

# Producción - Inicia el servidor de producción
npm start

# Linting - Revisa el código
npm run lint
\`\`\`

## 📱 Estructura del Proyecto

\`\`\`
aseo-market/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales y variables
├── components/
│   ├── header.tsx          # Navegación superior
│   ├── hero.tsx            # Sección hero principal
│   ├── services-section.tsx    # Grid de servicios
│   ├── benefits-section.tsx    # Beneficios
│   ├── testimonials-section.tsx # Testimonios
│   ├── clients-section.tsx     # Logos de clientes
│   ├── contact-section.tsx     # Formulario de contacto
│   ├── footer.tsx          # Pie de página
│   ├── social-rail.tsx     # Barra lateral de redes
│   └── reveal.tsx          # Componente de animación
├── components/ui/          # Componentes de shadcn/ui
├── public/                 # Archivos estáticos
├── tailwind.config.js      # Configuración de Tailwind CSS
├── postcss.config.mjs      # Configuración de PostCSS
└── package.json           # Dependencias del proyecto
\`\`\`

## 🌐 Despliegue

### Desplegar en Vercel (Recomendado)

1. **Sube tu código a GitHub**
   - Crea un repositorio en GitHub
   - Sube tu código usando Git

2. **Conecta con Vercel**
   - Ve a https://vercel.com
   - Haz clic en "Import Project"
   - Selecciona tu repositorio de GitHub
   - Haz clic en "Deploy"

3. **Configuración automática**
   - Vercel detectará Next.js automáticamente
   - El sitio estará en línea en minutos

### Otras opciones de despliegue

- **Netlify**: Similar a Vercel
- **AWS Amplify**: Para infraestructura AWS
- **DigitalOcean App Platform**: Alternativa económica

## 🔗 Integración del Formulario

Para conectar el formulario de contacto con n8n:

1. Crea un webhook en n8n
2. Copia la URL del webhook
3. En `components/contact-section.tsx`, reemplaza el `console.log` con:

\`\`\`typescript
const response = await fetch('TU_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
\`\`\`

## 🐛 Solución de Problemas

### Error: Cannot find module

Si ves errores de módulos faltantes:

\`\`\`bash
# Solución 1: Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install

# Solución 2: Instala las dependencias manualmente
npm install --save-dev tailwindcss postcss autoprefixer
npm install framer-motion lucide-react

# Luego reinicia el servidor
npm run dev
\`\`\`

### Otros problemas comunes

1. **Verifica Node.js**: `node --version` (debe ser 18.17+)
2. **Limpia caché**: `npm cache clean --force`
3. **Reinstala**: Borra `node_modules` y `package-lock.json`, luego ejecuta `npm install` nuevamente
4. **Revisa errores**: Lee los mensajes de error en la terminal

### Puerto 3000 ocupado

Si el puerto 3000 está en uso:

\`\`\`bash
# Usa un puerto diferente
npm run dev -- -p 3001
\`\`\`

## 📞 Soporte

Si tienes problemas con la instalación:

1. Verifica que Node.js esté instalado correctamente
2. Asegúrate de estar en la carpeta correcta del proyecto
3. Revisa que todas las dependencias se hayan instalado
4. Consulta la sección de Solución de Problemas arriba

## 📄 Licencia

Este proyecto es propiedad de Aseo Market SPA.

---

**Desarrollado con ❤️ para Aseo Market**

Para más información: aseomarketspa@gmail.com | +56 9 9555 4242
