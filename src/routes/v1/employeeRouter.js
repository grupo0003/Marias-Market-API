const router = require('express').Router()
const EmployeeController = require('../../app/controller/employeeController')
const createValidate = require('../../app/validation/employee/create')
const updateValidate = require('../../app/validation/employee/update')

router.options('employee', (req, res) => {
  res.set('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.status(201).end()
})

router
  .get('/employee', EmployeeController.list)
  .post('/employee', createValidate, EmployeeController.create)
  .put('/employee/:id', updateValidate, EmployeeController.update)
  .delete('/employee/:id', EmployeeController.delete)

module.exports = router
