const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readUserWithPosts() {
  try {
    const allUsersWithPosts = await prisma.user.findMany({
      include: {
        posts: true,  // This will include all related posts
      },
    });

    // Log the result by stringifying the object
    console.log('User with posts:', JSON.stringify(allUsersWithPosts, null, 2));
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

readUserWithPosts();

// JSON.stringify(value, replacer, space)
// value: The JavaScript object or array you want to convert into a string (in your case, allUsersWithPosts).
// replacer: (Optional) A function or array used to filter or modify the object before stringifying.
//  null means no exclude of properties are made -> i.e all properties are required.
// space: (Optional) A number (or string) that specifies the indentation level for pretty-printing the JSON string.