const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updatedStudentName(StudentId, newTitle) {
  try {
    const updatedStudentName = await prisma.student.update({
      where: { id: StudentId }, // Find the course by its ID
      data: {
        name: newTitle, // Update the course title
      },
    });

    console.log('Updated StudentName:', updatedStudentName);
  } catch (error) {
    console.error('Error updating studentName:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updatedStudentName(2, 'Kevin'); // Pass the course ID and new title
