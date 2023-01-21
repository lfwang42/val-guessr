import './MainGame.css';
import React, { useState } from 'react';

function MainGame(props) {
    const [gameEnded, startGame] = React.useState(false);
    const [round, setRound] = React.useState(1);
    const [pics, setPics] = useState([{"name": './media/1.jpg'}, {"name":'./media/2.jpg'}, {"name": './media/3.jpg'}])

    return (
      /* "_id": "new9",
      "name": "pic49.jpg",
      "lat": "1056",
      "lng": "600",
      "location": "Teyvat"
  }*/
  //images stored locally (?), but have id, names, and store their lat/longitude locally
    <div className="MainGame">
      <div className="MainDisplay">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" />
      </div>        
    </div>
 
    );
  }

export default MainGame;
