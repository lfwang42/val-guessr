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
    const [guessMade, toggleGuess] = useState(false);
    const [round, setRound] = useState(0);
    const [pics, setPics] = useState([{name: 'k4m1DPP/2023-01-21-3.png', coords: [500, 500]}, {name: 'XXPDZ2R/2023-01-21-1.png', coords: [500, 500]}]);
    const [currentPic, changePic] = useState("https://i.ibb.co/"+pics[0].name);
    const [selectedMap, setMap] = React.useState(Ascent);
    const maps = [{name: "Ascent", url: Ascent}, {name: "Pearl", url: Pearl}, {name: "Bind", url: Bind}];
    const [buttonText, setButtonText] = useState("Click on the Map to Guess");
    const changeMap = (e) => {
      setMap(e.target.value);
      toggleGuess(false);
    }

    const enableButton = () => {
      toggleGuess(true);
      setButtonText("Guess");
    }

    const endRound = () => {
      changePic("https://i.ibb.co/"+pics[round+1].name);
      setRound(round+1);
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
          <button id="GuessButton" disabled={!guessMade} onClick={endRound}>{buttonText}</button>
        </div>
      </div>        
    </div>
 
    );
  }

export default MainGame;
