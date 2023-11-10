import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styling/contact.css";

import L from "leaflet";
import MarkerIcon from "../assets/contact/Map_marker.svg.png";

function Map() {
  
  const customIcon = L.icon({
    iconUrl: MarkerIcon,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="map-container">
      <MapContainer
        center={[35.8061609, -88.6195667]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
        className="map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[35.8061609, -88.6195667]} icon={customIcon}>
          <Popup>Chenoweth Drive TN</Popup>
        </Marker>
        

        <Marker position={[31.070054, -105.3693868]} icon={customIcon}>
          <Popup>Wines Lane TX</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
