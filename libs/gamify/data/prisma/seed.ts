import { PrismaClient } from '../generated';

const prisma = new PrismaClient();
console.log('running seeder');

async function main() {

  await seedApplications();

}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedApplications() {

  const createManyItems = getApplications().map(item =>
    prisma.application.create({
      data: item,
    })
  );

  await Promise.all(createManyItems);
}

function getApplications() {
  return [
    { name: 'Walking Challenge' },
  ];
}


