const mongoose = require("mongoose");

const sechema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdBy: String,
    comments: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },

  {
    timestamps: true,
  }
);
const PostModel = mongoose.model("Post", sechema);
module.exports = PostModel;
