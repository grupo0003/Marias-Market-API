const Joi = require('joi')
const isUUID = require('../../helper/isUUID')

const BadRequest = require('../../errors/http/badRequest')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string(),

      category: Joi.string(),

      price: Joi.number(),

      employee_id: Joi.string()
        .custom(
          (value, help) => {
            if (!isUUID.v4(value)) {
              return help.message('Param ID is a UUID v4 invalid.')
            } else {
              return true
            }
          }
        ),
      limit: Joi.number().min(1),
      skip: Joi.number().min(0)
    })

    const { error } = await schema.validate(req.query, { abortEarl: true })

    if (error) {
      throw new BadRequest({ details: error.details.map(err => err.message) })
    }

    next()
  } catch (error) {
    next(error)
  }
}
