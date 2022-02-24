import React from "react";

function PlayerDetails({ songs }) {
  return (
    <div className="playerDetails">
      <div className="image">
        {/* artist image */}
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "100%",
            backgroundPosition: "50% 50%",
          }}
          src={songs.img}
          alt=""
        />
      </div>
      <div className="songDetails">
        <h2 style={{ letterSpacing: "2px" }}>{songs.songTitle}</h2>
        <h3 style={{ color: "lightgrey", padding: "10px" }}>{songs.artist}</h3>
      </div>
    </div>
  );
}

export default PlayerDetails;
