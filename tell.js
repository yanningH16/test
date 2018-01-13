let express = require('express')
let app = express()
let server = require('http').createServer(app)

app.use('/', express.static(__dirname + './dist'))

server.listen(process.env.PORT || 8889)