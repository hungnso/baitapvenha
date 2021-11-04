const fs = require("fs");
const uuid = require("uuid");

/// Lấy ra tất cả comments ở trong tất cả các bài viết

const getAllComments = async () => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    const comments = JSON.parse(jsonCommnets);

    return comments;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/// Lấy ra tất cả comments ở trong 1 bài post
const getComments = async (detail) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    const comments = JSON.parse(jsonCommnets);
    const keyComments = Object.keys(comments);
    // console.log(keyComments);
    const foundKey = keyComments.find((x) => x === detail);

    // console.log(comments[foundKey]);

    return comments[foundKey] ? comments[foundKey] : null;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/// Lấy ra 1 comments ở trong 1 bài post
const getComment = async (detail, id) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    let comments = JSON.parse(jsonCommnets);
    const keyComments = Object.keys(comments);
    // console.log(keyComments);
    const foundKey = keyComments.find((x) => x === detail);
    const result = comments[foundKey].find((comment) => comment.id === id);
    // console.log(result);

    return result ? result : null;
  } catch (error) {
    console.log(error);
  }
};

/// Tạo mới 1 danh sách comments của 1 bài post mới
const createNewListCommnet = async (dataListCommnet) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    let comments = JSON.parse(jsonCommnets);
    console.log(comments);
    const newComments = {
      ...comments,
      nameList: dataListCommnet,
    };

    await fs.promises.writeFile("comments.json", JSON.stringify(newComments));
  } catch (error) {}
};

/// thêm 1 comments mới trong list comment của 1 bài post
const createNewComments = async (detail, dataComment) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    let comments = JSON.parse(jsonCommnets);
    const keyComments = Object.keys(comments);
    const foundKey = keyComments.find((x) => x === detail);

    let result = comments[foundKey];
    const newComment = {
      id: uuid.v1(),
      ...dataComment,
    };
    result = [...result, newComment];

    const newListComments = { ...comments };
    newListComments[foundKey] = result;

    await fs.promises.writeFile(
      "comments.json",
      JSON.stringify(newListComments)
    );

    return newListComments;
  } catch (error) {
    console.log(error);
  }
};

/// Sửa 1 comment trong 1 list comments của  1 bài post
const updateComment = async (detail, commentId, dataUpdate) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    let comments = JSON.parse(jsonCommnets);
    const keyComments = Object.keys(comments);

    const foundKey = keyComments.find((x) => x === detail);
    let result = comments[foundKey];

    const foundIndex = result.findIndex((comment) => comment.id === commentId);

    if (foundIndex !== -1) {
      result[foundIndex] = {
        ...result[foundIndex],
        ...dataUpdate,
      };
    } else {
      console.log("loi");
    }
    const newListComments = { ...comments };
    newListComments[foundKey] = result;
    await fs.promises.writeFile(
      "comments.json",
      JSON.stringify(newListComments)
    );
    return newListComments;
  } catch (error) {
    console.log(error);
  }
};

/// Xóa đi 1 comment
const deleteComment = async (detail, id) => {
  try {
    const jsonCommnets = await fs.promises.readFile("comments.json", {
      encoding: "utf-8",
    });
    let comments = JSON.parse(jsonCommnets);
    const keyComments = Object.keys(comments);

    const foundKey = keyComments.find((x) => x === detail);
    let result = comments[foundKey];
    const newComments = result.filter((comment) => comment.id !== id);
    const newListComments = { ...comments };
    newListComments[foundKey] = newComments;
    await fs.promises.writeFile(
      "comments.json",
      JSON.stringify(newListComments)
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllComments,
  getComments,
  getComment,
  createNewListCommnet,
  createNewComments,
  updateComment,
  deleteComment,
};
