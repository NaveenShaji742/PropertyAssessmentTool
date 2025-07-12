import React from "react";

function Sidebar({ properties }) {
  const grouped = properties.reduce((acc, prop) => {
    const key = prop.city || "Unknown";
    acc[key] = acc[key] || [];
    acc[key].push(prop);
    return acc;
  }, {});

  return (
    <div className="w-1/3 max-w-xs overflow-y-auto bg-white border-r border-gray-300 p-4">
      <h2 className="text-lg font-semibold mb-2">Properties</h2>
      {Object.entries(grouped).map(([district, props], idx) => (
        <div key={idx} className="mb-4">
          <h3 className="font-bold text-blue-600">{district}</h3>
          <ul className="ml-2 list-disc text-sm">
            {props.map((p, i) => (
              <li key={i}>
                {p.houseName} — {p.pincode}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
