/* eslint-disable */
const fs = require('fs');

/**
 * Reads a CSV file asynchronously and counts the students in each field.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} A Promise that resolves when the counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const header = lines.shift();
        if (!header || lines.length === 0) {
          console.log('Number of students: 0');
          resolve();
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

        resolve();
      } catch (processingError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
