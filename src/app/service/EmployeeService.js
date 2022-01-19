const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
    async create(emplyee) {
        const result = await EmployeeRepository.create(employee);
        return result;
    }
}

module.exports = new EmployeeService();
