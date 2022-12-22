/*
//for fun

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));
*/

const express = require('express')
// const faker = require('faker')
var bodyParser = require('body-parser')
const multer = require('multer')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static("public"))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        const filename = Date.now() + "-" + file.filename
        cb(null, filename)
    }
})

const upload = multer({ storage: storage })

const userArr = []

// for(let i=0;i<10;i++){
//      userArr.push({
//          name : faker.name.findName(),
//          email : faker.internet.email(),
//          image: faker.image.image()
//      })
// }


app.get("/", (req, res) => {
    res.render("form.ejs", { user: userArr[0] })
})

app.get("/add/user", upload.single('profilepic'), (req, res) => {
    console.log(req.query);
    res.json({
        name: req.query.name,
        email: req.query.email,
        image: req.file.filename
    })
})

app.get("/remove", (req, res) => {
    userArr.pop()
    res.redirect("/")
})

app.get("*", (req, res) => {
    res.status(404).send("Page is not Found")
})

app.listen(3000, () => console.log("Our server is up at 3000"))