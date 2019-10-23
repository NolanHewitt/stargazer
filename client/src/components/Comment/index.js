import React, { useState } from "react";
import $ from "jquery";

import "../Comment/Comment.css"
// import { PromiseProvider } from "mongoose";

function Comment(props) {


  // const apiWatsonKey = process.env.REACT_APP_WATSON_API_KEY;

  const [comment, setComment] = useState("");
  // const [tone, setTone] = useState("");

  {
    "apikey": "Pfsyl8Ttq6wGDbcPtS0KuLXNQqb4IhdnLPyAuW57Xmcl",
    "iam_apikey_description": "Auto-generated for key 84f44978-30bc-4b82-bd64-ea30db536b25",
    "iam_apikey_name": "Auto-generated service credentials",
    "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/0e511c6447b840ed8eb675882456f295::serviceid:ServiceId-9ed5c8a2-af1f-48e4-988c-ee6b889dad28",
    "url": "https://gateway.watsonplatform.net/tone-analyzer/api"
  }


  function evaluateHandler(event) {
    event.preventDefault();
    console.log("evaluated tone");
    $.post("https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2017-09-21?apiKey=Pfsyl8Ttq6wGDbcPtS0KuLXNQqb4IhdnLPyAuW57Xmcl", { text: comment }, function (data) {
      console.log(data);

    })
  }


  function postHandler(event) {
    event.preventDefault();
    console.log("posted a comment!")
    fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify({
        text: comment
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    )
  };

    return (
      <div id="commentsa" className = "comments" style={{"display": props.display}}>
        <form > What did you see?
          <select name="sights">
          <option className="comment-options" value="nothing" >Nothing</option>
          <option value="shootingStar">Shooting Star</option>
          <option value="sattelite">Satellite</option>
          <option value="plane">Plane</option>
          <option value="ufo">UFO</option>
          <option value="other">Other</option>
        </select>
        <br />
        <textarea id="comment-box" value={comment} onChange={event => setComment(event.target.value)} rows="4">Comment</textarea>
        <button id="commentBtn" onClick={postHandler}>Post</button>
        <button id="evaluateBtn" onClick={evaluateHandler}>Evaluate</button>
      </form>
    </div>
  );
}

export default Comment;
