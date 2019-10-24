import React, {useState} from "react";

export default function() {

    const [ comments, setComments ] = useState([]);

  fetch("/api/comments/recent").then(response => response.json()).then(response => {
    let newstuff = response.map(response => (
        <>
      <div>{response.sight}</div>
      <div>{response.text}</div>
      <div>{response.tone}</div>
      <br></br>
      </>
    ))
setComments(newstuff);
console.log(newstuff);
  });


  return (
    <div id="commentb" >{comments}</div>
  );
}