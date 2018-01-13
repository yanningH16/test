let express = require('express')
let app = express()
let server = require('http').createServer(app)

app.use(express.static('./dist'))

server.listen(process.env.PORT || 8889)