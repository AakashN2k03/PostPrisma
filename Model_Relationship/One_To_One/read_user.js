const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const userWithProfile = await prisma.user.findUnique({
      where: { email: 'aakash@example.com' },
      include: { profile: true },
    });

    console.log(userWithProfile);
  } catch (error) {
    console.error('Error fetching user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()