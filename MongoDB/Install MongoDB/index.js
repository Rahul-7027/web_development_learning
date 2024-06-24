import mongoose from 'mongoose';
import express from "express"

import { Todo } from './models/Todo.js';
let a = mongoose.connect('mongodb://127.0.0.1:27017/test')
console.log(a)

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "React JS", author: "Rahul" })
    todo.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})