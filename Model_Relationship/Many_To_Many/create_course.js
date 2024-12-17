const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function connectExistingStudentsToCourse() {
  try {
    const course = await prisma.course.create({
      data: {
        title: 'Science', // Create a new course 'Science'
        students: {
          connect: [
            { id: 1 }, // Connect Student with id = 1
            { id: 2 }, // Connect Student with id = 2
          ],
        },
      },
      include: { students: true },
    });

    console.log('Connected existing students to course:', course);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

connectExistingStudentsToCourse();
