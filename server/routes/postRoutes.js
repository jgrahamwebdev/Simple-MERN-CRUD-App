
const PostController = require("../controllers/postController");  

module.exports = (app) => {
//CREATE Post
app.post("/create", PostController.createPost)

//Get ALL Posts
app.get("/posts", PostController.getAllPosts)

//READ post
app.get("/posts/:id", PostController.getOnePost)

//UPDATE post
app.put("/posts/:id", PostController.updatePost)

//DELETE post
app.delete("/delete/:id", PostController.deletePost)
}