const mongoose = require('mongoose')
const config = require('./config.js')

class Database {
  static async init () {
    return await mongoose.connect(config.uri)
  }
}

module.exports = Database
