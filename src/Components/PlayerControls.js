import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faHeart,
  faSearch,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControls({ isPlaying, setIsPlaying, skipSong, skipBack }) {
  // const [showMusicList, setShowMusicList] = useState(false);
  return (
    <div className="playerControl">
      <div className="mainControl">
        <button>
          <FontAwesomeIcon icon={faBackward} onClick={skipBack} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            border: "1px solid #44454C",
            width: "80px",
            height: "80px",
            borderRadius: "100%",
            fontSize: "30px",
          }}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button>
          <FontAwesomeIcon icon={faForward} onClick={skipSong} />
        </button>
      </div>
      {/* Bottom controls */}
      <div className="control-2">
        <button>
          <FontAwesomeIcon icon={faRandom} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default PlayerControls;
