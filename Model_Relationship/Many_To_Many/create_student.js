const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createStudentWithCourses() {
  try {
    const student = await prisma.student.create({
        data: {
            name: 'kanshi',
            courses: {
              create: [
                { title: 'hindi' },
                { title: 'Telgu' },
              ],
            },
          },
          include: { courses: true },
        });
    
    console.log('Created student with courses:', student);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

createStudentWithCourses();
