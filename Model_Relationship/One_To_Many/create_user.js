const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createUserWithPosts() {
  try {
    // Create a user with associated posts
    const user = await prisma.user.create({
      data: {
        name: 'rahul',
        email:'rahul@example.com',
        posts: {
          create: [
            { title: 'First Post', content: 'This is Naruto post.' },
            { title: 'Second Post', content: 'This is Khakashi post.' },
          ],
        },
      },
    });

    console.log('User with posts created:', user);
  } catch (error) {
    // Catch any error that occurs and log it
    console.error('Error creating user with posts:', error);
  } finally {
    // Ensure Prisma client disconnects after operation
    await prisma.$disconnect();
  }
}

createUserWithPosts();
