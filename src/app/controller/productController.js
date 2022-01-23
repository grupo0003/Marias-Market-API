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

  async create (req, res) {
    const { name, category, price, employee_id: employeId } = req.body
    try {
      const result = await ProductService.create({ name, category, price, employeId })
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

module.exports = new ProductController()
