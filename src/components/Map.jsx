import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styling/contact.css";

function Map() {

  return (
    <div className="map-container">
      <MapContainer
        center={[35.8061609, -88.6195667]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%" }}
        className="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[35.8061609, -88.6195667]}>
          <Popup>Chenoweth Drive TN</Popup>
        </Marker>

        <Marker position={[31.070054, -105.3693868]}>
          <Popup>Wines Lane TX</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
