import React from "react";

function SongListTemp({ songs }) {
  return (
    <div>
      {songs.map((song) => (
        <li>{song.songTitle}</li>
      ))}
    </div>
  );
}

export default SongListTemp;
