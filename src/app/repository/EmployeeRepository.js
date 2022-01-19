const schema = require('../schema/employeeSchema')

class EmployeeRepository {
  async create (employee) {
    return schema.create(employee)
  }
}

module.exports = new EmployeeRepository()
