const http = require('http')
const routes = require('./routes')

const server = http.createServer(routes)

const port = 3000

console.log(`listening on port ${port}`)
server.listen(port)
