import React, {useState, useEffect} from "react";
import $ from 'jquery';
import compass from './images/compass.png'
import './compass.css'

export default function() {
const [angle, setAngle] = useState(0);

useEffect( function(){
  window.addEventListener('deviceorientation', function(e) {
    console.log( e.webkitCompassHeading );
    const angle = e.webkitCompassHeading;
    setAngle(angle); 
}, false);
},[]);


  return (
        <>
        <img style={{transform: 'rotate(' + angle + 'deg)'}} id="compass" src={compass} alt="compass"></img>
        </>
  );
}