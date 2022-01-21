const schema = require('../schema/employeeSchema')

class EmployeeRepository {
  async create (employee) {
    return schema.create(employee)
  }

  async findById (id) {
    return schema.findOne({ _id: id })
  }

  async findAll (employee) {
    return schema.find()
  }
}

module.exports = new EmployeeRepository()
