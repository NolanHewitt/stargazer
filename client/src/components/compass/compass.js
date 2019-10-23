import React from "react";
import $ from 'jquery';
import compass from './images/compass.png'
import './compass.css'

export default function() {

    var angle = 0;

    setInterval(function(){
        $('#compass').css('transform','rotate(' + angle + 'deg)');
     }, 17);

window.addEventListener('deviceorientation', function(e) {
    console.log( e.webkitCompassHeading );
    angle = e.webkitCompassHeading;
}, false);

  return (
        <>
        <img id="compass" src={compass} alt="compass"></img>
        </>
  );
}