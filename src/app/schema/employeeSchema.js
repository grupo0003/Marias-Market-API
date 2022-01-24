const mongoose = require('mongoose')
const { Schema } = mongoose

const uuid = require('uuid')

const schema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    immutable: true
  },
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  office: {
    type: String,
    enum: ['gerente', 'vendedor', 'caixa'],
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  situation: {
    type: String,
    require: true,
    enum: ['activate', 'deactivate'],
    default: 'activate'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

schema.method('toJSON', function () {
  const { __v, _id, ...employee } = this.toObject()

  employee.employee_id = _id
  employee.cpf = employee.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')

  return employee
})

const Employee = mongoose.model('Employee', schema)

module.exports = Employee
