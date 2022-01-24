const Joi = require('joi')

const BadRequest = require('../../errors/http/badRequest')
const isUUID = require('../../helper/isUUID')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string()
        .custom(
          (value, help) => {
            if (!isUUID.v4(value)) {
              return help.message('Param ID is a UUID v4 invalid.')
            } else {
              return true
            }
          }
        )
        .required()
    }).required()

    const { error } = await schema.validate(req.params, { abortEarl: true })

    if (error) {
      throw new BadRequest({ details: error.details.map(err => err.message) })
    }

    next()
  } catch (error) {
    next(error)
  }
}
