console.log(__dirname)
const express = require('express')
const path = require ('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/accordion.html'))
})

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})


/* Version before express:
const http = require('http');
const fs = require('fs');


fs.readFile('./accordion.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});
*/


