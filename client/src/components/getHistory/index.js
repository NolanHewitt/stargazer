import React, {useState, useEffect} from "react";
import compass from './images/compass.png'
import './compass.css'

export default function() {

    const [ history, setHistory ] = useState([]);

    function showhistory(event) {
        event.preventDefault();
        document.getElementById("userhistory").style.display = "block"
      }

  return (
        <>
        <button onClick={showhistory} style={{ marginLeft: "30%" }}>Test</button>
        </>
  );
}