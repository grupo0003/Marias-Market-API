class EntityNotFound extends Error {
  constructor (message) {
    super(message)

    this.name = 'Entity Not Found'
  }
}

module.exports = EntityNotFound
