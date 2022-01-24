const HttpError = require('./httpError')

class NotFound extends HttpError {
  constructor (message) {
    super(404, message)

    this.name = 'Not Found'
    this.body = { details: [message] }
  }
}

module.exports = NotFound
