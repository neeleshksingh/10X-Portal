const http = require("http")

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type" : "text/html"})
    res.write(`<h1>Welcome to node JS !</h1> <p>This is our first http server</p>`)
    res.end()
})

server.listen(3000, ()=> console.log("Server is up at port no 3000"))