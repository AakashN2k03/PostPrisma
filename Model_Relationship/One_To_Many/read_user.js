const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function readUserWithPosts() {
    try{
        const userWithPosts = await prisma.user.findUnique({
      where: {
        email: 'nithish@example.com',
      },
      include: {
        posts: true,  // This will include all related posts
      },
    });
  
    console.log('User with posts:', userWithPosts);
  }

catch(error){
    console.error(error);
  }
finally{
    await prisma.$disconnect();
  };
}
  readUserWithPosts();