const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Need association set up with user model??
// Need additional key for Watson?

// Create Schema
const commentSchema = new Schema({

  text: String,

  timestamp: { type: Date, default: Date.now }

});



module.exports = Comment = mongoose.model("comments", commentSchema);
