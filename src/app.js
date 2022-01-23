const express = require('express')

const Database = require('./infra/database/mongo/index')
const erroHandler = require('./app/middlewares/erroHandler')
const routes = require('./routes/index')

class App {
  static async init () {
    if (!this._app) {
      this._app = new App()
      this._app.express = express()

      await Database.init()

      this._app.middlewares()
      this._app.routes()
      this._app.erroHandler()
    }

    return this._app.express
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(express.json())
  }

  routes () {
    this.express.use('/api/', routes)
  }

  erroHandler () {
    this.express.use(erroHandler)
  }
}

module.exports = App
