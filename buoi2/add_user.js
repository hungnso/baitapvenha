const fs = require("fs");

const addUser = async (user) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });

    const users = JSON.parse(stringUsers);
    const newUsers = [...users, { id: users.length + 1, ...user }];
    await fs.promises.writeFile("users.json", JSON.stringify(newUsers));
    console.log(newUsers);
  } catch (err) {
    console.log(err);
  }
};

module.exports = addUser;
