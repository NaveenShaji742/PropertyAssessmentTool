import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={[10.8505, 76.2711]} zoom={8} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {properties.map((property, idx) => (
          <Marker key={idx} position={[property.latitude, property.longitude]}>
            <Popup>
              <strong>{property.houseName}</strong><br />
              {property.city}, {property.pincode}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;







/*import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const App = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={[10.8505, 76.2711]} zoom={8} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property, idx) => (
          <Marker key={idx} position={[property.latitude, property.longitude]}>
            <Popup>
              <strong>{property.houseName}</strong><br />
              {property.city}, {property.pincode}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;

*/