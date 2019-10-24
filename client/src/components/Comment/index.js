import React, { useState } from "react";
import $ from "jquery";
import './Comment.css';
import ToneAnalyzerV3 from 'ibm-watson/tone-analyzer/v3';
import { IamAuthenticator } from 'ibm-watson/auth';


import "../Comment/Comment.css"
// import { PromiseProvider } from "mongoose";

function Comment(props) {

  const [comment, setComment] = useState("");
  const [sight, setSight] = useState("");
  const [tone, setTone] = useState("");


  
  function evaluateHandler(event) {
    event.preventDefault();
    console.log("evaluated tone");
    $.post("/api/comments/evaluate", {comment: comment}, function(response) {
      console.log(response);
    })
  }


  function postHandler(event) {
    event.preventDefault();
    console.log("posted a comment!")
    fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({
          text: comment,
          sight: sight
        }),
        headers: {
          "Content-Type": "application/json"
      }
    })
  };


  return (
    <div className="comment-post" value={sight} onChange={event => setSight(event.target.value)} style={{ "display": props.display }}>
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
        <button className = "button" id="commentBtn" onClick={postHandler}>Post</button> {" "}
        <button className = "button" id="evaluateBtn" onClick={evaluateHandler}>Evaluate</button>
      </form>
    </div>
  );
}

export default Comment;
