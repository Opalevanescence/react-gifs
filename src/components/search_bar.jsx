import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdate = (event) => {
    // SEARCH UPDATES EVERY KEYSTROKE
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      // AN INPUT FOR YOU SEARCH
      <input className="form-control form-search" type="text" placeholder="Search..." onChange={this.handleUpdate}/>);
  }
}

export default SearchBar;
