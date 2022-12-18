// CRUD - CREATE READ UPDATE and DELETE

const fs = require("fs")
const os = require("os")
const path = require("path")

console.log(os.arch());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.platform());

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

if(os.platform() == "win32"){
    fs.readFile("D:\\D Drive\\E Drive\\Codes\\10X Portal\\NODEJS module\\home.html", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
}
else{
    fs.readFile("D://D Drive//E Drive//Codes//10X Portal//NODEJS module//home.html", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
}


// const data = fs.readFileSync("home.html", {encoding:"utf-8"})
// console.log(data);
// console.log("test");

//Update a file

fs.appendFile("testfile.txt", "\n Some additional data", (err)=>{
    console.log(err);
})

//Delete a file
/*
fs.unlink("textfile.txt", (err)=>{      //commented because its annoying
    console.log(err);
})
*/

//read a file using path

fs.readFile(path.join(__dirname, "fs", "home.html"),"utf-8", (err, data)=>{
    console.log(data);
})

fs.readFile(path.join(__dirname, "..", "LEC3", "home.html"),"utf-8", (err, data)=>{
    console.log(data);
})

//Rename a file

fs.rename("testfile.txt", "textfile.txt", (err)=>{
    console.log(err);
})

//Make a folder

fs.mkdir("test", (err)=>{
    console.log(err);
})

//delete a folder
/*
//commented because it'll delete all the files
//WARNING! don't run this command until or unless you want to delete it intentially 

fs.readdir(path.join(__dirname, "fs"),(err,files)=>{
    // console.log(err);
    // console.log(files);
    for(let i=0;i<files.length;i++){
        fs.unlink(path.join(__dirname, "fs", files[i], (err)=>{
            console.log(err);
        }))
    }
})
*/