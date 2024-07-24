import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;


mapRoutes(app);

/**
 * Starts the Express server.
 * @param {number} port - The port number to listen on.
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;
