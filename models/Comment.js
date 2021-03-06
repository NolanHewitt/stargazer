const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Need association set up with user model??
// Need additional key for Watson?

// Create Schema
const commentSchema = new Schema({

  text: {
    type: String,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now
  },
  tone: {
    type: String,
    required: true
  },
  sight: {
    type: String,
    required: true
  }

});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;