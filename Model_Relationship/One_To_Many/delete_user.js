//deleting a post
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function deletePost() {
    try{
    const deletedPost = await prisma.post.delete({ //   const deletedPosts = await prisma.post.deleteMany({});
      where: {
        id: 4,  // ID of the post to be deleted
      },
    });
  
    console.log('Deleted post:', deletedPost);
  }
  

catch(e) {
console.error(e);
  }
finally{
    await prisma.$disconnect();
};
}
deletePost();