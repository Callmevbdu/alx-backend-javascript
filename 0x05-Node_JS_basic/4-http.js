const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer()

/**
 * Handles incoming HTTP requests.
 * @param {http.IncomingMessage} request - The request object.
 * @param {http.ServerResponse} res - The response object.
 */
app.on('request', (_, res) => {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
});

/**
 * Starts the HTTP server.
 */
app.listen(PORT, HOST, () => {
    process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
