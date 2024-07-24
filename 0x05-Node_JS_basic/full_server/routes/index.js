import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Index.js file:
 * 	Links the route / to the AppController
 * 	Link the route /students and /students/:majorto the StudentsController
 * @param {Express} app - Express app.
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
