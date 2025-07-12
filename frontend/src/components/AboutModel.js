import React from "react";

function AboutModel({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-lg w-full text-center">
        <h2 className="text-xl font-bold mb-4">About the Company</h2>
        <p className="text-gray-700">
          Property Assessment Tool is a platform designed to provide intelligent,
          location-based property insights across Kerala. We help urban planners,
          local governments, and individuals assess property data accurately using
          geo-mapping, risk indicators, and location intelligence.
        </p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default AboutModel;
