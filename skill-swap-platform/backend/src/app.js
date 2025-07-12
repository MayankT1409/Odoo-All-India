const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Skill Swap Platform API');
});

// Export app for server.js or testing
module.exports = app; 