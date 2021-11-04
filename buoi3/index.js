const express = require("express");
const commentCRUD = require("./commentsCURD");

const app = express();
app.use(express.json());

app.get("/comments", async (req, res) => {
  const allComments = await commentCRUD.getAllComments();
  res.send(allComments);
});

app.get("/comments/:detail", async (req, res) => {
  const { detail } = req.params;
  // console.log(id);

  const comments = await commentCRUD.getComments(detail);
  res.send(comments);
});
app.get("/comments/:detail/:id", async (req, res) => {
  const { detail, id } = req.params;

  const comments = await commentCRUD.getComment(detail, String(id));
  res.send(comments);
});

app.post("/comments", async (req, res) => {
  const dataListCommnet = req.body;
  const comments = await commentCRUD.createNewListCommnet(dataListCommnet);
  console.log(dataListCommnet);
  res.send(comments);
});

app.post("/comments/:detail", async (req, res) => {
  const { detail } = req.params;
  const dataComment = req.body;

  const comments = await commentCRUD.createNewComments(detail, dataComment);
  console.log(comments);
  res.send(comments);
});
app.put("/comments/:detail/:commentId", async (req, res) => {
  const { detail, commentId } = req.params;
  const dataUpdate = req.body;

  const updateComment = await commentCRUD.updateComment(
    detail,
    String(commentId),
    dataUpdate
  );
  res.send(updateComment);
});
app.delete("/comments/:detail/:commentId", async (req, res) => {
  const { detail, commentId } = req.params;

  const deleteComment = await commentCRUD.deleteComment(
    detail,
    String(commentId)
  );
  res.send(deleteComment);
});

app.listen(8000, (err) => {
  if (err) {
    throw err;
  }
  console.log("server running");
});
