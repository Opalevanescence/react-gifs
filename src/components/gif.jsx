import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
    // MY TRY:
    // return this.setState({
    //   selectedGifId: event.target.id
    // })
  }

  render() {
    // SHOW THE GIF
    const source = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return ( <img className="gif" alt="gif image" src={source} onClick={this.handleClick} /> );
  }
}

export default Gif;
