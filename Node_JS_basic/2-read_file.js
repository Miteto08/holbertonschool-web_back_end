/* eslint-disable */
const fs = require('fs');

/**
 * Reads a CSV file and counts the students in each field.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift();

    if (!header || lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const studentsByField = {};
    let totalStudents = 0;

    for (const line of lines) {
      const fields = line.split(',');

      if (fields.length < 4 || fields.some((field) => field.trim() === '')) {
        continue;
      }

      const firstname = fields[0];
      const field = fields[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstname);
      totalStudents++;
    }

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
