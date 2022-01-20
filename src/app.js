const express = require('express')

const Database = require('./infra/database/mongo/index')

class App {
  static async init () {
    if (!this._app) {
      this._app = new App()
      this._app.express = express()

      await Database.init()

      this._app.middlewares()
      this._app.routes()
    }

    return this._app.express
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(express.json())
  }

  routes () {
  }
}

module.exports = App
