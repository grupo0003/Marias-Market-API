const config = {
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

config.uri = `mongodb://${config.user}:${config.pass}@${config.host}:${config.port}/`

module.exports = config
