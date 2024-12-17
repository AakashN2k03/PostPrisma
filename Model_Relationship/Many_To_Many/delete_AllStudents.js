const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function deleteAllStudents() {
  try {
    const deletedStudents = await prisma.student.deleteMany(); // No where clause, deletes all records

    console.log('Deleted students count:', deletedStudents.count); // The count of deleted records
  } catch (error) {
    console.error('Error deleting all students:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllStudents(); // Delete all students

//// For deletemany() courses,just change the model name from student to courses and respective parameters