const isCpf = require('../../helper/isCpf')
const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)

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

      situation: Joi.string()
        .default('activate')
    })
    const { error } = await schema.validate(req.body, { abortEarl: true })

    if (error) throw error
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
