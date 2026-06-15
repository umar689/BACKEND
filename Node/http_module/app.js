const http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hello World</h1>");
    res.end("<p>Welcome to Node.js</p>");
})
server.listen(3000, function(){
    console.log("Server is running at port 3000");
});
