const router = require('express').Router()

const EmployeeController = require('../../app/controller/employeeController')
const createValidate = require('../../app/validation/employee/create')
const updateValidate = require('../../app/validation/employee/update')
const validateParams = require('../../app/validation/employee/queryparams')

router
  .get('/employee', EmployeeController.list)
  .post('/employee', createValidate, EmployeeController.create)
  .put('/employee/:id', validateParams, updateValidate, EmployeeController.update)
  .delete('/employee/:id', validateParams, EmployeeController.delete)

module.exports = router
