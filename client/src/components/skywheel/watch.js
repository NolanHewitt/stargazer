import React, { Component } from "react";
import $ from 'jquery';
import moment from 'moment';

export default function() {

  var CurrentDate = moment().format('HH:mm');
    console.log(CurrentDate);

    let dateSplit;
    dateSplit = CurrentDate.split(':');
    let dateHtom;
    dateHtom = dateSplit[0] * 60
    let minstoday = dateHtom + parseInt(dateSplit[1]);
    console.log(minstoday + " mins have passed today.");

    //-----------------------------------------------------------------

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
    let sunrHtom = parseInt(sunr[0] * 60)
    let sunrMin = parseInt(sunr[1])
    let sunriseT = sunrHtom + sunrMin;
    console.log("The sun rises at " + sunriseT + " mins after midnight.")

    let sunsHtom = parseInt(suns[0] * 60)
    let sunsMin = parseInt(suns[1])
    let sunsetT = sunsHtom + sunsMin;
    console.log("The sun sets at " + sunsetT + " mins after midnight.")

    let suntime = sunsetT - sunriseT;
    let moontime = 1440 - suntime;
    console.log("The sun will be out for " + suntime + " mins today")
    console.log("It will be dark for " + moontime + " mins today.")
  })


  return (
        //
        <div>Placeholder</div>  
  );
}