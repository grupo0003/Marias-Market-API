const router = require('express').Router()
const ProductController = require('../../app/controller/productController')

router
  .get('/product', ProductController.list)

module.exports = router
