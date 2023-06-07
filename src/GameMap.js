import './GameMap.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, useMapEvents, ImageOverlay, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {CRS, Icon} from 'leaflet'
import Ascent from "./media/Ascent.png"

function GameMap(props) {
    const [map, setMap] = useState(Ascent);
    const [position, setPosition] = useState(props.guessCoords);

    useEffect(() => {
      props.setCoords(position);
    }, [position]);

    useEffect(() => {
      setMap(props.currentMap);
  }, [props.currentMap]);

    useEffect(() => {
      if (!props.guessMade) {
        setPosition(null);
      }

    }, [props.guessMade]);

    const bounds = [
        [0, 0],
        [1024, 1024]
      ];
    const maxBounds = [[0,0],[1024,1024]];
    /*function ButtonUpdate() {
        const map = useMapEvents({
        click() {
            if (!props.guessMade) {props.enableButton(true);}
        },
        });
    }*/
    function GuessHandler() {
        const m = useMapEvents({
            click(e) {
                props.enableButton();  
            },
        });
    }
    
    function LocationMarker() {
      const m = useMapEvents({
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
        <MapContainer className = {"MainContainer"} center = {[500,500]} 
        zoom={-1} 
        maxZoom={2}
        minZoom={-1}
        scrollWheelZoom={true} 
        maxBounds = {maxBounds}
        crs={CRS.Simple}
        whenCreated={ mapInstance => { this.mapRef.current = mapInstance } }>
          <ImageOverlay
            // attribution='&copy; <a href="https://valorant.fandom.com">Valorant Wiki</a>'
            url = {map}
            bounds = {bounds}
            zIndex = {1}
          />
          <LocationMarker />
          <GuessHandler />
        </MapContainer>       
 
    );
  }

export default GameMap;
