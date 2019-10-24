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


//Routes
router.get("/recent", controller.mostRecent);
router.post("/", controller.create);

//Watson POST
router.post("/evaluate", controller.evaluate);




module.exports = router;
