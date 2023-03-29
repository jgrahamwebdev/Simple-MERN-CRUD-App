
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(
    {
        origin: "http://localhost:3000",
    }
));

require("./config/mongoose.config");

require("./routes/postRoutes")(app);

app.get("/", (req, res) => {
    res.send("API is running")
})

app.listen(8000, function() {
    console.log("Server is running on Port 8000")
})