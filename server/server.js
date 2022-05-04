const express = require('express');
const dbConfig = require("./db");
const app = express();
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/userRoute");

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.get('/', (req, res)=>{
    res.send("Welcome to Addis Rooms Api Server!");
})

const port = process.env.PORT | 5000;

app.listen(port, ()=> console.log(`Server running at http://localhost:${port}`));