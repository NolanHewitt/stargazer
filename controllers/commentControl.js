const db = require("../models");
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

module.exports = {

    // will return the seven most recent comments
    mostRecent: function (req, res) {
        console.log(req.user);
        db.Comment
            .find({})
            .sort({
                'timestamp': -1
            })
            .limit(7)
            .then( dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {



        db.Comment
            .create(req.body)
            .then(function(dbComment) {
// db.User.id = db.Comment.id?
                return db.User.findOneAndUpdate({}, { $push: { comments: dbComment._id } }, { new: true });
              })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            console.log(db.User.findOneAndUpdate({}).schema.paths.name.SchemaString);
            console.log();
    },
    remove: function (req, res) {
        db.Comment
            .findById({
                _id: req.params.id
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};