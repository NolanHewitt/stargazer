import React from 'react';
import Comment from '../Comment/index.js'
import "./Newcomment.css"



class Newcomment extends React.Component {
state= {
    commentBoxOpen: false,
    commentBoxDisplay: "none"
}
    handleClick() {
        this.setState({
            commentBoxOpen: true,
            commentBoxDisplay: "block"
        }) 
    }

    render() {
    return (
        <div className= "newcomment">
            <button onClick={this.handleClick}>
                See something cool? <br></br> Post about it!
            </button>
            <br></br>
            <br></br>
            <Comment 
            display={this.state.commentBoxDisplay} />
        </div>
    
    );
    }
}

export default Newcomment;