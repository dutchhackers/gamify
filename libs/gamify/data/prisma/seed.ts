import { PrismaClient } from '../generated';

const prisma = new PrismaClient();
console.log('running seeder');

async function main() {

  await seedUsers();
  await seedApplications();

}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedUsers() {
  const createManyItems = getUsers().map(item =>
    prisma.user.create({
      data: item,
    })
  );

  await Promise.all(createManyItems);
}

async function seedApplications() {

  const createManyItems = getApplications().map(item =>
    prisma.application.create({
      data: item,
    })
  );

  await Promise.all(createManyItems);
}

function getUsers() {
  return [
    { email: 'test@test.com' },
  ]
}

function getApplications() {
  return [
    { name: 'Walking Challenge', applicationType: "CHALLENGE", ownerUserId: 1 },
  ];
}

