const http = require("http")
const qstr = require("querystring")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url.split("?")[0]
    const qparams = qstr.parse(qparams).split("?")[1]
    if (url == "/") {
        res.writeHead(200, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        })
        res.write(`<h1>Welcome to node JS !</h1> <p>This is our first http server</p>`)
        res.end()
    }
    else if (url == "/contactus") {
        res.writeHead(200, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        })
        res.write(`<h1>Welcome to Contact US !</h1> <p>This is our first Contact us server</p>`)
        res.end()
    }
    else if (url == "/aboutus") {
        res.writeHead(200, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        })
        res.write(`<h1>About US</h1>`)
        res.end()
    }
    else if (url == "/user") {
        res.writeHead(200, {
            "Content-type": "text/json",
            "Keep-Alive": 100
        })
        res.end(JSON.stringify({
            name: qparams.name,
            email: qparams.email,
            age: qparams.age
        }))
    }
    else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "Keep-Alive": 100
        })
        res.write(`<h1>Page is not found !</h1>`)
        res.end()
    }
})

server.listen(3000, () => console.log("Server is up at port no 3000"))