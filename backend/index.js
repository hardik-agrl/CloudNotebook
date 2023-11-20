const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

connectToMongo();
// const app = express()
const port = 10000

var app = express()

// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors())
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})