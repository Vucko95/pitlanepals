// const { PrismaClient } = require('@prisma/client');

// const db = new PrismaClient();

// async function main() {
//   try {
//     await db.category.createMany({
//       data: [
//         { name: 'Drivers' },
//         { name: 'Team Principals' },
//         { name: 'All-Stars' },
//         { name: 'Famous Persons' },
//         { name: 'Fans' },
//         { name: 'Bots' },
//       ],
//     });
//   } catch (error) {
//     console.error('Error seeding default categories:', error);
//   } finally {
//     await db.$disconnect();
//   }
// }

// main();