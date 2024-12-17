# PostPrisma: Learning Model Relationships with Prisma and PostgreSQL

## 1. Introduction

This project is designed for beginners and intermediate learners who want to explore Prisma and PostgreSQL while understanding database model relationships. You will learn how to define relationships in the database schema, generate migrations, and interact with the database using JavaScript.

## 2. Technologies Used

- **Prisma**: Next-generation Node.js ORM for database interaction.
- **PostgreSQL**: A powerful, open-source relational database.
- **Node.js**: JavaScript runtime to connect Prisma with PostgreSQL.
- **JavaScript**: Programming language for performing CRUD operations.

## 3. Database Relationships

### a. One-to-One

A one-to-one relationship means that a record in one table corresponds to exactly one record in another table.

**Example**: A User has one Profile.

### b. One-to-Many

A one-to-many relationship means that one record in a table can be associated with multiple records in another table.

**Example**: A Post has multiple Comments.

### c. Many-to-Many

A many-to-many relationship means that records in one table can relate to multiple records in another table, and vice versa.

**Example**: Students can enroll in multiple Courses, and Courses can have multiple Students.

## 4. Setup and Installation

1. **Install Node.js**: Ensure you have Node.js installed.

2. **Install Prisma CLI**:
   ```bash
   npm install @prisma/cli --save-dev
   ```

3. **Install PostgreSQL**: Set up PostgreSQL and create a database.

4. **Initialize Prisma**:
   ```bash
   npx prisma init
   ```
   This creates the `prisma/schema.prisma` file.

5. **Install Prisma Client**:
   ```bash
   npm install @prisma/client
   ```

6. **Update Your Database Connection String**: Update the `DATABASE_URL` in the `.env` file. 
   
   **Example**:
   ```makefile
   DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
   ```

7. **Create Migrations**:
   ```bash
   npx prisma migrate dev --name init
   ```

You can perform CRUD operations using Prisma Client.

## 5. Conclusion

This project provides a comprehensive understanding of how to use Prisma and PostgreSQL to define database relationships, perform CRUD operations, and connect everything using JavaScript. By exploring One-to-One, One-to-Many, and Many-to-Many relationships, you will gain practical knowledge to build database-driven applications.

**Feel free to clone, contribute, and explore!**
