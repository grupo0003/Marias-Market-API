const clearObject = require('../helper/clearObject')
const schema = require('../schema/productSchema')

class ProductRepository {
  async create (product) {
    return schema.create(product)
  }

  async findAll ({ price, limit = 0, skip = 0, ...payload }) {
    clearObject(payload)

    const filter = {
      $and: [
        { ...payload },
        { price: { $lt: (price.max) ? Number(price.max) : Infinity } },
        { price: { $gt: (price.min) ? Number(price.min) : 0 } }
      ]
    }

    const count = await schema.count(filter)
      .exec()

    const products = await schema.find(filter)
      .limit(limit)
      .skip((skip === 0) ? skip : skip + 1)
      .exec()

    return new Promise((resolve, reject) => {
      resolve({
        products: products,
        currentPage: skip + 1,
        pageSize: (limit === 0) ? count : limit,
        totalCount: count,
        totalPages: (limit === 0) ? 1 : Math.ceil(count / limit)
      })
    })
  }
}

module.exports = new ProductRepository()
