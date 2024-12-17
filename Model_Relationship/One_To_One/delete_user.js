const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const userToDelete = await prisma.user.delete({ // deleteMany() to delete all users
      where: {
        email: 'aakash@example.com', // Replace with the email of the user you want to delete
      },
    });

    console.log('User deleted:', userToDelete);
  } catch (error) {
    console.error('Error deleting user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
