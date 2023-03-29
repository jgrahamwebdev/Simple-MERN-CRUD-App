
const mongoose = require("mongoose");

const dbName = "examRetakeDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to ${dbName}`))
.catch((err)=>console.log(err));