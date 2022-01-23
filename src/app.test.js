const supertest = require('supertest')
const mongoose = require('mongoose')

const App = require('./app')

const EmployeeService = require('./app/service/EmployeeService')
const ProductService = require('./app/service/ProductService')

describe('Feature tests', () => {
  const prefix = '/api/v1'
  const entities = {
    employees: {},
    products: {}
  }
  let app

  beforeAll(async () => {
    app = await App.init('test')

    entities.employees.e1 = await EmployeeService.create({
      name: 'Maria da Silva',
      cpf: '87498961059',
      office: 'gerente',
      birthday: '21/04/2000'
    })

    entities.employees.e2 = await EmployeeService.create({
      name: 'João da Silva',
      cpf: '90252684044',
      office: 'gerente',
      birthday: '21/04/2000'
    })

    entities.employees.e3 = await EmployeeService.create({
      name: 'Fulano Barbosa',
      cpf: '16325951093',
      office: 'vendedor',
      birthday: '01/01/2000'
    })

    entities.products.p1 = await ProductService.create({
      employee_id: entities.employees.p1,
      name: 'Notebook',
      category: 'eletronico',
      price: 1099.99
    })

    entities.products.p2 = await ProductService.create({
      employee_id: entities.employees.p1,
      name: 'Smartphone',
      category: 'eletronico',
      price: 599.99
    })

    entities.products.p3 = await ProductService.create({
      employee_id: entities.employees.p2,
      name: 'TV',
      category: 'eletronico',
      price: 599.99
    })
  })

  afterAll(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
  })

  describe(`GET ${prefix}/employee - Find All`, () => {
    const url = `${prefix}/employee`

    it('Should return sucess when pass with no paramters', async () => {
      const res = await supertest(app)
        .get(url)

      expect(res.statusCode).toBe(200)
      expect(res.body.pageSize).toBe(3)
    })

    it('Should return sucess when pass with pagination', async () => {
      const res = await supertest(app)
        .get(url + '?limit=1')

      expect(res.statusCode).toBe(200)
      expect(res.body.pageSize).toBe(1)
      expect(res.body.totalPages).toBe(3)
    })

    it('Should return sucess when pass with filters', async () => {
      const res = await supertest(app)
        .get(url + '?name=Maria&cpf=87498961059')

      expect(res.statusCode).toBe(200)
      expect(res.body.pageSize).toBe(1)
      expect(res.body.totalPages).toBe(1)
    })

    it('Should return bad request when pass with invalid params', async () => {
      const res = await supertest(app)
        .get('/api/v1/employee?cpf=invalid')

      expect(res.statusCode).toBe(400)
    })
  })

  describe(`POST ${prefix}/employee - Create`, () => {
    const url = `${prefix}/employee`

    it('Should return sucess create employee with correctly', async () => {
      const res = await supertest(app)
        .post(url)
        .send({
          name: 'Diogo Alexandre',
          cpf: '56617869052',
          office: 'caixa',
          birthday: '23/02/2002'
        })

      expect(res.statusCode).toBe(201)
    })

    it('Should throw bad request when entity with same cpf already exists on db', async () => {
      const res = await supertest(app)
        .post(url)
        .send({
          name: 'Diogo Alexandre',
          cpf: '87498961059',
          office: 'caixa',
          birthday: '23/02/2002'
        })

      expect(res.statusCode).toBe(400)
    })

    it('Should throw bad request when pass body with invalid fields', async () => {
      const res = await supertest(app)
        .post(url)
        .send({
          name: 'Diogo Alexandre',
          cpf: 'invalid-cpf',
          office: 'invalid-office',
          birthday: 'invalid-date'
        })

      expect(res.statusCode).toBe(400)
    })
  })
})
