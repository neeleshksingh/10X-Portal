const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
})

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;