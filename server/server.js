const express = require("express");
require("./db");
const app = express();
const roomsRoute = require("./routes/roomsRoute");
const usersRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

const cookieParser = require("cookie-parser");


app.use(cookieParser());app.use(express.json())

app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Addis Rooms Api Server!");
});

const port = process.env.PORT | 5000;

const server = app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);

// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
