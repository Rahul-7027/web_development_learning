const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

app.post('/', (req, res) => {
  res.send('Hello, World!');
  console.log(req.body)
});

app.listen(2002, () => {
  console.log('Server running on port 2002');
});
