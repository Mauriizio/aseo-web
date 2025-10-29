# 🚀 INSTRUCCIONES DE INSTALACIÓN - ASEO MARKET

## ⚠️ IMPORTANTE: LEE ESTO PRIMERO

Este archivo contiene las instrucciones DEFINITIVAS para instalar el proyecto.

## 📋 Requisitos Previos

- Node.js 18 o superior instalado
- npm (viene con Node.js)

## 🔧 Instalación (MÉTODO SIMPLE)

### Paso 1: Descargar el Proyecto
1. Haz clic en los **3 puntos** arriba a la derecha en v0
2. Selecciona **"Download ZIP"**
3. Descomprime el archivo en tu carpeta de proyectos

### Paso 2: Instalar Dependencias
Abre la terminal en la carpeta del proyecto y ejecuta:

\`\`\`bash
npm install
\`\`\`

### Paso 3: Iniciar el Proyecto
\`\`\`bash
npm run dev
\`\`\`

### Paso 4: Ver el Proyecto
Abre tu navegador en: **http://localhost:3000**

## ✅ ESO ES TODO

Si seguiste estos pasos, el proyecto debería funcionar sin problemas.

## 🐛 Si Tienes Problemas

### Error: "Cannot find module"
\`\`\`bash
# Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
\`\`\`

En Windows:
\`\`\`bash
rmdir /s /q node_modules
del package-lock.json
npm install
\`\`\`

### Error: Puerto 3000 en uso
\`\`\`bash
# Usa otro puerto
npm run dev -- -p 3001
\`\`\`

### Error: Caché corrupto
\`\`\`bash
# Elimina el caché de Next.js
rm -rf .next
npm run dev
\`\`\`

En Windows:
\`\`\`bash
rmdir /s /q .next
npm run dev
\`\`\`

## 📦 Dependencias Incluidas

El proyecto ya incluye todas las dependencias necesarias:
- Next.js 15.0.3
- React 18.3.1
- Tailwind CSS 3.4.17
- Framer Motion 11.5.4
- Lucide React (iconos)
- Y más...

## 🎨 Estructura del Proyecto

\`\`\`
aseo-market/
├── app/                    # Páginas y layouts de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI base
│   ├── header.tsx        # Header del sitio
│   ├── hero.tsx          # Sección hero
│   └── ...               # Otros componentes
├── lib/                   # Utilidades
│   └── utils.ts          # Funciones helper
├── public/               # Archivos estáticos
├── package.json          # Dependencias
├── tailwind.config.js    # Configuración de Tailwind
├── postcss.config.js     # Configuración de PostCSS
└── next.config.mjs       # Configuración de Next.js
\`\`\`

## 🔄 Comandos Disponibles

\`\`\`bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
\`\`\`

## 📞 Información de Contacto (en el sitio)

- Teléfono: +56 9 9555 42422
- Email: aseomarketspa@gmail.com
- Dirección: Los Militares 5620 Of. 905

## ⚡ Características del Sitio

- ✅ Diseño oscuro moderno
- ✅ Animaciones suaves con Framer Motion
- ✅ Bordes neón en tarjetas
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Barra social fija en el lateral
- ✅ Formulario de contacto
- ✅ Sección de servicios
- ✅ Testimonios de clientes
- ✅ Logos de clientes

## 🎯 Próximos Pasos

Una vez que el proyecto esté funcionando:

1. **Personaliza el contenido** en los componentes
2. **Agrega tus imágenes** en la carpeta `public/`
3. **Modifica los colores** en `app/globals.css` si lo deseas
4. **Conecta el formulario** a tu backend o servicio de email

## 💡 Consejos

- No modifiques los archivos de configuración (tailwind.config.js, postcss.config.js, next.config.mjs) a menos que sepas lo que haces
- Usa `npm run dev` para desarrollo, no `npm run build`
- Los cambios se reflejan automáticamente en el navegador (hot reload)

---

**¿Problemas? Revisa la sección "Si Tienes Problemas" arriba.**
