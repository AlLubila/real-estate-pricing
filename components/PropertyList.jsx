import React from "react";
import PropertyCard from "./PropertyCard";

export default function PropertyList({propertiesList, onDelete}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
      {
        propertiesList.map((propertyList, key) => (
          <PropertyCard propertyList={propertyList} key={propertyList.id} onDelete={onDelete}/>
        ))
      }
    </div>
  );
}