var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url.split("?")[0]
    if (url == "/welcome") {
        res.writeHead(200, {
            "Content-type": "text/plain",
            "Keep-Alive": 100
        })
        res.write(`Welcome to Dominos!`)
        res.end()
    }
    else if (url == "/contact") {
        res.writeHead(200, {
            "Content-type": "application/json",
            "Keep-Alive": 100
        })
        res.write(JSON.stringify({
            phone: "18602100000",
            email: "guestcaredominos@jublfood.com",
        }))
        res.end()
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        })
        res.write(`<h1>Page is not found !</h1>`)
        res.end()
    }
}
httpServer.listen(8081, () => console.log("Server is up at port no 8081"))
module.exports = httpServer;