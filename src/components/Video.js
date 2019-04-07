import React, { Component } from "react";
import Video from "../video/preview.mp4";

const vidStyle = {
  height: "100vh",
  width: "100vw"
};

class VideoPlayer extends Component {
  render() {
    return (
      <React.Fragment>
        <video style={vidStyle} src={Video} type="video/mp4" autoPlay loop />
      </React.Fragment>
    );
  }
}

export default VideoPlayer;
