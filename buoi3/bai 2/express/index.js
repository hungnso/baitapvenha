const express = require("express");
const app = express();
app.listen(9000, (err) => {
  if (err) {
    throw err;
  }
  console.log("server running");
});
