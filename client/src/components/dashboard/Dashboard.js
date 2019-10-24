import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
// import Locator from '../locator/locator'
import Skywatch from "../skywheel/watch";
import { History, HistoryItem } from "../userHistory";
import { AuthContext } from "../../auth/auth";
import Comment from "../Comment/index";
import Weather from "../Weather/index";
import "./dashboard.css";
import background from "../images/background.jpg";
import Newcomment from "../Newcomment/Newcomment";
import Modal from "../Newcomment/Modal.js"
import Compass from "../compass/compass"
import Comments from "../getcomments/index"

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);

  function remover() {
    setTimeout(function() {
      document.getElementById("removeafterabit").style.display = "none";
      //document.getElementById("commentsa").style.marginTop = "-55%"
    }, 5000);
  }
  remover();

  function addweather() {
    setTimeout(function() {
      document.getElementById("emojid").style.display = "block";
      document.getElementById("newcomment").style.display = "block";
      document.getElementById("centered-toggle-button").style.display = "block";
      document.getElementById("commentb").style.display = "block";
      document.getElementById("loggingout").style.marginTop = "-0.0000001%";
    }, 5600);
  }
  addweather();

  

  return (
    <>
      <div id="bg">
        <img src={background} alt="starry night sky"></img>
      </div>
      {/* <Locator/> */}
      <Skywatch/>
      <Weather/>
      <div id="bg">
        <img src={background} alt="starry night sky"></img>
      </div>

      <div id="userhistory" style={{background: "white",
    display:"none"}}>Text</div>
      
    <Newcomment/>
      <div
        style={{ height: "75vh", color: "white" }}
        className="container valign-wrapper"
      >
        <div className="row">
            <div id="removeafterabit" className="fourth-text landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p
                  style={{ color: "white" }}
                  className="flow-text text-darken-1"
                >
                  You are logged in
                </p>
              </h4>
            </div>
          <History>
            <HistoryItem>
            <Comments/>
            </HistoryItem>
          </History>

          

        </div>
      </div>

      <button
        style={{
          width: "85px",
          position: "absolute",
          marginLeft: "75%",
          marginTop: "15%",
        }}
        onClick={e => {
          e.preventDefault();
          logoutUser();
        }}
        className="btn waves-effect waves-light hoverable blue accent-3"
        id="loggingout"
      >
        Logout
      </button>
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
