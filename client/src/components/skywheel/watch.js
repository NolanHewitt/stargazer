import React from "react";
import $ from 'jquery';
import moment from 'moment';
import sun from './images/sun.png'
import moon from './images/moon.png'
import './images.css'

export default function() {

  let minstoday;
  let percentage;
  let percentFinal;
  let percentageM;
  let percentFinalM;
  let moont;
  let nightTime;
  let tpssbf;
  let moontime;

  function myFunction2() {
    setTimeout(function(){
       

      var CurrentDate = moment().format('HH:mm');
      console.log(CurrentDate);
  
      let dateSplit;
      dateSplit = CurrentDate.split(':');
      let dateHtom;
      dateHtom = dateSplit[0] * 60
      minstoday = dateHtom + parseInt(dateSplit[1]);
      console.log(minstoday + " mins have passed today.");
  
      //-----------------------------------------------------------------
  
    let sunrise;
    let sunset;
    let suns
    let sunr
  
    $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=66fe5911bbf64c2b80e935b0c3a77a0e', function (data) {
      console.log(data)
      sunrise = data.sunrise
      sunset = data.sunset
  
      suns = sunset.split(':');
      sunr = sunrise.split(':');
      
    }).then(function() {
      let sunrHtom = parseInt(sunr[0] * 60)
      let sunrMin = parseInt(sunr[1])
      let sunriseT = sunrHtom + sunrMin;
      console.log("The sun rises at " + sunriseT + " mins after midnight.");
  
      let sunsHtom = parseInt(suns[0] * 60)
      let sunsMin = parseInt(suns[1])
      let sunsetT = sunsHtom + sunsMin;
      console.log("The sun sets at " + sunsetT + " mins after midnight.");
  
      let suntime = sunsetT - sunriseT;
      console.log("The sun will be out for " + suntime + " mins today");
  
      let time = minstoday - sunriseT;
    console.log(time + " mins passed since sunrise");
    percentage = ((time/suntime) * 100)
    percentFinal = (((23/20)*percentage)-15)
    console.log(percentFinal);
  
    //Time from sunset to midnight
    nightTime = 1440 - sunsetT;
  
    //How long the sun will stay set in mins.
    moont = nightTime + sunriseT;
  
    if (time > 1000 && time < 1440){
    //time passed since sunset before midnight
    moontime =  time - sunsetT;
    }
    if (time >= 0 && time <= 1000){
    //time passed since sunset after midnight
    tpssbf =  time - sunsetT;
    moontime = tpssbf + time;
    };
  
    percentageM = ((moontime/moont) * 100)
    percentFinalM = (((23/20)*percentageM)-15)
    console.log(percentFinalM);
  
    });
  
          document.getElementById("moon").style.marginLeft = percentFinalM+"100%";
          document.getElementById("sun").style.marginLeft = percentFinal+"100%";


      }, 100);
  }
