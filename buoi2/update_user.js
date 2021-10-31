const fs = require("fs");

const updateUser = (id, { username, password }) => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    console.log(users);
    const result = users.find((value, index) => {
      if (value.id === id) {
        users[index].username = username;
        users[index].password = password;

        console.log(users[index]);
      }
    });
  });
};

module.exports = updateUser;
