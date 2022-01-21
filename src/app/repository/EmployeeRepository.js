const schema = require('../schema/employeeSchema')

class EmployeeRepository {
  async create (employee) {
    return schema.create(employee)
  }

  async update (employee) {
    return schema.update(employee)
  }

  async findById (id) {
    return schema.findById(id)
  }
}

module.exports = new EmployeeRepository()
