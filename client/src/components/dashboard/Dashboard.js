import React, { useContext,} from "react";
import PropTypes from "prop-types";
import Locator from '../locator/locator'
import Skywatch from "../skywheel/watch"

import { AuthContext } from "../../auth/auth";

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);



  return (
    <>
    <Locator/>
    <Skywatch/>

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
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
