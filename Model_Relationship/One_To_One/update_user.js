const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Update user by email
    const updatedUser = await prisma.user.update({
      where: {
        email: 'aakash@example.com',  // Replace with the user's email you want to update
      },
      data: {
        name: 'Aakash The king',  // New name
        profile: {
          update: {
            bio: 'I am a machine learning ,AI enthusiast and fullstack developer !'  // Update the profile bio
          }
        }
      },
    });

    console.log('Updated User:', updatedUser);
  } catch (error) {
    console.error('Error updating user or profile:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
// update All users
/* 
const updatedUsers = await prisma.user.updateMany({
      data: {
        name: 'Updated Name', // Update the name for all users
      },
    }); 
    */