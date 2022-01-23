const isCpf = require('../../helper/isCpf')
const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)
const isUUID = require('../../helper/isUUID')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string(),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (isCpf(value)) {
            return help.message('Cpf inválido')
          } else {
            return true
          }
        }),

      office: Joi.string()
        .valid('gerente', 'vendedor', 'caixa'),

      birthday: Joi.date()
        .max('now')
        .format('DD/MM/YYYY')
        .max('now'),

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
      limit: Joi.number(),
      skip: Joi.number()
    })

    const { error } = await schema.validate(req.params, { abortEarl: true })

    if (error) throw error
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
