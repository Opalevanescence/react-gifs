import React from "react";
import Gif from "./gif.jsx";

const GifList = (props) => {
  // renderList = () => {
  //   return props.gifs.map( gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} /> );
    // BEFORE REFACTORING:
    // return this.props.gifs.map( gif => {
    //   return <Gif id={gif.id} key={gif.id} />
    // });
  // }
  return (
    // RENDER ALL THE GIFS
    <div className="gif-list">
      {props.gifs.map( gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} /> )}
    </div>
  );
}

export default GifList;
