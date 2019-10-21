import React, { useContext, } from "react";
import PropTypes from "prop-types";
// import Locator from '../locator/locator'
import Skywatch from "../skywheel/watch";
import { History, HistoryItem } from "../userHistory";
import { AuthContext } from "../../auth/auth";
import Comment from "../Comment/index";
import Weather from "../Weather/index";
import './dashboard.css';
import background from "../images/background.jpg"

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);

  function remover() {

  setTimeout(function(){
    document.getElementById("removeafterabit").style.display = "none";
    document.getElementById("commentsa").style.marginTop = "-95%"
    }, 5000);
  };

  remover();



  return (
    <>
    <div id ="bg">
      <img src={background} alt="starry night sky">
      </img>
    </div>
      {/* <Locator/> */}
      < Skywatch />
      <Weather />
      <div id="bg">
        <img src={background} alt="starry night sky">
        </img>
      </div>

      <div style={{ height: "75vh", color: "white" }} className="container valign-wrapper">
        <div className="row">

        

  <section id="removeafterabit" class="animation-box">
          <div className="fourth-text landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p style={{ color: "white" }} className="flow-text text-darken-1">
                You are logged in
            </p>
            </h4>
          </div>
          </section>


          <Comment />
          <History>
            <HistoryItem>
              {/* Comment History to go here at some point! */}
            </HistoryItem>
          </History>
        </div>
      </div>

      <button
              style={{
                width: "85px",
                position: "fixed",
                marginLeft: "75%",
                marginTop: "15%",
              }}
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              className="btn waves-effect waves-light hoverable blue accent-3"
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
