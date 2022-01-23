const EmployeeService = require('../service/EmployeeService')
// const BadRequest = require('../errors/badRequest')
const EntityNotFound = require('../errors/entityNotFound')

class EmployeeController {
  async create (req, res) {
    const { name, cpf, office, birthday } = req.body
    try {
      const result = await EmployeeService.create({ name, cpf, office, birthday })
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async update (req, res, next) {
    const { id } = req.params
    const updateEmployee = req.body
    try {
      const employee = await EmployeeService.update(id, updateEmployee)
      if (!employee) throw new EntityNotFound(`Can't be updated with "id" ${req.params.id}`)
      return res.status(201).json(employee)
    } catch (error) {
      next(error)
    }
  }

  async list (req, res) {
    const payload = req.query

    const employees = await EmployeeService.findAll({
      employee_id: payload.id,
      name: payload.name,
      cpf: payload.cpf,
      bithday: payload.birthday,
      office: payload.office,
      situation: payload.situation
    })

    res.status(200).json({
      employees: employees
    })
  }

  async delete (req, res) {
    const { id } = req.params
    try {
      await EmployeeService.delete(id)
      return res.status(204).end()
    } catch (error) {
      return res.status(404).json({ message: `id ${id} Not found` })
    }
  }
}

module.exports = new EmployeeController()
