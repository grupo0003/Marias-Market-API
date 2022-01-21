const router = require('express').Router()
const EmployeeController = require('../../app/controller/employeeController')
const createValidate = require('../../app/validation/employee/create')

router
  .get('/employee', EmployeeController.list)
  .post('/employee', createValidate, EmployeeController.create)

module.exports = router
