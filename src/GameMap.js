import './GameMap.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, useMapEvents, ImageOverlay, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {CRS, Icon} from 'leaflet'
import Ascent from "./media/Ascent.png"

function GameMap(props) {
    const [map, setMap] = useState(Ascent);
    useEffect(() => {
        setMap(props.currentMap);
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
            {/*  if you need coordinates uncomment this 
            <Popup>
                {position[0]}, {position[1]}
            </Popup>*/}
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
