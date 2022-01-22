function clearObject (obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key]
    } else if (typeof obj[key] === 'object') {
      clearObject(obj[key])
    }
  })

  return obj
}

module.exports = clearObject
