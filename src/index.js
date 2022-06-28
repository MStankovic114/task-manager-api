const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const multer = require("multer");

// Launching application on server
const app = express();
// Defining a port for heroku
const port = process.env.PORT;

// Parsing json to an object so we can access it in post
app.use(express.json());

//Routers for user and task
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
