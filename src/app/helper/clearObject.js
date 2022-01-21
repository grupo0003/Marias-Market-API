function clearObject (obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key]
    } else if (typeof obj[key] === 'object') {
      clearObject(obj[key])
    }
  })

  return obj
}

function validaCpf (numeroCpf) {
  let Soma = 0
  let Resto

  if (numeroCpf === '00000000000' || numeroCpf.length !== 11) return false

  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(numeroCpf.substring(i - 1, i)) * (11 - i)
  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) Resto = 0
  if (Resto !== parseInt(numeroCpf.substring(9, 10))) return false

  Soma = 0
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(numeroCpf.substring(i - 1, i)) * (12 - i)
  Resto = (Soma * 10) % 11

  if ((Resto === 10) || (Resto === 11)) Resto = 0
  if (Resto !== parseInt(numeroCpf.substring(10, 11))) return false
  return true
}
