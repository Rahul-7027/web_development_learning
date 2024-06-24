const express = require('express')
const app = express()
const port = 3000

const fs = require("fs");

app.use(express.static("public"))

const myLogger1 = function (req, res, next) {
    fs.appendFileSync("new.txt", `${Date.now()} ${req.method}\n`)
    console.log('LOGGED 1')
    next()
    console.log(`${Date.now()} ${req.method}`)
}

app.use(myLogger1)

app.get('/', (req, res) => {
    res.send('Hello World')
})

const myLogger2 = function (req, res, next) {
    console.log('LOGGED')
    next()
}

app.use(myLogger2)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})