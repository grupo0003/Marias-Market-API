const Joi = require('joi')

const BadRequest = require('../../errors/badRequest')
const isUUID = require('../../helper/isUUID')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
        .required(),

      category: Joi.string()
        .required(),

      price: Joi.string()
        .required(),

      employee_id: Joi.string()
        .custom(
          (value, help) => {
            if (!isUUID.v4(value)) {
              return help.message('invalid UUID')
            } else {
              return true
            }
          }
        )
        .required()
    })

    const { error } = await schema.validate(req.body, { abortEarl: true })

    if (error) {
      throw new BadRequest({ details: error.details.map(err => err.message) })
    }

    next()
  } catch (error) {
    next(error)
  }
}
