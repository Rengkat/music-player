import React from "react";
import { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetails from "./PlayerDetails";

function Player({ songs, currentSongdIndex, setCurrentSongdIndex }) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const skipSong = (foward = true) => {
    if (foward) {
      setCurrentSongdIndex(() => {
        currentSongdIndex++;
        if (currentSongdIndex > songs.legnth) {
          currentSongdIndex = 0;
        }
        return currentSongdIndex;
      });
    }
  };
  const skipBack = (back = false) => {
    {
      setCurrentSongdIndex(() => {
        if (back) {
          currentSongdIndex--;
        }
        if (currentSongdIndex < songs.legnth - 1) {
          currentSongdIndex = 0;
        }
        return currentSongdIndex;
      });
    }
  };
  return (
    <div className="player">
      <audio ref={audioEl} src={songs[currentSongdIndex].src}></audio>
      {/* Player details */}
      <PlayerDetails songs={songs[currentSongdIndex]} />
      {/* contols */}
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
        skipBack={skipBack}
      />
      {/* <SongListTemp songs={songs} /> */}
      {/* more controls */}
    </div>
  );
}

export default Player;
