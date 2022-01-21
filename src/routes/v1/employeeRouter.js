const router = require('express').Router()
const EmployeeController = require('../../app/controller/employeeController')

router
  .get('/employee', EmployeeController.list)

module.exports = router
