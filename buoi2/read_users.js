const fs = require("fs");

const readUsers = () => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
module.exports = readUsers;
