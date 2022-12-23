
const express = require('express');
const faker = require("faker");
var bodyParser = require('body-parser');
const multer  = require('multer');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static("public"));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + "_" + file.originalname;
        cb(null, filename)
    }
})


const upload = multer({ storage: storage })

const userArr = [];

for(let i =0; i< 10; i++){
    userArr.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.image()
    })
}
console.log(userArr);

app.get("/", (req, res) => {
    res.render("user.ejs", { userArr});
})

app.get("/form", (req, res) => {
    res.render("form.ejs");
});

app.post("/add/user", upload.single("profilepic") , (req, res) => {
    // write code to insert data
    console.log(req.body);
    console.log(req.file);
    userArr.push({
        name: req.body.name,
        email: req.body.email,
        image: req.file.filename
    })
    res.redirect("/");

});

app.get("/remove", (req, res) => {
    userArr.pop();
    res.redirect("/");
});

app.get("/user", (req, res) => {
    console.log(req.query);
    res.json({
        name: req.query.name?req.query.name:"Ajeet",
        email: req.query.email?req.query.email: "ajeet@gmail.com",
        age: req.query.age?req.query.age: 32
    })
})

app.get("*", (req, res) => {

    res.status(404).send("PAGE IS NOT FOUND");
})

app.listen(3000, () => console.log("Server is up at 3000"));