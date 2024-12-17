//updating post
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function updatePost() {
    try{
    const updatedPost = await prisma.post.update({
      where: {
        id: 1,  // ID of the post to be updated
      },
      data: {
        title: 'Updated First Post',  // New title
        content: 'This is the updated Steve rogers of the first post.',  // New content
      },
    });
  
    console.log('Updated post:', updatedPost);
  }
catch(e){
    console.error(e);
  }
finally {
    await prisma.$disconnect();
  };
}
updatePost();

//update All Posts
// const updatedPosts = await prisma.post.updateMany({
//     data: {
//       title: 'Updated Title for All Posts',  // New title for all posts
//       content: 'This content is updated for all posts.',  // New content for all posts
//     },
//   });