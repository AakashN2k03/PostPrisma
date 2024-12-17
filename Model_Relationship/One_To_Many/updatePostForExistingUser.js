const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addPostsToExistingUser() {
  try {
    const userId = 2; // Replace with the ID of the user who does not have posts

    // Update the user to add posts
    const updatedUserWithPosts = await prisma.user.update({
      where: {
        id: userId, // Find user by ID
      },
      data: {
        posts: {
          create: [
            { title: 'New Post 1', content: 'This is the first new post by aakash the king.' },
            { title: 'New Post 2', content: 'This is the second new post by aakash the prime' },
          ],
        },
      },
      include: {
        posts: true, // Include posts to verify they were added
      },
    });

    console.log('Updated user with new posts:', updatedUserWithPosts);
  } catch (error) {
    console.error('Error adding posts to user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addPostsToExistingUser();
