const http = require('http')
const PORT = process.env.PORT || 9000
http
  .createServer((req, res) => {
    console.log('New connection')
    res.end('Hello Cloud Run v2 ' + new Date() )
  })
  .listen(PORT, () => console.log('Listening on', PORT))
