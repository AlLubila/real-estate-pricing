import React from "react";

export default function PriceCard({estimatedPrice}) {
  return (
    <div className="mt-6 bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded">
      <p className="text-lg text-emerald-300 font-semibold">Estimated Price:</p>
      <h3 className="text-4xl font-bold text-emerald-400 mt-2">${estimatedPrice.toLocaleString()}</h3>
    </div>
  );
}
