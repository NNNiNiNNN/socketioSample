import http from 'http';

const server: http.Server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end('<h1><span id="Hello_World">Hello World</span></h1>');
});


const port = 3000;

server.listen(port, () => console.log('app listening on port ' + port));


