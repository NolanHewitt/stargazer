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
  const [tones, setTones] = useState([]);



  function evaluateHandler(event) {
    event.preventDefault();
    $.post("/api/comments/evaluate", { comment: comment }, function (response) {
      setTones(response.result.document_tone.tones);
    })
      .catch(err => {
      });
  }



  function postHandler(event) {
    event.preventDefault();
    
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
    <div id="commentsa" className="comments" style={{ "display": props.display }}>
      <form > What did you see?
          <select name="sights"  value={sight} onChange={event => setSight(event.target.value)}>
          <option className="comment-options" value="nothing" >Nothing</option>
          <option value="shootingStar">Shooting Star</option>
          <option value="sattelite">Satellite</option>
          <option value="plane">Plane</option>
          <option value="ufo">UFO</option>
          <option value="other">Other</option>
        </select>
        <br />
        <textarea id="comment-box" value={comment} onChange={event => setComment(event.target.value)} rows="4">Comment</textarea>
        <div id="tone-header">Comment Tone</div>
        <div id="tone-box">{
          tones.map((tone) => (
            <span>{tone.tone_name}</span>
          ))
        }</div>
        <button className="button" id="commentBtn" onClick={postHandler}>Post</button> {" "}
        <button className="button" id="evaluateBtn" onClick={evaluateHandler}>Evaluate</button>
      </form>
    </div>
  );
}

export default Comment;
