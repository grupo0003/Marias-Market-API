const router = require('express').Router()
const ProductController = require('../../app/controller/productController')
const createValidate = require('../../app/validation/product/create')

router
  .get('/product', ProductController.list)
  .post('/product', createValidate, ProductController.create)

module.exports = router
