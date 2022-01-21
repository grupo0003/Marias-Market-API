require('dotenv').config()
const config = {
  drive: process.env.DB_DRIVE || 'mongodb',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  database: process.env.DB_DATABASE
}

Object.keys(config).forEach(key => {
  if (config[key] === undefined) {
    config[key] = ''
  }
})

config.uri = `${config.drive}://${config.user}:${config.pass}@${config.host}${(config.drive === 'mongodb') ? `:${config.port}` : ''}/`

module.exports = config
