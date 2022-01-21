const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
  async create (req, res) {
    const resgisterEmployee = req.body
    try {
      const result = await EmployeeService.create(resgisterEmployee)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

module.exports = new EmployeeController()
