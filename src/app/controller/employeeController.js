// rota temporária

const employee = []

class EmployeeController {
  create (req, res) {
    const resgisterEmployee = req.body
    try {
      employee.push(resgisterEmployee)
      const result = employee.find((employee) => {
        return employee.name === resgisterEmployee.name
      })
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
