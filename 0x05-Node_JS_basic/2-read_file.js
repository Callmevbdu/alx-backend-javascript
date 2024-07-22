const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(Boolean); // Remove empty lines

    const students = lines.map((line) => line.split(','));
    const totalStudents = students.length;

    const csStudents = students.filter(([, , , field]) => field === 'CS');
    const sweStudents = students.filter(([, , , field]) => field === 'SWE');

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map(([firstName]) => firstName).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(([firstName]) => firstName).join(', ')}`);
  } catch (error) {
    console.error(`Error: Cannot load the database\n${error.message}`);
  }
}

module.exports = countStudents;
