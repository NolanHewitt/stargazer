import React, {useEffect, useState} from "react";

import "../Comment/Comment.css"
import { PromiseProvider } from "mongoose";

function Comment(props) {

  const [comment, setComment] = useState("");
  const [sight, setSight] = useState("");


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
      }

    )
  };
  

    return (
      <div id="commentsa" className = "comment-post" style={{"display": props.display}}>
        <form > What did you see?
          <select value = {sight} onChange = {event => setSight (event.target.value)}  name="sights">
            <option className="comment-options" value="nothing" >Nothing</option>
            <option value="shootingStar">Shooting Star</option>
            <option value="sattelite">Satellite</option>
            <option value="plane">Plane</option>
            <option value="ufo">UFO</option>
            <option value="other">Other</option>
          </select>
          <br/>
          <textarea id= "comment-box" value = {comment} onChange = {event => setComment(event.target.value)} rows= "4">Comment</textarea>
          <button id="commentBtn" onClick = {postHandler}>Post</button>
        </form>
      </div>
    );
  }

export default Comment;
