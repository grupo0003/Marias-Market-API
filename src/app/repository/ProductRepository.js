const clearObject = require('../helper/clearObject')
const schema = require('../schema/productSchema')

class ProductRepository {
  async create (product) {
    return schema.create(product)
  }

  async findAll ({ price, ...payload }) {
    clearObject(payload)

    return schema.find({
      $and: [
        { ...payload },
        { price: { $lt: (price.max) ? Number(price.max) : Infinity } },
        { price: { $gt: (price.min) ? Number(price.min) : 0 } }
      ]
    })
  }
}

module.exports = new ProductRepository()
