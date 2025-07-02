import React from "react";

export default function PropertyCard({propertyList, onDelete}) {
  const size = propertyList.size
  const age = propertyList.age
  const rooms = propertyList.rooms
  const type = propertyList.type
  const location = propertyList.location
  const estimatedPrice = propertyList.calculatedPrice
  const year = new Date().getFullYear() - age

  return (
    <div className="bg-slate-700 p-4 rounded-lg shadow space-y-2 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-slate-100">
          🏙 {type} in {location}
        </h4>
        <span className="text-sm text-slate-400">{rooms} Rooms • {size}m²</span>
      </div>

      <p className="text-slate-400">Built: {year}</p>
      <p className="font-bold text-indigo-400 text-xl">${estimatedPrice.toLocaleString()}</p>
    <button
        className=" bg-red-600 hover:bg-red-500 text-white text-xs px-2 py-1 rounded transition-all"
      onClick={()=> onDelete(propertyList.id)}
      >
        Delete
      </button>
    </div>
  );
}
