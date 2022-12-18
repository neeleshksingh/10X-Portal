// CRUD - CREATE READ UPDATE and DELETE

const fs = require("fs")

//create a file

fs.writeFile("testfile.txt", "This is our first file in node js", (err)=>{
    console.log(err)
})

fs.writeFile("home.html", "<h1>This is our first file in node js</h1>", (err)=>{
    console.log(err)
})

// read a file

fs.readFile("home.html", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

//read a file by giving full path

fs.readFile("D:\\D Drive\\E Drive\\Codes\\10X Portal\\NODEJS module\\home.html", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
    }
})

// const data = fs.readFileSync("home.html", {encoding:"utf-8"})
// console.log(data);
// console.log("test");

//Update a file

fs.appendFile("testfile.txt", "\n Some additional data", (err)=>{
    console.log(err);
})

//Delete a file

fs.unlink("textfile.txt", (err)=>{
    console.log(err);
})