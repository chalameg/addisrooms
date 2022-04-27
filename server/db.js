const mongoose = require("mongoose")

const URL = "mongodb+srv://chalameg:chala@cluster0.b27v5.mongodb.net/addis-rooms"

mongoose.connect(URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connection = mongoose.connection

connection.on("error", ()=>{
    console.log("MongoDb connection failed");
})

connection.on("connected", ()=>{
    console.log("MongoDb connected Successfully!");
})

module.exports = mongoose