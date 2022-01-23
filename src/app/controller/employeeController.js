const EmployeeService = require('../service/EmployeeService')

const EntityNotFound = require('../errors/entityNotFound')
const NotFound = require('../errors/http/notFound')

class EmployeeController {
  async create (req, res, next) {
    const { name, cpf, office, birthday } = req.body
    try {
      const result = await EmployeeService.create({ name, cpf, office, birthday })
      return res.status(201).json(result)
    } catch (error) {
      next(error)
    }
  }

  async update (req, res, next) {
    const { id } = req.params
    const updateEmployee = req.body
    try {
      const employee = await EmployeeService.update(id, updateEmployee)
      return res.status(200).json(employee)
    } catch (error) {
      if (error instanceof EntityNotFound) {
        next(new NotFound(error.message))
      }

      next(error)
    }
  }

  async list (req, res, next) {
    try {
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
    } catch (error) {
      next(error)
    }
  }

  async delete (req, res, next) {
    const { id } = req.params
    try {
      await EmployeeService.delete(id)
      return res.status(204).end()
    } catch (error) {
      if (error instanceof EntityNotFound) {
        next(new NotFound(error.message))
      }

      next(error)
    }
  }
}

module.exports = new EmployeeController()
