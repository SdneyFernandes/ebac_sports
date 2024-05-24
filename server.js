const express = require('express')
const app = express()

const args = process.argv.slice(2) // Pega os argumentos da linha de comando
const PORT = args.includes('--port')
  ? parseInt(args[args.indexOf('--port') + 1])
  : 3000 // Verifica se o argumento --port foi passado
const DELAY = args.includes('--delay')
  ? parseInt(args[args.indexOf('--delay') + 1])
  : 0 // Verifica se o argumento --delay foi passado

app.get('/', (req, res) => {
  // Simula um atraso, se definido
  if (DELAY > 0) {
    setTimeout(() => {
      res.send('Olá, mundo!')
    }, DELAY)
  } else {
    res.send('Olá, mundo!')
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
