const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
  async create (employee) {
    const result = await EmployeeRepository.create(employee)
    return result
  }

  async findById (id) {
    const employee = await EmployeeRepository.findById(id)
    return employee
  }

  async update (id, payload) {
    const employee = await this.findById(id)
    const mutables = ['name', 'cpf', 'birthday', 'office', 'situation']

    mutables.forEach(key => {
      if (payload[key] !== undefined) {
        employee[key] = payload[key]
      }
    })
    await EmployeeRepository.update(employee)
    return employee
  }

  async findAll (employee) {
    const result = await EmployeeRepository.findAll(employee)
    return result
  }
}

module.exports = new EmployeeService()
