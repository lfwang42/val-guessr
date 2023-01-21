import './MainGame.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

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
  //<img class = "MainImage" src="https://f004.backblazeb2.com/file/cldimglt/pic15.jpg" />
    <div className="MainGame">
      <div className="MainDisplay">
        
        <MapContainer style={{ height: "450px", width: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          </Marker>
        </MapContainer>
      </div>        
    </div>
 
    );
  }

export default MainGame;
