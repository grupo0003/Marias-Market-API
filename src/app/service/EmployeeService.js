const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
  async create (employee) {
    const result = await EmployeeRepository.create(employee)
    return result
  }

  async update (id, payload) {
    const employee = await EmployeeRepository.findById(id)
    const mutables = ['nome', 'cpf', 'birthday', 'office', 'situation']

    mutables.forEach(key => {
      if (payload[key] !== undefined) {
        employee[key] = payload[key]
      }
    })

    employee.save()
    return employee
  }
}

module.exports = new EmployeeService()
