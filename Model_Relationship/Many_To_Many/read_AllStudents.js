const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function fetchAllStudents() {
    try {
      const students = await prisma.student.findMany({
        include: { courses: true }, // Include the courses
      });
  
      if (students.length > 0) {
        console.log('All students with courses:', JSON.stringify(students, null, 2));
      } else {
        console.log('No students found');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  fetchAllStudents();
  