import React, {useState, useEffect} from "react";
import $ from 'jquery';
import compass from './images/compass.png'
import './compass.css'

export default function() {

  const [Angle, setAngle] = useState(0);

  useEffect(() => {

    window.addEventListener('deviceorientation', function(e) {
      setAngle(e.webkitCompassHeading);
      console.log(Angle);
  }, false);

    });

    setInterval(function(){
      $('#compass').css('transform','rotate(' + Angle + 'deg)');
   }, 20);

  return (
        <>
        <img id="compass" src={compass} alt="compass"></img>
        </>
  );
}