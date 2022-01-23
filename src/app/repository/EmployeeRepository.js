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

  async findAll ({ limit = 0, skip = 0, ...payload }) {
    clearObject(payload)

    const filter = {
      $: [{ ...payload }
      ]
    }
    const count = await schema.count(filter)
      .exec()

    const employees = await schema.find(filter)
      .limit(limit)
      .skip((skip === 0) ? skip : skip + 1)
      .exec()

    return new Promise((resolve, reject) => {
      resolve({
        employees: employees,
        currentPage: skip + 1,
        pageSize: (limit === 0) ? count : limit,
        totalCount: count,
        totalPages: (limit === 0) ? 1 : Math.ceil(count / limit)
      })
    })
  }

  async update (payload) {
    return schema.updateOne(payload)
  }

  async delete (id) {
    return schema.deleteOne(id)
  }
}

module.exports = new EmployeeRepository()
