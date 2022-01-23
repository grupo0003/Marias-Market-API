const schema = require('../schema/employeeSchema')
const clearObject = require('../helper/clearObject')

class EmployeeRepository {
  async create (employee) {
    return schema.create(employee)
  }

  async findById (id) {
    return schema.findOne({
      _id: id
    })
  }

  async findAll (employee) {
    clearObject(employee)
    return schema.find(employee)
  }

  async update (payload) {
    return schema.updateOne(payload)
  }

  async delete (id) {
    return schema.deleteOne(id)
  }
}

module.exports = new EmployeeRepository()
