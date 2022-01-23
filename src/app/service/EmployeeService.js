const EmployeeRepository = require('../repository/EmployeeRepository')
const EntityNotFound = require('../errors/entityNotFound')

class EmployeeService {
  async create (employee) {
    const result = await EmployeeRepository.create(employee)
    return result
  }

  async findById (id) {
    const employee = await EmployeeRepository.findById(id)

    if (employee === null) {
      throw new EntityNotFound(`Cannot find employee with id = '${id}'`)
    }

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
      situation: payload.situation,
      limit: (payload.limit) ? Number(payload.limit) : undefined,
      skip: (payload.skip) ? Number(payload.skip) : undefined
    })
    return employees
  }

  async delete (id) {
    const result = await this.findById(id)
    await EmployeeRepository.delete(result)
    return result
  }
}

module.exports = new EmployeeService()
