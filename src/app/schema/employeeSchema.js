const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
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
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  situation: {
    type: String,
    require: true,
    default: 'activate'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

schema.pre('save', function (next) {
  this.updatedAt = Date.now()
  return next()
})

const Employee = mongoose.model('Employee', schema)

module.exports = Employee