myFunction2();

  //-------------------------------------------------------------------------------------------------------


  function myFunction3() {
    setTimeout(function(){
       

      var CurrentDate = moment().format('HH:mm');
      console.log(CurrentDate);
  
      let dateSplit;
      dateSplit = CurrentDate.split(':');
      let dateHtom;
      dateHtom = dateSplit[0] * 60
      minstoday = dateHtom + parseInt(dateSplit[1]);
      console.log(minstoday + " mins have passed today.");
  
      //-----------------------------------------------------------------
  
    let sunrise;
    let sunset;
    let suns
    let sunr
  
    $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=66fe5911bbf64c2b80e935b0c3a77a0e', function (data) {
      console.log(data)
      sunrise = data.sunrise
      sunset = data.sunset
  
      suns = sunset.split(':');
      sunr = sunrise.split(':');
      
    }).then(function() {
      let sunrHtom = parseInt(sunr[0] * 60)
      let sunrMin = parseInt(sunr[1])
      let sunriseT = sunrHtom + sunrMin;
      console.log("The sun rises at " + sunriseT + " mins after midnight.");
  
      let sunsHtom = parseInt(suns[0] * 60)
      let sunsMin = parseInt(suns[1])
      let sunsetT = sunsHtom + sunsMin;
      console.log("The sun sets at " + sunsetT + " mins after midnight.");
  
      let suntime = sunsetT - sunriseT;
      console.log("The sun will be out for " + suntime + " mins today");
  
      let time = minstoday - sunriseT;
    console.log(time + " mins passed since sunrise");
    percentage = ((time/suntime) * 100)
    percentFinal = (((23/20)*percentage)-15)
    console.log(percentFinal);
  
    //Time from sunset to midnight
    nightTime = 1440 - sunsetT;
  
    //How long the sun will stay set in mins.
    moont = nightTime + sunriseT;
  
    if (time > 1000 && time < 1440){
    //time passed since sunset before midnight
    moontime =  time - sunsetT;
    }
    if (time >= 0 && time <= 1000){
    //time passed since sunset after midnight
    tpssbf =  time - sunsetT;
    moontime = tpssbf + time;
    };
  
    percentageM = ((moontime/moont) * 100)
    percentFinalM = (((23/20)*percentageM)-15)
    console.log(percentFinalM);
  
    });
  
          document.getElementById("moon").style.marginLeft = percentFinalM+"100%";
          document.getElementById("sun").style.marginLeft = percentFinal+"100%";


      }, 250);
  }
myFunction3();

  //-------------------------------------------------------------------------------------------------------

  function myFunction() {
    setInterval(function(){

  var CurrentDate = moment().format('HH:mm');
    console.log(CurrentDate);

    let dateSplit;
    dateSplit = CurrentDate.split(':');
    let dateHtom;
    dateHtom = dateSplit[0] * 60
    minstoday = dateHtom + parseInt(dateSplit[1]);
    console.log(minstoday + " mins have passed today.");

    //-----------------------------------------------------------------

  let sunrise;
  let sunset;
  let suns
  let sunr

  $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=66fe5911bbf64c2b80e935b0c3a77a0e', function (data) {
    console.log(data)
    sunrise = data.sunrise
    sunset = data.sunset

    suns = sunset.split(':');
    sunr = sunrise.split(':');
    
  }).then(function() {
    let sunrHtom = parseInt(sunr[0] * 60)
    let sunrMin = parseInt(sunr[1])
    let sunriseT = sunrHtom + sunrMin;
    console.log("The sun rises at " + sunriseT + " mins after midnight.");

    let sunsHtom = parseInt(suns[0] * 60)
    let sunsMin = parseInt(suns[1])
    let sunsetT = sunsHtom + sunsMin;
    console.log("The sun sets at " + sunsetT + " mins after midnight.");

    let suntime = sunsetT - sunriseT;
    console.log("The sun will be out for " + suntime + " mins today");

    let time = minstoday - sunriseT;
  console.log(time + " mins passed since sunrise");
  percentage = ((time/suntime) * 100)
  percentFinal = (((23/20)*percentage)-15)
  console.log(percentFinal);

  //Time from sunset to midnight
  nightTime = 1440 - sunsetT;

  //How long the sun will stay set in mins.
  moont = nightTime + sunriseT;

  if (time > 1000 && time < 1440){
  //time passed since sunset before midnight
  moontime =  time - sunsetT;
  }
  if (time >= 0 && time <= 1000){
  //time passed since sunset after midnight
  tpssbf =  time - sunsetT;
  moontime = tpssbf + time;
  };

  percentageM = ((moontime/moont) * 100)
  percentFinalM = (((23/20)*percentageM)-15)
  console.log(percentFinalM);

  });

        document.getElementById("moon").style.marginLeft = percentFinalM+"100%";
        document.getElementById("sun").style.marginLeft = percentFinal+"100%";
        }, 45000);
  };

  myFunction();

  return (
        <>
        <img alt="sun" id="sun" src={sun} /> 

        <img alt="moon" id="moon" src={moon}/>
        </>
  );
}