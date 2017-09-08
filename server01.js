'use strict;'

const http = require('http');
const server = http.createServer();
const { readFile } = require('fs');

server.on('request', (req, res) => {
    console.log('Request received for:', req.url);


    readFile('index.html', (error, data) => {
        // if (error) {response.statusCode=404; res.end();}
        // if (error) console.error(error);
        res.write(data);
        res.end();
      });
});


server.listen(8080, () => {
    console.log('listening on port 8080');
  })