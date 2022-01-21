const { validator, cpf } = require('cpf-cnpj-validator')
const JoiDate = require('@joi/date')
const Joi = require('joi')
  .extend(validator)
  .extend(JoiDate)

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
        .required(),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (!cpf.isValid(value)) {
            return help.message('Invalid CPF')
          } else {
            return true
          }
        }),

      office: Joi.string()
        .valid('gerente', 'vendedor', 'caixa')
        .required(),

      birthday: Joi.date()
        .format('DD/MM/YYYY')
        .max('now')
        .required(),

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
