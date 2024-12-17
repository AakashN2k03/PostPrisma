//updating user
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function updateUser() {
    try{
    const updatedPost = await prisma.user.update({
      where: {
        id:2,  // ID of the post to be updated
      },
      data: {
        name:'Aakash The Prime'
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
updateUser();