const { Router } = require('express')
const express = require('express')
const router = require('./routes')

class App {
  constructor () {
    this.server = express()
  }

  middlewares () {
    this.server.use(express.json())
  }

  routes () {
    Router(this.server)
  }
}

module.exports = new App().server
