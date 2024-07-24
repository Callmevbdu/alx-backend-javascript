const express = require('express');

const app = express();
const PORT = 1245;

/**
 * Handles incoming HTTP requests.
 * @param {express.Request} req - The request object.
 * @param {express.Response} res - The response object.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Starts the Express server.
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
