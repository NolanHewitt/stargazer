import React, {component} from "react";
import Comment from "../Comment/index.js";
import "./Newcomment.css";
import Modal from './Modal.js'

class Newcomment extends React.Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
        console.log('modal show state', this.state.show);
        
      };

  render() {
    return (
        <div className = "newcomment">
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          Post a Comment{" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show}>
        </Modal>
      </div>
    );
  }
}

export default Newcomment;
