const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Game model
const Comments = require("../../models/Comment");

router.post("/", (req, res) => {
  console.log(req.body);
  Comments.create({ x: req.body.x }).then(comment => {
    res.json(comment);
  });
});

router.get("/my-comments/:userId", (req, res) => {
  console.log("happy => ", req.params.userId);
  Comments.find({
    $or: [
      {
        x: req.params.userId
      },
      {
        o: req.params.userId
      }
    ]
  }).then(comments => {
    res.json({ comments });
  });
});

router.get("/:commentId", (req, res) => {
  console.log("commentId => ", req.params.commentId);
  Comments.findById(req.params.commentId).then(comment => {
    res.json({ comment });
  });
});

router.put("/:commentId", (req, res) => {
  console.log("commentId => ", req.params.commentId);
  console.log("comment => ", req.body);
  Comments.findById(req.params.commentId).then(comment => {
    if (comment.currentTurn !== req.body.currentTurn) {
      return res.status(401);
    }
    Comment.updateOne({ _id: req.params.commentId }, {
      $set: { 
      comment: req.body.comment,
      currentTurn: comment.currentTurn === "x" ? "o" : "x"
     }}, function(err, data) {
      // Updated at most one doc, `res.modifiedCount` contains the number
      // of docs that MongoDB updated
      console.log(data)
      res.send(200)
    });
  });
});
module.exports = router;
