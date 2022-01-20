const router = require('express').Router()

const employeeRoutes = require('./employeeRouter')

router.use(employeeRoutes)

module.exports = router
