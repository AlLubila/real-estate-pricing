import PriceCard from "@/components/PriceCard";
import PropertyForm from "@/components/PropertyForm";
import PropertyList from "@/components/PropertyList";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <PropertyForm />

        <PriceCard />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">
            🗂 Saved Properties
          </h2>
          <PropertyList />
        </div>
      </div>
    </div>
  );
}
