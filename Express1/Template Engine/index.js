const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let site="rahul"
    let data="newdata"
  res.render('index', {site: site,data:data})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})