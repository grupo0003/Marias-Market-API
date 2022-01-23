const express = require('express')
const EntityNotFound = require('./app/errors/entityNotFound')

const Database = require('./infra/database/mongo/index')
const routes = require('./routes/index')
const EmployeeRouter = require('./routes/v1/employeeRouter')

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

    this.express.use((err, req, res, next) => {
      if (err instanceof EntityNotFound) {
        res.status(404).end()
      } else {
        res.status(500).json(err.message)
      }

      this.express.use((req, res, next) => {
        res.set('Acess-Control-Allow-Origin', '*')
        next()
      })

      this.routes()
    })
  }

  routes () {
    this.express.use('/api/', routes)
    this.express.use('/api', EmployeeRouter)
  }
}

module.exports = App
