import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Aplicando RLS Policies...');

  try {
    // Habilitar RLS
    await prisma.$executeRawUnsafe(`ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;`);
    await prisma.$executeRawUnsafe(`ALTER TABLE image_resizes ENABLE ROW LEVEL SECURITY;`);

    // Policies para page_views
    await prisma.$executeRawUnsafe(`DROP POLICY IF EXISTS "Permitir inserção anônima em page_views" ON page_views;`);
    await prisma.$executeRawUnsafe(`
      CREATE POLICY "Permitir inserção anônima em page_views" 
      ON page_views 
      FOR INSERT 
      WITH CHECK (true);
    `);

    // Policies para image_resizes
    await prisma.$executeRawUnsafe(`DROP POLICY IF EXISTS "Permitir inserção anônima em image_resizes" ON image_resizes;`);
    await prisma.$executeRawUnsafe(`
      CREATE POLICY "Permitir inserção anônima em image_resizes" 
      ON image_resizes 
      FOR INSERT 
      WITH CHECK (true);
    `);
    
    // Opcional: Policy de leitura pública (se quiser mostrar dados no frontend futuramente)
    // Por enquanto, manter fechado para leitura pública (padrão RLS) é mais seguro.

    console.log('RLS Policies aplicadas com sucesso!');
  } catch (e) {
    console.error('Erro ao aplicar policies:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
