const mongoose = require('mongoose')
const { Schema } = mongoose
const uuid = require('uuid')

const Employee = require('./employeeSchema')

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
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  employee_id: {
    type: Schema.Types.String,
    ref: Employee
  }
})

schema.method('toJSON', function () {
  const { __v, _id, ...product } = this.toObject()

  product.product_id = _id

  return product
})

const Product = mongoose.model('Product', schema)

module.exports = Product
