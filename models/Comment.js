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
  }

});

const Comment = mongoose.model("comments", commentSchema);

module.exports = Comment;