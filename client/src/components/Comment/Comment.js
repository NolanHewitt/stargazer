import React from "react";
import "../Comment/Comment.css"

function Comment () {
    return (
      <div className = "comments">
        <form> What did you see?
          <select name="sights">
            <option className="comment-options" value="nothing" >Nothing</option>
            <option value="shootingStar">Shooting Star</option>
            <option value="sattelite">Sattelite</option>
            <option value="plane">Plane</option>
            <option value="ufo">UFO</option>
            <option value="other">Other</option>
          </select>
          <br/>
          <textarea id= "comment-box" rows= "4">Comment</textarea>
          <button>Post</button>
        </form>
      </div>
    );
  }

export default Comment;
