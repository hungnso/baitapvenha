const express = require("express");
const {
  getComments,
  newComment,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/comment");
const router = express.Router();

router.get("/", getComments);
router.post("/", newComment);
router.get("/:commentId", getComment);
router.put("/:commentId", updateComment);
router.delete("/:commentId", deleteComment);
module.exports = router;
