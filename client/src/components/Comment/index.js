import React, { useState } from "react";
import $ from "jquery";

import "../Comment/Comment.css"
// import { PromiseProvider } from "mongoose";

function Comment(props) {


  // const apiWatsonKey = process.env.REACT_APP_WATSON_API_KEY;

  const [comment, setComment] = useState("");
  // const [tone, setTone] = useState("");


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
