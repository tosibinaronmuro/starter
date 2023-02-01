const express = require("express");
const connectDB = require("./db/connect.js");
const tasks = require("./routes/tasks");
const app = express();
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use(express.static("./public"));
app.use(errorHandlerMiddleware);
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
