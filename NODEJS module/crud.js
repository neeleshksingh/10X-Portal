// CRUD - CREATE READ UPDATE and DELETE

const fs = require("fs")

//create a file

fs.writeFile("testfile.txt", "This is our first file in node js", (err)=>{
    console.log(err)
})
fs.writeFile("home.html", "<h1>This is our first file in node js</h1>", (err)=>{
    console.log(err)
})

