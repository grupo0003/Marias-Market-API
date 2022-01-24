module.exports = {
  v4: (uuid) => {
    let validateUUID = '' + uuid

    validateUUID = validateUUID.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$')
    if (validateUUID === null) {
      return false
    }
    return true
  }
}
