import React from "react";
import "./Newcomment.css";
import Modal from './Modal.js'

class Newcomment extends React.Component {

    state = {
        show: false,
        commentdisplay: true
      };
      showModal = e => {
        this.setState({
          show: !this.state.show,
        });
      };

  render() {
    return (

        <div >

        <div id="newcomment" className = "newcomment">

        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {

            this.showModal(e);
          }}
        >
          {"Post a Comment"}
          {" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show} />
      </div>
    );
  }
}

export default Newcomment;
