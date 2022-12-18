const http = require("http")

const server = http.createServer((req, res)=>{
    res.end("Welcome to node JS")
})

server.listen()