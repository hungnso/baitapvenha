const express = require("express");

const mongoose = require("mongoose");
const post = require("./routers/posts");
const comment = require("./routers/comments");

const PORT = 9001;

const app = express();
app.use(express.json());

app.use("/api/posts", post);
app.use("/api/comments", comment);

mongoose
  .connect("mongodb://localhost:27017/mindx-demo")
  .then(() => {
    console.log("Connect to DB");
    app.listen(PORT, () => {
      console.log(`Sever is running on ${PORT} `);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
