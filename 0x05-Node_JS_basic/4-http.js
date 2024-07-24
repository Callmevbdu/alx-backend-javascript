/**
 * Create a small HTTP server using the http module:
 *      - It should be assigned to the variable app and this one must be
 *      exported
 *      - HTTP server should listen on port 1245
 *      - Displays Hello Holberton School! in the page body for any endpoint
 *      as plain text
 */
const http = require('http');
const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer()

app.on('request', (_, res) => {
    const responseText = 'Hello Holberton School!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
    process.stdout.write('Server listening at -> http://${HOST}:${PORT}\n');
});

module.exports = app;
