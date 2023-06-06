import './ResultsMap.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, useMapEvents, ImageOverlay, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import flagIcon from "./redFlag.png"
import {CRS, Icon} from 'leaflet'
import Ascent from "./media/Ascent.png"

function ResultsMap(props) {
    const [map, setMap] = useState(Ascent);

    useEffect(() => {
        setMap(props.currentMap);
    }, [props.currentMap]);

    // useEffect(() => {
    //   if (!props.guessMade) {
    //     setPosition(null);
    //   }

    // }, [props.guessMade]);

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
    // function GuessHandler() {
    //     const m = useMapEvents({
    //         click(e) {
    //             props.enableButton();  
    //         },
    //     });
    // }
    
    function GuessMarker() {    
      return props.guessCoords === null ? null : (
        <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}  position={props.guessCoords}>
            {/* <Popup>
                {position[0]}, {position[1]}
            </Popup> */}
        </Marker>
      )
    }

    function AnswerMarker() {    
      return props.answerCoords === null ? null : (
        <Marker icon={new Icon({iconUrl: flagIcon, iconSize: [25, 41], iconAnchor: [12, 41]})}  position={props.answerCoords}>
            {/* <Popup>
                {position[0]}, {position[1]}
            </Popup> */}
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
        <MapContainer className = {"resultContainer"} center = {[500,500]} 
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
          <GuessMarker />
          <AnswerMarker />
          {/* <GuessHandler /> */}
        </MapContainer>       
 
    );
  }

export default ResultsMap;
