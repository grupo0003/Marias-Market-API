const router = require('express').Router()

const employeeRoutes = require('./employeeRouter')
const productRoutes = require('./productRoutes')

router.use(employeeRoutes)
router.use(productRoutes)

module.exports = router
