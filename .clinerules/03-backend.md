---
paths:
  - "src/api/**"
  - "src/actions/**"
  - "src/lib/**"
---

# Reglas de Backend y Lógica de Servidor

## Server Actions y APIs
- Utiliza Server Actions para las mutaciones de datos en lugar de Route Handlers (API routes) cuando sea posible.
- Valida siempre los datos de entrada en el servidor utilizando bibliotecas de validación de esquemas (ej. Zod).
- Maneja los errores de forma controlada, devolviendo objetos tipados en lugar de lanzar excepciones no capturadas.

## Base de Datos y Postgres
- Cuando necesites interactuar con la base de datos, utiliza el MCP `dbhub` para verificar la estructura real de las tablas antes de escribir tipos de TypeScript o consultas SQL/ORM.
- Asegúrate de que todas las conexiones a la base de datos desde Next.js se realicen de forma segura en Server Components o Server Actions, nunca exponiendo credenciales al cliente.