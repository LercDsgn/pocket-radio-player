import React, { useState, useEffect } from "react";
import { DATA } from "./components/Data";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);

  const changeUrl = (url) => {
    setUrl(url);
  }

  return (
    <div>
      <div className="header">Pocket Radio Player</div>
      <div className="App">
        {DATA.map((item) => {
          return (
            <a onClick={() => setUrl(item.url)} className="radio-station">
              <img src={item.image} />
            </a>
          );
        })}
      </div>
      <div className="player">
        <AudioPlayer
          autoPlay
          preload={'none'}
          showSkipControls={false}
          showJumpControls={false}
          src={url}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </div>
  );
}

export default App;
