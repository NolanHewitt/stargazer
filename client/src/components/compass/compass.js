import React from "react";
import $ from 'jquery';
import compass from './images/compass.png'
import './compass.css'

export default function() {

    var angle = 0;


    setInterval(function(){
        $('#image').css('transform','rotate(' + angle + 'deg)');
     }, 17);



window.addEventListener('deviceorientation', function(e) {
    console.log( e.webkitCompassHeading );
    angle = e.webkitCompassHeading;
    document.getElementById("data").innerHTML=("Degrees: " + Math.floor(angle) + "°");
}, false);

  return (
        <>
        <img id="image" src={compass}></img>
        <p id="data"></p>
        </>
  );
}