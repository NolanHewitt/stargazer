import React, { Component } from "react";
import $ from 'jquery';

export default function() {

    let city;
    let state;
  
    let latitude;
    let longitude;

  $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=2e99e14a862c46a89e3bd1b5ba265340', function (data) {
  city = data.location.city;
    state = data.location.state_prov;
    latitude = data.location.latitude;
    longitude = data.location.longitude;
}).then(function() {
  document.getElementById("location").innerHTML = "You are at " + city + ", " + state + ".";
  document.getElementById("coordinates").innerHTML = latitude + " " + longitude;
})


  return (
        <div></div>
        
  );
}