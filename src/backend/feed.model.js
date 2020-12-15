const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Model for the Blog post. Each blog post has an entry of title and comments.
 The comments is an array of objects where each object represents the comment's
 body, date and number of likes. */
 
let BlogPost = new Schema({
    title: String,
    comments: [{body: String, date: Date, likes: Number}]
});

module.exports = mongoose.model('BlogPost', BlogPost);
