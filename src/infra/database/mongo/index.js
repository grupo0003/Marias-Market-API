const mongoose = require('mongoose')
const config = require('./config.js')

class Database {
  static async init (env) {
    if (env === 'test') {
      config.database = 'test' + Date.now()
    }

    return await mongoose.connect(config.uri())
  }
}

module.exports = Database
