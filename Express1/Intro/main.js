const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World! sjsdsh ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/contact', (req, res) => {
    res.send('Contact')
  })

  app.get('/blog', (req, res) => {
    res.send(`Hello Blog`)
  })
  app.get('/blog/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
  })

  app.get('/blog/newblog', (req, res) => {
    res.send('Hello New Blog!')
  })