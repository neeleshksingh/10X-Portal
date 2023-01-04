const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here
router.get('/blog', (req, res) => {
    let search = req.query.search || '';
    let page = req.query.page || 1;
  
    Blog.find({ topic: new RegExp(search, 'i') })
      .skip((page - 1) * 5)
      .limit(5)
      .then((blogs) => {
        res.send({ status: 'success', result: blogs });
      })
      .catch((error) => {
        res.send({ status: 'error', error: error });
      });
  });
  
  // POST api to create a new blog
  router.post('/blog', (req, res) => {
    let newBlog = new Blog({
      topic: req.body.topic,
      description: req.body.description,
      posted_at: req.body.posted_at,
      posted_by: req.body.posted_by,
    });
  
    newBlog
      .save()
      .then((blog) => {
        res.send({ status: 'success', result: blog });
      })
      .catch((error) => {
        res.send({ status: 'error', error: error });
      });
  });
  
  // PUT api to update an existing blog
  router.put('/blog/:id', (req, res) => {
    Blog.findByIdAndUpdate(
      req.params.id,
      {
        topic: req.body.topic,
        description: req.body.description,
        posted_at: req.body.posted_at,
        posted_by: req.body.posted_by,
      },
      { new: true }
    )
      .then((blog) => {
        res.send({ status: 'success', result: blog });
      })
      .catch((error) => {
        res.send({ status: 'error', error: error });
      });
  });
  
  // DELETE api to delete a blog
  router.delete('/blog/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
      .then((blog) => {
        res.send({ status: 'success', result: blog });
      })
      .catch((error) => {
        res.send({ status: 'error', error: error });
      });
  });

router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})


module.exports = router;