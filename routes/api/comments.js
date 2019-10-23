const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

// Load Comment model
const Comments = require("../../models/Comment");
const controller = require("../../controllers/commentControl")

// Initialize Watson
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: 'Pfsyl8Ttq6wGDbcPtS0KuLXNQqb4IhdnLPyAuW57Xmcl',
  }),
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
});

//Routes
router.get("/recent", controller.mostRecent);
router.post("/", controller.create);

//Watson POST
router.post("/evaluate", function (req, res) {
  console.log("evaluate request" + req)
  const toneParams = {
    toneInput: { 'text': req.body.comment },
    contentType: 'application/json',
  };

  toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
      console.log(JSON.stringify(toneAnalysis, null, 2));
      res.json(toneAnalysis);
    })
    .catch(err => {
      console.log('error:', err);
    });
})

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
      }
    }, function (err, data) {
      // Updated at most one doc, `res.modifiedCount` contains the number
      // of docs that MongoDB updated
      console.log(data)
      res.send(200)
    });
  });
});
module.exports = router;
