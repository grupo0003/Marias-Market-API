const ProductService = require('../service/ProductService')

class ProductController {
  async list (req, res) {
    const payload = req.query

    const products = await ProductService.findAll({
      employee_id: payload.employee_id,
      name: payload.name,
      category: payload.category,
      min_price: payload.min_price,
      max_price: payload.max_price,
      limit: payload.limit,
      skip: payload.skip
    })

    res.status(200).json(products)
  }
}

module.exports = new ProductController()
