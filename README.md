## ¿Que trae este repositorio?
Este repositorio trae:
-Next.js v15
-Tailwind v3
-Prisma v6
-NextAuth v15

## Recuerda modificar el nombre de la aplicación en el package.json
## Recuerda el token del .env
## npx prisma studio - para añadir usuarios
## la contraseña dentro de prisma para poner 123456 hay que poner esto: $2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy


¿Cómo usarás esto en el futuro? (Para el cliente de ahora)

Cuando empieces el proyecto del cliente dentro de un rato, no harás create-next-app. Harás esto:

    Clonar: git clone https://github.com/TU_USUARIO/plantilla-next15-tailwind3-prisma.git proyecto-cliente

    Entrar: cd proyecto-cliente

    Instalar: npm install

    Configurar:

        Copias el .env.example (si lo creaste) o creas un .env nuevo.

        Pones la URL de la base de datos de ESTE cliente nuevo.

    Sincronizar: npx prisma db push

    Desconectar: rm -rf .git y git init (para que este proyecto tenga su propio historial y no machaque tu plantilla).