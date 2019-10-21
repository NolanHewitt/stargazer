import React, {useEffect, useState} from "react";

import "../Comment/Comment.css"

function Comment() {

  const [comment, setComment] = useState("");


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
      <div id="commentsa" className = "comments">
        <form > What did you see?
          <select name="sights">
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
