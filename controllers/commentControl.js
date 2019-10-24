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
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        const toneAnalyzer = new ToneAnalyzerV3({
            version: '2017-09-21',
            authenticator: new IamAuthenticator({
                apikey: 'Pfsyl8Ttq6wGDbcPtS0KuLXNQqb4IhdnLPyAuW57Xmcl',
            }),
            url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
        });

        const toneParams = {
            toneInput: { 'text': req.body.text },
            contentType: 'application/json',
          };


          //watson tone call
          toneAnalyzer.tone(toneParams)
          .then(toneAnalysis => {
              let toneString = "";
            console.log(JSON.stringify(toneAnalysis, null, 2));
            console.log(JSON.stringify(toneAnalysis.result, null, 2));
            console.log(JSON.stringify(toneAnalysis.result.document_tone, null, 2));
            console.log(JSON.stringify(toneAnalysis.result.document_tone.tones, null, 2));

            const tones = toneAnalysis.result.document_tone.tones;
            //Adding each tone to the tone string
            if (tones.length === 0) {
                toneString = "No tones detected";
            } else {
                tones.forEach(tone =>{
                    toneString += (tone.tone_name + " ");
                })
            }

            req.body.tone = toneString;
            //now we insert the comment into the database with the comment tone
            db.Comment
            .create(req.body)
            .then(function (dbComment) {
                // db.User.id = db.Comment.id?
                return db.User.findOneAndUpdate({}, {
                    $push: {
                        comments: dbComment._id
                    }
                }, {
                    new: true
                });
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        console.log(db.User.findOneAndUpdate({}).schema.paths.name.SchemaString);
        console.log();
          })
          .catch(err => {
            console.log('error:', err);
          });

    },
    evaluate: function (req, res) {
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