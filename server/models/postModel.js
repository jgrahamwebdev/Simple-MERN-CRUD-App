
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must contain 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Must be a number greater than 0"],
        maxlength: [255, "Body must contain max of 255 characters"]
    },
}, { timestamps: true})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;