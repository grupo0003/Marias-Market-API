const JoiDate = require('@joi/date')
const Joi = require('joi').extend(JoiDate)

const isCpf = require('../../helper/isCpf')
const BadRequest = require('../../errors/http/badRequest')

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string()
        .required(),

      cpf: Joi.string()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (isCpf(value)) {
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

    if (error) {
      throw new BadRequest({ details: error.details.map(err => err.message) })
    }

    return next()
  } catch (error) {
    console.log(error)
    next(error)
  }
}
