const PostModel = require("../models/PostModel");
const CommentModel = require("../models/CommentModel");

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send({
      success: 1,
      data: posts,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};
const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const foundPost = await PostModel.findById(postId);

    res.send({
      success: 1,
      data: foundPost,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};

const createPosts = async (req, res) => {
  try {
    const newPostData = req.body;
    const newPost = await PostModel.create(newPostData);
    res.send({
      success: 1,
      data: newPost,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Something went wrong",
    });
  }
};
const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const updatePostData = req.body;

    const updatedPost = await PostModel.findByIdAndUpdate(
      { _id: postId },
      updatePostData,
      { new: true }
    );

    res.send({
      success: 1,
      data: updatedPost,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};
const updateCountLike = async (req, res) => {
  try {
    const { postId } = req.params;

    const increamnentLike = await PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    res.send({
      success: 1,
      data: increamnentLike,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletedPost = await PostModel.findByIdAndDelete(postId);
    res.send({
      success: 1,
      data: deletedPost,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Some thing went wrong",
    });
  }
};

// Lấy tất cả cmt từ 1 bài post
const getPostComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("comments");

    res.send({
      success: 1,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: 0,
      data: null,
      message: error.message || "Something went wrong",
    });
  }
};
// Tạo 1 cmt mới từ 1 bài post
const createComment = async (req, res) => {
  try {
    const { postId } = req.params;

    // Create a new comment
    const newComment = new CommentModel(req.body);
    /// Get Post

    const post = await PostModel.findById(postId);
    console.log("post", post);

    newComment.post = post;
    await newComment.save();

    /// add comment to Post array "comments"

    post.comments.push(newComment._id);
    await post.save();
    res.send({
      success: 1,
      data: newComment,
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
  getPosts,
  getPost,
  createPosts,
  updatePost,
  updateCountLike,
  deletePost,
  getPostComments,
  createComment,
};
