# Estándares Globales del Proyecto

## Flujo de Trabajo
- Lee siempre `MEMORY.md` al iniciar una tarea para comprender el contexto actual.
- Actualiza `MEMORY.md` al finalizar cambios importantes.
- Utiliza el MCP `sequential-thinking` para planificar antes de modificar código complejo.
- Utiliza el MCP `filesystem` para explorar directorios antes de crear archivos nuevos.

## Estándares de Código
- Pila tecnológica: Next.js 15 (App Router), TypeScript estricto, Tailwind CSS 3.
- No incluyas jamás comentarios en el código que expliquen el prompt o las instrucciones recibidas.
- Los comentarios en el código deben explicar el "porqué" de la lógica de negocio, usando buenas prácticas.
- Está terminantemente prohibido el uso de emojis en el código, comentarios, terminal o mensajes de commit.

## Herramientas Disponibles (MCP)
- Tienes acceso al MCP `dbhub` conectado a una base de datos PostgreSQL local. Úsalo para inspeccionar esquemas o probar consultas antes de implementarlas en el código.
- Tienes acceso al MCP `n8n` para interactuar con flujos de trabajo automatizados.
- Utiliza siempre `sequential-thinking` antes de diseñar arquitecturas de datos complejas.
- - Búsqueda: Usa el servidor `exa` exclusivamente. Utiliza `web_search_exa` para búsquedas generales y `get_code_context_exa` para resolver dudas de programación y leer documentación.