const router = require('express').Router()
const ProductController = require('../../app/controller/productController')
const createValidate = require('../../app/validation/product/create')
const findAllValidate = require('../../app/validation/product/findAll')

router
  .get('/product', findAllValidate, ProductController.list)
  .post('/product', createValidate, ProductController.create)

module.exports = router
