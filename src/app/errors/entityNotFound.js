const HttpError = require('./httpError')

class EntityNotFound extends HttpError {
  constructor (message) {
    super(404, message)
  }
}

module.exports = EntityNotFound
