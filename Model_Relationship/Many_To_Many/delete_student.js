const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteStudent(studentId) {
  try {
    const deletedStudent = await prisma.student.delete({
      where: { id: studentId }, // Specify the student ID to delete
    });

    console.log('Deleted student:', deletedStudent);
  } catch (error) {
    console.error('Error deleting student:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteStudent(2); // Delete the student with ID 7

// For delete courses,just change the model name from student to courses and respective parameters