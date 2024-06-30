const express = require('express')
const app = express()
const port = 3000

    // app.get('/', (req, res) => {
    // res.send('Hello World!')
    // })

app.post('/', (req, res) => {
    res.send('Hello World!111')
    console.log("post reqest")
  })

  app.put('/', (req, res) => {
    res.send('Hello Put')
    console.log("Puts reqest")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})