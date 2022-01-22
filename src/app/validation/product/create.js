const Joi = require('joi')
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

    if (error) throw error
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
