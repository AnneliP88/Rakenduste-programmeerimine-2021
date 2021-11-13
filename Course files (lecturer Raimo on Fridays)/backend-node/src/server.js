const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const jwtAuth = require("./middleware/jwtAuth")
require("dotenv").config()

const itemRoutes = require('./routes/item'); // I won't overwrite it. I'll keep it :)
const postRoutes = require('./routes/post'); // especcially for HW 5
const authRoutes = require('./routes/auth');

const app = express()
app.use(express.json());


// The solution to allow FE to "talk with the" BE comes from
// People say that it's better than npm i --save cors (we used the cors thing with lecturer Mihkel)
// https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use('/api/item', itemRoutes); // I won't overwrite it. I'll keep it :)
app.use('/api/post', postRoutes); // especcially for HW 5
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// TODO: Look for more information
app.get('/secret', jwtAuth, (req, res) => {
  res.send('Secret Hello World!')
})

// TODO: Google about "catchall" handler -> how to show a styled html page
app.get('*', (req, res) => {
  res.send('This route does not exist')
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })