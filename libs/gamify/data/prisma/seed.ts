import { PrismaClient } from '../generated';

const prisma = new PrismaClient();
console.log('running seeder');

async function main() {

  await seedUsers();
  await seedApplications();
  await seedBadges();
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

async function seedBadges() {
  const createManyItems = getBadges().map(item =>
    prisma.badge.create({
      data: item
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
    { name: 'Walking Challenge 2022', applicationType: "CHALLENGE", ownerUserId: 1 },
  ];
}

function getBadges() {
  return [
    { name: 'Participant', applicationId: 1, tier: 'BRONZE', repeatedlyObtainable: false },
    { name: 'Week Winner', applicationId: 1, tier: 'SILVER', repeatedlyObtainable: true },
    { name: 'Challenge Winner 2022 Edition', applicationId: 1, tier: 'GOLD', repeatedlyObtainable: false }
  ]
}