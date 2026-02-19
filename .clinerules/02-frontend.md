---
paths:
  - "src/components/**"
  - "src/app/**"
  - "src/hooks/**"
---

# Reglas de Frontend y UI

## Componentes React
- Prioriza el uso de Server Components de Next.js.
- Utiliza la directiva 'use client' únicamente cuando el componente requiera interactividad (hooks de estado, eventos de ratón/teclado).
- Mantén los componentes enfocados en una única responsabilidad.

## Estilos
- Utiliza exclusivamente Tailwind CSS para el diseño.
- Evita el CSS en línea o la creación de archivos CSS modulares a menos que sea estrictamente necesario para animaciones complejas.