const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function updateStudents(newName) {
  try {
    const updatedStudents = await prisma.student.updateMany({
      where: {
        name: { contains: 'Aakash' }, // Find all students whose name contains 'Aakash'
      },
      data: {
        name: newName, // Update the name of all matching students
      },
    });

    console.log('Updated students:', updatedStudents);
  } catch (error) {
    console.error('Error updating students:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateStudents('Aakash The Prime'); // Update all students whose name contains 'Aakash'
