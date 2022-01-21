const schema = require('../schema/employeeSchema')

class EmployeeRepository {
  async create (employee) {
    return schema.create(employee)
  }

  async findAll (employee) {
    return schema.find()
  }
}

module.exports = new EmployeeRepository()
