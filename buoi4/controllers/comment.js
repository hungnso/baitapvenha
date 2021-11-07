const PostModel = require("../models/PostModel");
const CommentModel = require("../models/CommentModel");
const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.send({
      success: 1,
      data: comments,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};
const newComment = async (req, res) => {
  try {
    const findPost = await PostModel.findById(req.body.post);
    // console.log("ssss", findPost);

    const comment = req.body;
    // console.log("zzzzz", comment);
    delete comment.post;

    comment.post = findPost._id;

    const newCommnet = new CommentModel(comment);
    await newCommnet.save();

    findPost.comments.push(newCommnet);
    await findPost.save();

    res.send({
      success: 1,
      data: newCommnet,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};
const getComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await CommentModel.findById(commentId);
    res.send({
      success: 1,
      data: comment,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};
const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const newComment = req.body;
    const result = await CommentModel.findByIdAndUpdate(commentId, newComment, {
      new: true,
    });
    res.send({
      success: 1,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const findComment = await CommentModel.findById(commentId);
    // console.log('111', findComment)

    const postId = findComment.post;

    const findPost = await PostModel.findById(postId);

    await findComment.remove();

    await findPost.comments.pull(findComment);
    await findPost.save();

    res.send({
      success: 1,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};

module.exports = {
  getComments,
  newComment,
  getComment,
  updateComment,
  deleteComment,
};
