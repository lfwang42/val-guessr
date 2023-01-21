import './HomePage.css';
import React from 'react';
import Footer from './footer.js'
import logo from './valorant logo.png';
import MainGame from './MainGame';

function HomePage() {
    const [hidden, setHidden] = React.useState(false);
    let visibility;
    if(hidden){
        visibility = {
          display: 'none',
        };
      }
    function startGame(e) {
        setHidden(true);
        e.preventDefault();
        console.log('submit');
    }
    
    return (
      /* "_id": "new9",
      "name": "pic49.jpg",
      "lat": "1056",
      "lng": "600",
      "location": "Teyvat"
  }*/
  //images stored locally (?), but have id, names, and store their lat/longitude locally
    <div className = "MainArea">
      {hidden && <MainGame />}
      <div className="Homepage" style={visibility}>
        <div className="App-header">
          <img src={logo} className="main-logo" alt="logo" />
          <h2> ValGuessr</h2>
          <button className = "StartButton" onClick={startGame}>Play</button>      
        </div>        
        <Footer />
      </div>
    </div>
    );
  }

export default HomePage;
