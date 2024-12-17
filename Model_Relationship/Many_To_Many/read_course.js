const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fetchcourseById(courseId) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId }, 
      include: { students: true }, 
    });

    if (course) {
      console.log('courses with studentID:', course);
    } else {
      console.log(`No course found with ID ${courseId}`);
    }
  } catch (error) {
    console.error('Error fetching student:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fetchcourseById(7); // Pass the Student ID here
