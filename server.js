const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// When someone visits "/", send the login.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
