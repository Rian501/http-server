const { readFile } = require('fs');
const { createServer } = require('http');
const server = createServer();
// const index = require('./index.html');

server.on('request', (request, response) => {
  console.log('request method', request.method, 'request url', request.url, 'request headers', request.headers);

  // response.writeHead(200, {'useless-information': 'Hello, you.'});

  readFile('index.html', (error, buffer) => {
    if (error) {response.statusCode=404; res.end();}
    // if (error) console.error(error);
    response.end(buffer);

  });
  // response.write("Hello handsome!")

});


server.listen(8080, () => {
  console.log('listening on port 8080');
})