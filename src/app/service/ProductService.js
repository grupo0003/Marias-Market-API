const ProductRepository = require('../repository/ProductRepository')

class ProductService {
  async create (product) {
    const result = await ProductRepository.create(product)
    return result
  }

  async findAll (payload) {
    const products = await ProductRepository.findAll({
      employee_id: payload.employee_id,
      name: new RegExp(payload.name, 'i'),
      category: payload.category,
      price: {
        min: payload.min_price,
        max: payload.max_price
      },
      limit: (payload.limit) ? Number(payload.limit) : undefined,
      skip: (payload.skip) ? Number(payload.skip) : undefined
    })

    return products
  }
}

module.exports = new ProductService()
