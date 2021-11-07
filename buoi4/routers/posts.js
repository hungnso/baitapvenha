const express = require("express");

const router = express.Router();
const {
  getPosts,
  getPost,
  createPosts,
  updatePost,
  updateCountLike,
  deletePost,
  getPostComments,
  createComment,
} = require("../controllers/posts");

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", createPosts);
router.put("/:postId", updatePost);
router.put("/:postId/like", updateCountLike);
router.delete("/:postId", deletePost);
router.get("/:postId/comments", getPostComments);
router.post("/:postId/comments", createComment);

module.exports = router;
