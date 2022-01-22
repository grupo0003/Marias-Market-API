const EmployeeService = require('../service/EmployeeService')

class EmployeeController {
  async create (req, res) {
    const { name, cpf, office, birthday } = req.body
    const validCpf = EmployeeController.validCpf(req.body.cpf)
    try {
      if (validCpf === true) {
        const result = await EmployeeService.create({ name, cpf, office, birthday })
        return res.status(201).json(result)
      } else {
        res.json({ mensagem: `o CPF ${req.body.cpf} não é válido` })
      }
      const result = await EmployeeService.create({ name, cpf, office, birthday })
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  async update (req, res) {
    const { id } = req.params
    const updateEmployee = req.body
    try {
      const employee = await EmployeeService.update(id, updateEmployee)
      return res.status(201).json(employee)
    } catch (error) {
      return res.status(500).json(error.message)
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
}

module.exports = new EmployeeController()
