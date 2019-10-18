import React, { Component } from "react";
import $ from 'jquery';

export default function() {

  let sunrise;
  let sunset;
  let suns
  let sunr

  $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=2e99e14a862c46a89e3bd1b5ba265340', function (data) {
    console.log(data)
    sunrise = data.sunrise
    sunset = data.sunset

    suns = sunset.split(':');
    sunr = sunrise.split(':');
    
  }).then(function() {
    console.log(suns);
    console.log(sunr);

    let sunrHtom = parseInt(sunr[0] * 60)
    let sunrMin = parseInt(sunr[1])
    let sunriseT = sunrHtom + sunrMin;
    console.log("The sun rises at " + sunriseT + " mins after midnight.")

    let sunsHtom = parseInt(suns[0] * 60)
    let sunsMin = parseInt(suns[1])
    let sunsetT = sunsHtom + sunsMin;
    console.log("The sun sets at " + sunsetT + " mins after midnight.")

  })


  return (
        //
        <div>Placeholder</div>  
  );
}