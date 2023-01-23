import './GameMap.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, useMapEvents, ImageOverlay, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {CRS, Icon} from 'leaflet'
import Ascent from "./media/Ascent.png"
import Pearl from "./media/Pearl.png"

function GameMap(props) {
    const [map, setMap] = useState(Ascent);
    const maps = {"Ascent": Ascent, "Pearl": Pearl};
    useEffect(() => {
        setMap(maps[props.currentMap]);
    }, [props.currentMap]);
    const bounds = [
        [0, 0],
        [1024, 1024]
      ];
    const maxBounds = [[0,0],[1024,1024]];
    
    function LocationMarker() {
      const [position, setPosition] = useState(null)
      const map = useMapEvents({
        click(e) {
          setPosition([e.latlng.lat, e.latlng.lng]);     
        },
      });
    
      return position === null ? null : (
        <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}  position={position}>
            <Popup>
                {position[0]}, {position[1]}
            </Popup>
        </Marker>
      )
    }

    return (
      /* "_id": "new9",
      "name": "pic49.jpg",
      "lat": "1056",
      "lng": "600",
      "location": "Teyvat"
  }*/
  //           <LocationMarker position={[0, 0]} />    bounds = {[[0,0], [20, 20]]}        url="https://static.wikia.nocookie.net/valorant/images/6/63/Pearl_minimap.png"
  //images stored locally (?), but have id, names, and store their lat/longitude locally
  //<img class = "MainImage" src="https://f004.backblazeb2.com/file/cldimglt/pic15.jpg" />
        <MapContainer center = {[500,500]} 
        zoom={-1} 
        maxZoom={2}
        minZoom={-1}
        scrollWheelZoom={true} 
        maxBounds = {maxBounds}
        crs={CRS.Simple}
        whenCreated={ mapInstance => { this.mapRef.current = mapInstance } }>
          <ImageOverlay
            attribution='&copy; <a href="https://valorant.fandom.com">Valorant Wiki</a>'
            url = {map}
            bounds = {bounds}
            zIndex = {1}
          />
          <LocationMarker />
        </MapContainer>       
 
    );
  }

export default GameMap;
