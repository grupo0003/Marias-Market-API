const { validator, cpf } = require('cpf-cnpj-validator')
const Joi = require('joi').extend(validator)

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .required()
        .min(3)
        .max(30),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (!cpf.isValid(value)) {
            return help.message('Cpf inválido')
          } else {
            return true
          }
        }),

      office: Joi.string()
        .valid('gerente', 'vendedor', 'caixa')
        .required(),

      birthday: Joi.date()
        .max('now')
        .iso()
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
