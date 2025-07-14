/*import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "./AboutModel";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup, // ✅ Import this!
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) navigate(`/map?query=${search}`);
  };

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100">
      
      <div className="h-screen flex flex-col items-center justify-center relative">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          About Us
        </button>

        <img
          src="/geojena.jpg"
          alt="GeoJena Logo"
          className="h-24 mb-6 object-contain"
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter District or State"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-80"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Search
          </button>
        </div>

        <button
          onClick={scrollToMap}
          className="mt-8 text-blue-600 underline"
        >
          ↓ Scroll down to view map
        </button>

        {showModal && <AboutModal onClose={() => setShowModal(false)} />}
      </div>

      
      <div ref={mapRef} className="h-screen flex items-center justify-center">
        <MapContainer
          center={[20.5937, 78.9629]} // India center
          zoom={6}
          style={{ height: "80vh", width: "90%" }}
        >
          <LayersControl position="topright">
            
            <LayersControl.BaseLayer checked name="Street Map">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
            </LayersControl.BaseLayer>

           
            <LayersControl.BaseLayer name="Satellite with Roads & Labels">
              <LayerGroup>
               
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                />
           
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                  zIndex={1}
                />
           
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                  zIndex={2}
                />
              </LayerGroup>
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}

export default HomePage;


*/



/*
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "./AboutModel";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) navigate(`/map?query=${search}`);
  };

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100">
     
      <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between fixed top-0 w-full z-50">
        
        <div className="flex items-center space-x-3">
          <img src="/geojena.jpg" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-gray-800"></span>
        </div>

    
        <nav className="flex space-x-6">
          <button className="text-gray-700 hover:text-blue-600 font-medium">Home</button>
          <button className="text-gray-700 hover:text-blue-600 font-medium">Services</button>
          <button className="text-gray-700 hover:text-blue-600 font-medium">About</button>
        </nav>
      </header>


      <div className="h-screen flex flex-col items-center justify-center relative pt-28">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          About Us
        </button>

        <img
          src="/geojena.jpg"
          alt="GeoJena Logo"
          className="h-24 mb-6 object-contain"
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter District or State"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-80"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Search
          </button>
        </div>

        <button
          onClick={scrollToMap}
          className="mt-8 text-blue-600 underline"
        >
          ↓ Scroll down to view map
        </button>

        {showModal && <AboutModal onClose={() => setShowModal(false)} />}
      </div>

    
      <div ref={mapRef} className="h-screen flex items-center justify-center">
        <MapContainer
          center={[20.5937, 78.9629]} // India center
          zoom={6}
          style={{ height: "80vh", width: "90%" }}
        >
          <LayersControl position="topright">
         
            <LayersControl.BaseLayer checked name="Street Map">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
            </LayersControl.BaseLayer>

        
            <LayersControl.BaseLayer name="Satellite with Roads & Labels">
              <LayerGroup>
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                />
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                  zIndex={1}
                />
                <TileLayer
                  url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                  attribution="&copy; Esri"
                  zIndex={2}
                />
              </LayerGroup>
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}

export default HomePage;


*/


import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "./AboutModel";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const mapRef = useRef(null);
  const topRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) navigate(`/map?query=${search}`);
  };

  const scrollToMap = () => {
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100" ref={topRef}>
      {/* ✅ Navbar */}
      <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between fixed top-0 w-full z-50">
        {/* Logo on left */}
        <div className="flex items-center space-x-3">
          <img src="/geojena.jpg" alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-gray-800"></span>
        </div>

        {/* Navigation buttons */}
        <nav className="flex space-x-6">
          <button onClick={scrollToTop} className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </button>
          <button onClick={scrollToServices} className="text-gray-700 hover:text-blue-600 font-medium">
            Services
          </button>
          <button onClick={scrollToAbout} className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </button>
        </nav>
      </header>

      {/* Hero / Search Section */}
      <div className="h-screen flex flex-col items-center justify-center relative pt-28">
        <button
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          About Us
        </button>

        <img
          src="/geojena.jpg"
          alt="GeoJena Logo"
          className="h-24 mb-6 object-contain"
        />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter District or State"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-80"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Search
          </button>
        </div>

        <button
          onClick={scrollToMap}
          className="mt-8 text-blue-600 underline"
        >
          ↓ Scroll down to view map
        </button>

        {showModal && <AboutModal onClose={() => setShowModal(false)} />}
      </div>

{/* Map Section */}
<div
  ref={mapRef}
  className="pt-[96px] px-4 pb-10 bg-white"
>
  <MapContainer
    center={[20.5937, 78.9629]} // India center
    zoom={6}
    style={{ height: "80vh", width: "100%", borderRadius: "12px" }}
  >
    <LayersControl position="topright">
      {/* Street Map */}
      <LayersControl.BaseLayer checked name="Street Map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </LayersControl.BaseLayer>

      {/* Satellite with Roads & Labels */}
      <LayersControl.BaseLayer name="Satellite with Roads & Labels">
        <LayerGroup>
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri"
          />
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri"
            zIndex={1}
          />
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri"
            zIndex={2}
          />
        </LayerGroup>
      </LayersControl.BaseLayer>
    </LayersControl>
  </MapContainer>
</div>

      {/* Services Section (Placeholder) */}
      <div ref={servicesRef} className="min-h-screen flex flex-col justify-center items-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Services</h2>
        <p className="text-lg text-gray-600 text-center max-w-xl">
          Here you can describe your GeoJena services in detail, such as data analysis, visualization, etc.
        </p>
      </div>

      {/* About Section (Placeholder) */}
      <div ref={aboutRef} className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About GeoJena</h2>
        <p className="text-lg text-gray-700 text-center max-w-xl">
          GeoJena Technologies is committed to delivering cutting-edge GIS and remote sensing solutions.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
