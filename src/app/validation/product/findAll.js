const Joi = require('joi')
const isUUID = require('../../helper/isUUID')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string(),

      category: Joi.string(),

      price: Joi.number(),

      situation: Joi.string(),
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

    if (error) throw error
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
