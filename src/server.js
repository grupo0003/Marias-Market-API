const App = require('./app')

async function bootstrap () {
  const app = await App.init()
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`Servidor rodadando na porta ${port}`)
  })
}

bootstrap()
