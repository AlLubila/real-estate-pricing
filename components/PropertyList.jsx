import React from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
}
