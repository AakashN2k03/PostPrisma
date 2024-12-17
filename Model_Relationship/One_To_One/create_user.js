const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'pranav',
        email: 'pranavsai@example.com',
        profile: {
          create: {
            bio: 'I am a kindergarten',
          },
        },
      },
    });

    console.log(user);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the main function to execute the code
main();
