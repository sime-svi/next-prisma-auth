// reset-admin.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@admin.com';
  const password = '123456'; 

  console.log('🗑️  Borrando usuario antiguo (si existe)...');
  try {
    await prisma.user.delete({ where: { email } });
  } catch (e) {
    // Si no existe, ignoramos el error
  }

  console.log(`⚙️  Generando nuevo hash limpio para: ${password}`);
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(`📝 Creando usuario nuevo: ${email}`);
  await prisma.user.create({
    data: {
      email: email,
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN'
    },
  });

  console.log('-------------------------------------------');
  console.log('✅ ¡HECHO! Usuario reparado.');
  console.log(`🔑 CORREO: ${email}`);
  console.log(`🔑 CLAVE:  ${password}`);
  console.log('-------------------------------------------');
}

main()
  .catch((e) => {
    console.error('❌ ERROR:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });