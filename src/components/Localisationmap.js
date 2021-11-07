
import React from "react";
import {  MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet"
import * as riderData from "../data/riders-profile.json";
import "./Localisationmap.css";

export const icon = new Icon({
  iconUrl: "/motocross.svg",
  iconSize: [30, 30]
});




export default function Localisationmap() {

  

  return ( 

    <MapContainer center={[40.014984,-105.270546]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {riderData.features.map(park => (
        

        <Marker key={park.properties.PARK_ID} position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
            
          ]}icon={icon}>

          <Popup>
          <div>
            <h6>{park.properties.NAME}</h6>
            <p>State : {park.properties.STATE}</p>
            <p>City :{park.properties.CITY}</p>

          </div>
          </Popup>

          </Marker>
      ))}

        
        
    </MapContainer>
  );
}
