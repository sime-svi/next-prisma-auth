# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Flujo de Trabajo

- Al iniciar cualquier tarea, leer `MEMORY.md` (contexto del proyecto), `DATABASE_SCHEMA.md` (esquema actual de la BD) y `TREE.md` (estructura del proyecto).
- Al finalizar cambios, actualizar `MEMORY.md` con la fecha y los cambios realizados, manteniendo orden y organización.
- Tras cualquier cambio en la base de datos, actualizar `DATABASE_SCHEMA.md` y modificar `prisma/seed.ts` añadiendo ejemplos de los nuevos modelos/campos.
- Tras cualquier cambio en la estructura de ficheros, actualizar `TREE.md`.
- Consultar las skills disponibles en `.claude/skills/` y usarlas cuando corresponda.

## Estándares de Código

- TypeScript estricto en todo el proyecto.
- Prohibido usar emojis en código, comentarios, terminal o mensajes de commit.
- Los comentarios en el código deben explicar el "por que" de la logica de negocio, nunca describir lo que hace el codigo o las instrucciones recibidas.

## Skills Disponibles

Se encuentran en `.claude/skills/`. Usarlas siempre que apliquen:
- `changelog-generator` — Generar changelogs tras cambios relevantes.
- `frontend-design` — Decisiones y estandares de diseno del frontend.
- `interface-design` — Diseno de interfaces de usuario.
- `vercel-react-best-practices` — Buenas practicas para Next.js / React en Vercel.

## Commands

```bash
npm run dev        # Iniciar servidor de desarrollo (Turbopack)
npm run build      # Build de producción (Turbopack)
npm run start      # Servidor de producción
npm run lint       # Linting con ESLint

# Prisma
npx prisma migrate dev        # Aplicar migraciones en desarrollo
npx prisma migrate deploy     # Aplicar migraciones en producción
npx prisma db seed            # Sembrar datos iniciales
npx prisma studio             # UI visual de la BD
npx prisma generate           # Regenerar el cliente Prisma tras cambiar el schema
```

## Variables de entorno necesarias

## Arquitectura

### Stack
Next.js 15 (App Router) + React 19 + TypeScript + Prisma (PostgreSQL) + NextAuth v5 + Tailwind CSS + Leaflet