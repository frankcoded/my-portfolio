const http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{ 'content-type':'text/html'})
    res.end("welcome to my portfolio")
})

Server.listen(4000, '127.0.0.1')
console.log("I have created a server for my portfolio!")
