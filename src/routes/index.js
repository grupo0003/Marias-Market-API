const { Router } = require('express')
const employee = require('./employeeRouter')

module.exports = server => {
  server.use((req, res) => {
    employee(server, new Router())
  })
}
