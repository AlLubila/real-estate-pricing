'use client'

import React, { use, useState } from "react";

export default function PropertyForm({onEstimatePrice, setCurrentFormData}) {

  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [size, setSize] = useState('')
  const [rooms, setRooms] = useState('')
  const [type, setType] = useState('')

  const handleEstimatePrice = () =>{

     const id = crypto.randomUUID()
  
    if (age && size && rooms && age >= 0 && size >=0 && rooms >=0 ){
     const calculatedPrice  =Number(size) * 3000 + Number(rooms) * 10000 - Number(age) * 500
     onEstimatePrice(calculatedPrice)
      setCurrentFormData({id,age, size, rooms, type, location, calculatedPrice})
    }
    setAge('')
    setLocation('')
    setSize('')
    setRooms('')
    setType('')
    
  }

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-slate-100">
        🧮 Property Estimator
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="📍 Location" onChange={(e)=> setLocation(e.target.value)} value={location} className="input-dark" />
        <select onChange={(e)=> setType(e.target.value)} className="input-dark">
          <option value=''>🏠 Property Type</option>
          <option value='Apartment'>Apartment</option>
          <option value='House'>House</option>
          <option value='Villa'>Villa</option>
        </select>
        <input
          type="number"
          value={size}
          min='0'
          onChange={(e)=> setSize(e.target.value)}
          placeholder="📐 Size (m²)"
          className="input-dark"
        />
        <input type="number" value={rooms} min='0' onChange={(e)=> setRooms(e.target.value)} placeholder="🛏 Rooms" className="input-dark" />
        <input
          type="number"
          value={age}
          min='0'
          onChange={(e)=> setAge(e.target.value)}
          placeholder="🛠 Property Age"
          className="input-dark"
        />
      </div>

      <button onClick={handleEstimatePrice} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded-md transition-all">
        Estimate Price
      </button>
    </div>
  );
}
