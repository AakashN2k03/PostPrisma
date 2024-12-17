const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateCourse(courseId, newTitle) {
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: courseId }, // Find the course by its ID
      data: {
        title: newTitle, // Update the course title
      },
    });

    console.log('Updated course:', updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateCourse(9, 'French'); // Pass the course ID and new title
