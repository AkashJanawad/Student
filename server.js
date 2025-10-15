const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve login page at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login form POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // simple validation (you can change this)
  if (username === 'student' && password === '1234') {
    res.send('<h2>Login Successful 🎉</h2><p>Welcome, ' + username + '!</p>');
  } else {
    res.send('<h2>Invalid username or password ❌</h2><a href="/">Try Again</a>');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
