const EmployeeController = require('../../app/controller/EmployeeController')

const router = require('express').Router()

router
  .put('/employee', EmployeeController.update)

module.exports = router
