import './MainGame.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMapEvents, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon, marker} from 'leaflet'
import GameMap from './GameMap';

function MainGame(props) {
    const [gameEnded, startGame] = React.useState(false);
    const [round, setRound] = React.useState(1);
    const [pics, setPics] = useState([{"name": './media/1.jpg'}, {"name":'./media/2.jpg'}, {"name": './media/3.jpg'}])

    
    function LocationMarker() {
      const [position, setPosition] = useState(null)
      const map = useMapEvents({
        click(e) {
          setPosition([e.latlng.lat, e.latlng.lng]);     
        },
      });
    
      return position === null ? null : (
        <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}  position={position} />
      )
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
        
        <div className="MapBox">
          <GameMap />
        </div>
      </div>        
    </div>
 
    );
  }

export default MainGame;
