// 6-http_express.js
const express = require('express');
const app = express();
const PORT = 1245;

// Define a route for the root path ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
