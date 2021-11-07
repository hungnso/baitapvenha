const mongoose = require("mongoose");

const sechema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);
const CommentModel = mongoose.model("Comment", sechema);

module.exports = CommentModel;
