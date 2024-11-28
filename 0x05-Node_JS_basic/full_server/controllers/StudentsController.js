import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];
    readDatabase(databasePath)
      .then((fields) => {
        res.status(200).write('This is the list of our students\n');
        for (const [field, students] of Object.entries(fields).sort()) {
          res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databasePath)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export default StudentsController;

