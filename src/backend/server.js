/* This file represents the express js server which is reponsible
 for CRUD operations on the data using mongoose api's.*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const feedRoutes = express.Router();

let BlogPost = require('./feed.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/feeds', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

feedRoutes.route('/').get(function(req, res) {
    BlogPost.find(function(err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    })
});

// Getting all the data for a post.
feedRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    BlogPost.findById(id, function(err, post) {
        res.json(post);
    });
});

// Adding a comment to a blog post.
feedRoutes.route('/addComment/:id').post(function(req, res){
    BlogPost.findById(req.params.id, function(err, post){
        if (!post) {
            res.status(404).send("data is not found");
        } else {
            post.comments.push(req.body);
            post.save().then(post => {
                res.json("data is updated");
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            })
        }
    });
});

// Updating a comment on a blog post.
feedRoutes.route('/updateComment/:id').post(function(req, res){
    BlogPost.findById(req.params.id, function(err, post){
        if (!post) {
            res.status(404).send("data is not found");
        } else {
            post.comments[req.body.num].body = req.body.body;
            post.comments[req.body.num].date = req.body.date;
            post.comments[req.body.num].likes = req.body.likes;
            post.save().then(post => {
                res.json("data is updated");
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            })
        }
    });
});

// Add a new post entry in the database.
feedRoutes.route('/add').post(function(req, res) {
    let post = new BlogPost(req.body);
    post.save()
        .then(todo => {
            res.status(200).json({'post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

app.use('/feeds', feedRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
