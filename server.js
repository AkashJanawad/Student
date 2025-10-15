const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let studentData = {};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'student' && password === '1234') {
    res.redirect('/student.html');
  } else {
    res.send('<h2>Invalid Login! <a href="/">Try Again</a></h2>');
  }
});

app.post('/save', (req, res) => {
  const { srn, name, subject1, subject2, subject3 } = req.body;
  studentData = { srn, name, subject1, subject2, subject3 };
  res.redirect('/dashboard.html');
});

app.get('/data', (req, res) => {
  res.json(studentData);
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
