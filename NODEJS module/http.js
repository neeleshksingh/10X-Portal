const http = require("http")

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    if(req.url == "/"){
        res.writeHead(200, {
            "Content-type" : "text/html",
            "Keep-Alive" : 100
        })
        res.write(`<h1>Welcome to node JS !</h1> <p>This is our first http server</p>`)
        res.end()
    }
    else if(req.url == "/contactus"){
        res.writeHead(200, {
            "Content-type" : "text/html",
            "Keep-Alive" : 100
        })
        res.write(`<h1>Welcome to Contact US !</h1> <p>This is our first Contact us server</p>`)
        res.end()
    }
    else if(req.url == "/aboutus"){
        res.writeHead(200, {
            "Content-type" : "text/html",
            "Keep-Alive" : 100
        })
        res.write(`<h1>About US</h1>`)
        res.end()
    }
    else {
        res.writeHead(404, {
            "Content-type" : "text/html",
            "Keep-Alive" : 100
        })
        res.write(`<h1>Page is not found !</h1>`)
        res.end()
    }
})

server.listen(3000, ()=> console.log("Server is up at port no 3000"))