const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})


module.exports = router;