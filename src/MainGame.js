import './MainGame.css';
import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Select from 'react';
import GameMap from './GameMap';
import Ascent from "./media/Ascent.png"
import Pearl from "./media/Pearl.png"
import Bind from "./media/Bind.png"
import ResultsMap from './ResultsMap';

function MainGame(props) {
    const [resultsShown, showResults] = React.useState(false);
    const [guessMade, toggleGuess] = useState(false);
    const [guessCoords, setGuessCoords] = useState(null);
    const [round, setRound] = useState(0);
    const [score, setScore] = useState(0);
    const [pics, setPics] = useState([{name: 'pic1.png', map: Ascent, coords: [500, 500]}, {name: 'pic2.png', map: Ascent, coords: [500, 500]}, {name: 'pic3.png', map: Ascent, coords: [500, 500]}]);
    const [currentPic, changePic] = useState("https://f005.backblazeb2.com/file/valgsrimg/"+pics[0].name);
    var split = ("https://f005.backblazeb2.com/file/valgsrimg/"+pics[0].name).split('.');
    const [currentAns, changeAns] = useState("https://f005.backblazeb2.com/file/valgsrimg/"+split[0]+"ans.png");
    const [selectedMap, setMap] = React.useState(Ascent);
    const maps = [{key: "Ascent", url: Ascent}, {key: "Pearl", url: Pearl}, {key: "Bind", url: Bind}];
    const [buttonText, setButtonText] = useState("Click on the Map to Guess");
    const changeMap = (e) => {
      setMap(e.target.value);
      toggleGuess(false);
    }

    const enableButton = () => {
      toggleGuess(true);
      setButtonText("Guess");
    }

    const showAnswer = () => {
      showResults(true)
      var roundScore = 0;
      if (pics[round].map === selectedMap) {
        const diff = Math.sqrt(Math.pow(Math.abs(pics[round].coords[0] - guessCoords[0]), 2) + Math.pow(Math.abs(pics[round].coords[1] - guessCoords[1]), 2));
        roundScore = 5000 - diff;
        setScore(score + roundScore);
      }
      console.log(score + 5000 - Math.abs(pics[round].coords[0] - guessCoords[0]) - Math.abs(pics[round].coords[1] - guessCoords[1]));

    }
    const endRound = () => {
      
      var newPic = "https://f005.backblazeb2.com/file/valgsrimg/"+pics[round+1].name;
      changePic(newPic);
      changeAns(newPic.slice(0, -4) + "ans.png");
      setRound(round+1);
      setGuessCoords(null);
      toggleGuess(false);
      showResults(false)
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
        
       
        { !resultsShown ? 
        <div className = "MidRound"> 
          <div className = "Viewer" >
          <img className = "ViewImage" src = {currentPic} alt = {"game location"} />
          {/* add answer pic + score in middle after \, if its last round next round button becomes next game
              also hosting?*/}
          </div>
          <div className="MapBox">
            <select id="MapSelect" onChange={changeMap}>
            {maps.map((map) => <option value = {map.url} label = {map.key}></option>)}
            </select>
            <GameMap currentMap = {selectedMap} guessCoords = {guessCoords} setCoords = {setGuessCoords} guessMade = {guessMade} enableButton = {enableButton}/>
            <button id="GuessButton" disabled={!guessMade} onClick={showAnswer}>{buttonText}</button>
          </div>
        </div> : null}
        { resultsShown ?  <div className = "Results" >
            <ResultsMap currentMap = {pics[round].map} answerCoords = {pics[round].coords} guessCoords = {guessCoords}/>
            <button id="NextRoundButton" onClick={endRound}>{"Next Round"}</button>
            </div> : null }         
      </div>
    </div>
 
    );
  }

export default MainGame;
