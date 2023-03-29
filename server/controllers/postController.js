
const Post = require("../models/postModel.js"); 

module.exports = {
    getAllPosts: (req, res) => {
        Post.find({})
            .then((allPosts) => res.json(allPosts))
            .catch((err) => console.log(err));
    },

    getOnePost: (req, res) => {
        Post.findOne({ _id: req.params.id })
            .then((onePost) => res.json(onePost))
            .catch((err) => console.log(err));
    },

    createPost: (req, res) => {
        Post.create(req.body)
            .then((newPost) => res.json(newPost))
            .catch((err) => console.log(err));
    },

    updatePost: (req, res) => {
        Post.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true, 
            runValidators: true,
        })
            .then((updatedPost) => res.json(updatedPost))
            .catch((err) => console.log(err));
    },

    deletePost: (req, res) => {
        Post.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};