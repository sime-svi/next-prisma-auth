# Modern Next.js 15 Boilerplate

Este es un template moderno y robusto diseñado para iniciar proyectos de alto rendimiento. Combina las últimas versiones de **Next.js**, **Auth.js**, **Prisma** y **Tailwind CSS**.

## 🚀 Tecnologías Principales

- **Framework:** [Next.js 15.5](https://nextjs.org/) (App Router, Turbopack)
- **Autenticación:** [Auth.js v5](https://authjs.dev/) (NextAuth Beta)
- **Base de Datos & ORM:** [Prisma 6](https://www.prisma.io/)
- **Estilos:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Validación:** [Zod](https://zod.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Características

- 🔐 **Autenticación Completa:** Implementación de `Credentials Provider` con `bcryptjs`.
- 🗄️ **Base de Datos Ready:** Configurado para PostgreSQL (fácilmente editable a MySQL/SQLite en `schema.prisma`).
- 🏗️ **Arquitectura Limpia:** Estructura organizada en `/src` con soporte para Server Actions.
- ⚡ **Optimizado:** Configuración lista para usar Turbopack para un desarrollo ultra rápido.
- 🛠️ **Utilidades de Admin:** Script incluido para resetear/crear usuarios administradores.

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo> nombre-de-tu-proyecto
   cd nombre-de-tu-proyecto
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de Entorno:**
   Copia el archivo `.env.example` a `.env` y completa los valores:
   ```bash
   cp .env.example .env
   ```
   > **Nota:** Genera tu `AUTH_SECRET` usando `npx auth secret`.

4. **Preparar la Base de Datos:**
   Sincroniza el esquema de Prisma con tu base de datos:
   ```bash
   npx prisma db push
   ```

## 📖 Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Turbopack. |
| `npm run build` | Compila la aplicación para producción. |
| `npx prisma studio` | Abre la interfaz visual para gestionar tu base de datos. |
| `npx tsx reset-admin.ts` | Ejecuta el script para crear/resetear el usuario administrador (`admin@admin.com` / `123456`). |
| `npm run lint` | Ejecuta el linter para verificar la calidad del código. |

## 📁 Estructura del Proyecto

```text
├── prisma/              # Esquema de base de datos y migraciones
├── src/
│   ├── app/             # Rutas, layouts y componentes de página
│   ├── lib/             # Acciones de servidor y utilidades
│   ├── auth.ts          # Configuración principal de Auth.js
│   ├── auth.config.ts   # Middleware de autenticación y callbacks
│   └── middleware.ts    # Middleware de Next.js
├── reset-admin.ts       # Script de utilidad para administración
└── tailwind.config.js   # Configuración de estilos
```

## 📝 Notas de Uso

- **Cambio de DB:** Si prefieres MySQL o SQLite, cambia el `provider` en `prisma/schema.prisma` y vuelve a ejecutar `npx prisma generate`.
- **Nuevo Proyecto:** Si usas este repo como plantilla, recuerda borrar la carpeta `.git` y ejecutar `git init` para empezar un historial limpio.