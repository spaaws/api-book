const express = require('express');
const app = express()
const port = 3000

const books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling' },
    { id: 2, title: 'Senhor dos Anéis', author: 'J.R.R. Tolkiens' },
    { id: 3, title: 'O Hobbit', author: 'J.R.R. Tolkiens' }
  ]

app.get('/', (req, res) => {
  res.send('API-BOOK está funcionando!')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const book = books.find(b => b.id === bookId)
  if (!book) {
    return res.status(404).json({ message: 'Livro não encontrado' })
  }
  res.json(book)
})

app.listen(port, () => {
  console.log(`API-BOOK rodando na porta ${port}`)
})