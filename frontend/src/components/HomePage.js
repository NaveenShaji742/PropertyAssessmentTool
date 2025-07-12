import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "./AboutModel";

function HomePage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) navigate(`/map?query=${search}`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={() => setShowModal(true)}>
        About Us
      </button>
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Property Assessment Tool</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter District or State"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-80"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-green-600 text-white rounded">Search</button>
      </div>
      {showModal && <AboutModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default HomePage;
