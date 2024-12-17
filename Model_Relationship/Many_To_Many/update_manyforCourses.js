const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateCourses(newTitle) {
  try {
    const updatedCourses = await prisma.course.updateMany({
      where: { title: { contains: 'Math' } }, // Find all courses that contain 'Math' in the title
      data: {
        title: newTitle, // Update the title for all matching courses
      },
    });

    console.log('Updated courses:', updatedCourses);
  } catch (error) {
    console.error('Error updating courses:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateCourses('Mathematics'); // Update all courses with 'Math' in their title
