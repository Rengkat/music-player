import { useState, useEffect } from "react";
import "./App.css";
import Player from "./Components/Player";
import { SongList } from "./Components/SongList";
// import Display from "./Components/Display";

function App() {
  const [songs] = useState(SongList);
  const [currentSongdIndex, setCurrentSongdIndex] = useState(0);
  // const [nextSongdIndex, setNextSongdIndex] = useState(currentSongdIndex + 1);
  // console.log(currentSongdIndex, songs.length);
  // useEffect(() => {
  //   setNextSongdIndex(() => {
  //     if (currentSongdIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongdIndex + 1;
  //     }
  //   });
  // }, [currentSongdIndex]);

  return (
    <div className="App">
      <Player
        songs={songs}
        currentSongdIndex={currentSongdIndex}
        setCurrentSongdIndex={setCurrentSongdIndex}
      />
    </div>
  );
}
export default App;

// 08068977205;
