const schema = require('../schema/productSchema')

class ProductRepository {
  async create (product) {
    return schema.create(product)
  }
}

module.exports = new ProductRepository()
