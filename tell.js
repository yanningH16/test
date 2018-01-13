let express = require('express')
let app = express()
var history = require('connect-history-api-fallback')
let server = require('http').createServer(app)
app.use(history({
  index: './index.html'
}))
app.use(express.static('./dist'))

server.listen(process.env.PORT || 8889)