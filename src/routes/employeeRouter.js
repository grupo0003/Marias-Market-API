const EmployeeController = require('../app/controller/EmployeeController')

module.exports = (server, routes) => {
  routes.post('/', EmployeeController.create)
  server.use(routes)
}
