const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World test")
})

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`test Server started on PORT ${PORT}`))
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })