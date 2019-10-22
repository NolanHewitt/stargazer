import React from 'react';
import Comment from '../Comment/index.js'


class Newcomment extends React.Component {
state= {
    commentBoxOpen: false,
    commentBoxDisplay: "none"
}
    handleClick() {
        return (
            <Comment/>
        )
    }

    render() {
    return (
        <div>
            <button onClick={this.handleClick}>
                See something cool? <br></br> Post about it!
            </button>
        </div>
    
    );
    }
}

export default Newcomment;