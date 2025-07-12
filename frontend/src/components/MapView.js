import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";
import "leaflet/dist/leaflet.css";

function MapView() {
  const [properties, setProperties] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    if (query) {
      axios.get(`http://localhost:8080/api/properties`)
        .then(res => setProperties(res.data))
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar properties={properties} />
      <MapContainer center={[10.85, 76.27]} zoom={8} className="flex-1">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((p, i) => (
          <Marker key={i} position={[p.latitude, p.longitude]}>
            <Popup>
              <strong>{p.houseName}</strong><br />
              {p.city}, {p.pincode}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
