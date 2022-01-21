const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
  async create (employee) {
    const result = await EmployeeRepository.create(employee)
    return result
  }

  async findAll (employee) {
    const result = await EmployeeRepository.findAll(employee)
    return result
  }
}

module.exports = new EmployeeService()
