import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.player.findMany();
  // if(true) return;

  await seedPlayers();

  const players = await prisma.player.findMany();
  console.log(players);

  await prisma.playersInMatches.deleteMany();
  await prisma.match.deleteMany({});

  await seedMatches();
  const matches = await prisma.match.findMany();
  console.log(matches);
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function seedPlayers() {
  const createManyPosts = getPlayers().map(player =>
    prisma.player.create({
      data: player,
    })
  );

  await prisma.playersInMatches.deleteMany();
  await prisma.match.deleteMany({});

  // Clear table
  await prisma.player.deleteMany();

  // Seed players
  await Promise.all(createManyPosts);
}

async function seedMatches() {
  const players = await prisma.player.findMany();
  const playerIds = players.map(player => player.id);

  const createManyItems = getMatches(playerIds, 5).map(match =>
    prisma.match.create({
      data: match,
    })
  );

  // Seed players
  await Promise.all(createManyItems);
}

function getPlayers() {
  return [
    {
      name: 'Michael',
      nickname: 'DEADmike',
      email: 'mschilling@move4mobile.com',
      profile: {
        create: {
          bio: 'I am a great player', // <= text suggested by co-pilot :-)
          slackId: 'U1234',
          twitterHandle: 'mschilling',
          githubHandle: 'mschilling',
        },
      },
      stats: {
        create: {
          totalWins: 5,
          totalLosses: 0,
          highestWinStreak: 5,
          highestLoseStreak: 0,
        },
      },
    },
    { name: 'Cas', email: 'cvandinter@move4mobile.com' },
    { name: 'Bas', email: 'bdegroot@move4mobile.com' },
    { name: 'Matthijs', email: 'mklaver@move4mobile.com' },
    { name: 'Cars', email: 'cwillems@move4mobile.com' },
    { name: 'Arjan', email: 'amazee@move4mobile.com' },
    { name: 'Vincent', email: 'vmelgers@move4mobile.com' },
    { name: 'Thessa', email: 'thulsman@move4mobile.com' },
    { name: 'Richard', email: 'rvandermeulen@move4mobile.com' },
    { name: 'Tom', email: 'tmiedema@move4mobile.com', active: false },
  ];
}

function getMatches(playerIds: number[] = [], numberOfMatches: number = 10) {
  const matches: any[] = [];
  for (let i = 0; i < numberOfMatches; i++) {
    matches.push(createRandomMatch(playerIds));
  }
  return matches;
}

function createRandomMatch(playerIds: number[]) {
  const randomPlayerIds = playerIds.sort((a, b) => 0.5 - Math.random());

  const [playerId1, playerId2, playerId3, playerId4] = randomPlayerIds;

  return {
    homeScore: Math.floor(Math.random() * 10),
    awayScore: Math.floor(Math.random() * 10),
    status: 'FINISHED',
    players: {
      create: [
        {
          playerId: playerId1,
          side: 'HOME',
        },
        {
          playerId: playerId2,
          side: 'HOME',
        },
        {
          playerId: playerId3,
          side: 'AWAY',
        },
        {
          playerId: playerId4,
          side: 'AWAY',
        },
      ],
    },
    events: {
      create: [
        {
          matchPlayerId: playerId1,
          type: 'GOAL',
        },
      ],
    },
  };
}
