import React from "react";
import $ from "jquery";
import "./weather.css"

export default function getWeather() {

    let latitude = 44;
    let longitude = -93
    $.getJSON('https://api.ipgeolocation.io/astronomy?apiKey=2e99e14a862c46a89e3bd1b5ba265340', function (data) {
        latitude = data.location.latitude;
        longitude = data.location.longitude;
    })

    const apiKey = "775daeace8183df662c1b6fca71df7b4";

    let location;
    let icon;
    let fahrenheit;
    let temp_max;
    let temp_min;
    let description;

    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`, function (data) {

        location = data.name;
        fahrenheit = data.main.temp;
        temp_max = data.main.temp_max;
        temp_min = data.main.temp_min;
        description = data.weather[0].description;
        icon = data.weather[0].icon;

    }).then(function (data) {
        console.log(data);

        // //set dom elements from API

        let imageIcon = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        console.log(imageIcon)
        let temperatureDegree = document.querySelector('.degree-section');
        let temperatureHigh = document.querySelector('.degree-high');
        let temperatureLow = document.querySelector('.degree-low');
        let temperatureDescription = document.querySelector('.weather-description');
        let temperatureImage = document.querySelector('.weather-image');
        let temperatureLocation = document.querySelector('.weather-location');

        temperatureDegree.textContent = fahrenheit;
        temperatureHigh.textContent = temp_max;
        temperatureLow.textContent = temp_min;
        temperatureLocation.textContent = location;
        temperatureDescription.textContent = description;
        temperatureImage.setAttribute = imageIcon;
    });



    return (
        <>           
         <button
            style={{
                width: "100px",
                borderRadius: "3px",
                position:  "absolute",
                marginTop: "145%",
                marginLeft: "3%"

            }}
            onClick={e => {
                e.preventDefault();
                getWeather();
                document.getElementById("weather-container").style.display = "block";
            }}
            className="emoji btn btn-large waves-effect waves-light hoverable blue accent-3">
            ⛈️
         </button>

            <div class="containerW" id="weather-container">
                    <div id="rowW" class="row2">
                        <h2 class="weather-location">Location</h2>
                        <h3 class="degree-section">Temperature: °F</h3>
                        <h3 class="degree-high">Max. Temperature: °F</h3>
                        <h3 class="degree-low">Min. Temperature: °F</h3>
                        {/* <img class="weather-image" src="" alt="" width="128" height="128" /> */}
                    <h3 class="weather-description"></h3>

         <button
            style={{
                width: "105px",
                borderRadius: "4px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
            }}
            onClick={e => {
                e.preventDefault();
                getWeather();
                document.getElementById("weather-container").style.display = "none";
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Close
         </button>    


                    </div>
                    
            
                         
            </div>

        </>
    );
}