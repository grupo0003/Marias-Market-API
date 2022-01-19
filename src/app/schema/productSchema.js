const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
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
  employee: {
    type: Schema.types.ObjectId,
    ref: 'Employee'
  }
})

const Product = mongoose.model('Product', schema)

module.exports = Product