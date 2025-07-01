import React from "react";

export default function PropertyForm() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-slate-100">
        🧮 Property Estimator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="📍 Location" className="input-dark" />
        <select className="input-dark">
          <option>🏠 Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
        </select>
        <input
          type="number"
          placeholder="📐 Size (m²)"
          className="input-dark"
        />
        <input type="number" placeholder="🛏 Rooms" className="input-dark" />
        <input
          type="number"
          placeholder="🛠 Property Age"
          className="input-dark"
        />
      </div>

      <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md transition-all">
        Estimate Price
      </button>
    </div>
  );
}
