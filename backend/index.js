const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')

// require("dotenv").config();

const corsOptions = {
  origin: "https://cloud-notebook-vn7o.onrender.com" // frontend URI (ReactJS)
}

connectToMongo();
// const app = express()
const port = process.env.Port || 5000

var app = express()

// const bodyParser = require('body-parser'); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})