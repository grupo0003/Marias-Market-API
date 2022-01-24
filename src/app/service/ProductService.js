const ProductRepository = require('../repository/ProductRepository')
const EmployeeService = require('../service/EmployeeService')

class ProductService {
  async create ({ employee_id: employeId, ...product }) {
    const employee = await EmployeeService.findById(employeId)

    const result = await ProductRepository.create({
      employee_id: employee,
      ...product
    })

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
