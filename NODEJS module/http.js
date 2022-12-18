const http = require("http")

const server = http.createServer((req, res)=>{
    res.end("Welcome to node JS")
})

server.listen(3000, ()=> console.log("Server is up at port no 3000"))