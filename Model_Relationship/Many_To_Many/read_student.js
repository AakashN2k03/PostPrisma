const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fetchStudentById(studentId) {
  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId }, // Find student by ID
      include: { courses: true }, // Include the courses
    });

    if (student) {
      console.log('Student with courses:', student);
    } else {
      console.log(`No student found with ID ${studentId}`);
    }
  } catch (error) {
    console.error('Error fetching student:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fetchStudentById(1); // Pass the Student ID here
