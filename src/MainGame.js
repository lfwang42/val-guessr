import './MainGame.css';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Select from 'react';
import GameMap from './GameMap';
import Ascent from "./media/Ascent.png"
import Pearl from "./media/Pearl.png"
import Bind from "./media/Bind.png"

function MainGame(props) {
    const [gameEnded, startGame] = React.useState(false);
    const [guessMade, toggleButton] = useState(false);
    const [round, setRound] = React.useState(1);
    const [pics, setPics] = useState([{name: 'k4m1DPP/2023-01-21-3.png', coords: [500, 500]}, {name: 'XXPDZ2R/2023-01-21-1.png', coords: [500, 500]}]);
    const [currentPic, changePic] = useState("https://i.ibb.co/"+pics[0].name);
    const [selectedMap, setMap] = React.useState(Ascent);
    const maps = [{name: "Ascent", url: Ascent}, {name: "Pearl", url: Pearl}, {name: "Bind", url: Bind}];
    const changeMap = (e) => {
      setMap(e.target.value);
    }

    const enableButton = () => {
      toggleButton(true);
    }

    const endRound = () => {
      setRound(round+1);
      changePic("https://i.ibb.co/"+pics[round-1].name);
    }
    return (
      /* "_id": "new9",
      "name": "pic49.jpg",
      "lat": "1056",
      "lng": "600",
      "location": "Teyvat"
  }*/
  //images stored locally (?), but have id, names, and store their lat/longitude locally
  //<img class = "MainImage" src="https://f004.backblazeb2.com/file/cldimglt/pic15.jpg" />
    <div className="MainGame">
      <div className="MainDisplay">
        <div className = "Viewer" >
          <img className = "ViewImage" src = {currentPic} />
        </div>
        <div className="MapBox">
          <select id="MapSelect" onChange={changeMap}>
           {maps.map((map) => <option value = {map.url} label = {map.name}></option>)}
          </select>
          <GameMap currentMap = {selectedMap} guessMade = {guessMade} enableButton = {enableButton}/>
          <button id="GuessButton" disabled={!guessMade} onClick={endRound}>Make a Guess</button>
        </div>
      </div>        
    </div>
 
    );
  }

export default MainGame;
