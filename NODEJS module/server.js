const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    res.end("Hello from request event")
})

server.listen(5000, () => console.log("Server is up at 5000"))