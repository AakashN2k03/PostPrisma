const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function fetchAllcourse() {
    try {
      const courses = await prisma.course.findMany({
        include: { students: true }, // Include the courses
      });
  
      if (courses.length > 0) {
        console.log('All courses with studentid:', JSON.stringify(courses, null, 2));
      } else {
        console.log('No courses found');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  fetchAllcourse();
  