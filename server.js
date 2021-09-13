const {urlencoded} = require('express')
const express = require('express')
const app = express()
require('./server/config/mongoose.config')
const port = 8000

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('./server/routes/product.routes')(app)

app.listen(port, () => console.log("Express server is running on port: " + port))