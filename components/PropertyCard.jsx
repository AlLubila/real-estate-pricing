import React from "react";

export default function PropertyCard() {
  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow space-y-2 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-slate-100">
          🏙 Apartment in Lyon
        </h4>
        <span className="text-sm text-slate-400">2 Rooms • 55m²</span>
      </div>

      <p className="text-slate-400">Built: 2015</p>
      <p className="font-bold text-indigo-400 text-xl">$420,000</p>
    </div>
  );
}
