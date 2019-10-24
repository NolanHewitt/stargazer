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




module.exports = router;
