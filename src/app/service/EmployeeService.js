const EmployeeRepository = require('../repository/EmployeeRepository')
const EntityNotFound = require('../errors/entityNotFound')

class EmployeeService {
  async create (employee) {
    const result = await EmployeeRepository.create(employee)
    return result
  }

  async findById (id) {
    const employee = await EmployeeRepository.findById(id)
    if (employee === null) throw new EntityNotFound(`Employee with id ${id} not found`)
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

  async findAll (payload) {
    const employees = await EmployeeRepository.findAll({
      employee_id: payload.employee_id,
      name: new RegExp(payload.name, 'i'),
      cpf: payload.cpf,
      office: payload.office,
      birthday: payload.birthday,
      situation: payload.situation
    })
    return employees
  }

  async delete (id) {
    const result = await this.findById(id)
    await EmployeeRepository.delete(result)
    if (result === null) throw new EntityNotFound(`Result with id ${id} not found`)
    return result
  }
}

module.exports = new EmployeeService()
