"use client";

import PriceCard from "@/components/PriceCard";
import PropertyForm from "@/components/PropertyForm";
import PropertyList from "@/components/PropertyList";
import React, { useEffect, useState } from "react";

export default function page() {
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [propertiesList, setPropertiesList] = useState([]);
  const [currentFormData, setCurrentFormData] = useState(null)
  const [hasLoaded, setHasLoaded] = useState(false);



  const handleEstimatePrice = (price) => {
    setEstimatedPrice(price);
    setIsSaving(true);
  };

  const handleSave = () => {
    const listCopy = [...propertiesList]
    listCopy.push(currentFormData)
    setPropertiesList(listCopy)
    
  };

  const handleDelete = (id)=> {
    const listCopy =[...propertiesList]
    const updatedList = listCopy.filter(property=> property.id != id)
    setPropertiesList(updatedList)
  }

 useEffect(() => {
  if (hasLoaded) {
    localStorage.setItem('properties', JSON.stringify(propertiesList));
  }
}, [propertiesList, hasLoaded]);


  useEffect(()=>{
    const stored = localStorage.getItem('properties');
    if(stored){
      setPropertiesList(JSON.parse(stored))
    }
    setHasLoaded(true);
  },[])

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <PropertyForm onEstimatePrice={handleEstimatePrice} setCurrentFormData ={setCurrentFormData} />

        <PriceCard estimatedPrice={estimatedPrice} />
        {isSaving && (
          <button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md transition-all">
            Save
          </button>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            🗂 Saved Properties
          </h2>

          <PropertyList propertiesList={propertiesList} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
}
