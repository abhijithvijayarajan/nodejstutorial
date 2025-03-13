
// server/index.js

const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware to set Content-Type to application/json
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
