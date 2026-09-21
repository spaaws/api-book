const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API-BOOK está funcionando!')
})

app.get('/books', (req, res) => {
  res.json([
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
    { id: 2, title: 'Senhor dos Anéis', author: 'J.R.R. Tolkiens' },
    { id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkiens' }
  ])
})

app.listen(port, () => {
  console.log(`API-BOOK rodando na porta ${port}`)
})