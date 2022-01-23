const HttpError = require('./httpError')

class BadRequest extends HttpError {
  constructor ({ details }) {
    super(400, 'Server dont understand request')

    this.name = 'Bad Request'
    this.body = { details }
  }
}

module.exports = BadRequest
