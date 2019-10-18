import React, { useContext,} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Comment from '../Comment/Comment'

import $ from 'jquery';
import axios from 'axios';
import cheerio from 'cheerio';

import { AuthContext } from "../../auth/auth";

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);


  let city;
  let state;

  let latitude;
  let longitude;

  $.getJSON("http://gd.geobytes.com/GetCityDetails?callback=?", function (data) {
    console.log("Everything: " + data.geobytesfqcn);
    console.log("City: " + data.geobytescity);
    console.log("State: " + data.geobytesregion);
    console.log("Country: " + data.geobytescountry);
    console.log("Continent: " + data.geobytesmapreference);
    console.log("Currency Code: " + data.geobytescurrencycode);
    console.log("Latitude: " + data.geobyteslatitude);
    console.log("Longitude: " + data.geobyteslongitude);
    city = data.geobytescity;
    state = data.geobytesregion;
    latitude = data.geobyteslatitude;
    longitude = data.geobyteslongitude;
    
  }).then(function() {
    console.log(city + "Test");
    document.getElementById("location").innerHTML = "You are at " + city + ", " + state + ".";
    document.getElementById("coordinates").innerHTML = latitude + " " + longitude;

    let url = "https://in-the-sky.org/skymap2.php?no_cookie=1&latitude=" +latitude+ "&longitude=" +longitude+ "&timezone=-5.00&year=2019&month=10&day=16&hour=10&min=28&PLlimitmag=0&zoom=160&ra=10.91694&dec=44.97997"
    console.log("Url: "+url);


    axios.get(url).then(function(response) {
    let $ = cheerio.load(response.data);
    console.log($);

    // Grab image
    $("div.PLhost.position_relative").each(function(i, element) {
      // Save an empty result object
     let result = {};
      // Save the text and link of each a from each h3
      result.link = $(this)
        .children("a")
        .attr("href");
    });
  });

  });

  return (
    <>
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="landing-copy col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              You are logged into a full-stack{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            </p>

            <p id="location"></p>
            <p id="coordinates"></p>
            <p id="URL"></p>

          </h4>
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={e => {
              e.preventDefault();
              logoutUser();
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <Comment
    />
      <div>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={e => {
            e.preventDefault();
            console.log("user", user, {
              x: user.id
            });
            fetch("/api/v1/games", {
              method: "POST",
              body: JSON.stringify({
                x: user.id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => res.json())
              .then(res => console.log(res));
          }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Start Game
        </button>
        <div>
          <h1>GAMES</h1>
          <div>
            {myGames.map(game => (
              <div>
                <Link to={`/games/${game._id}`}>
                  {game._id} => {game.game}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
