import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

const App = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="max-w-7xl mx-auto my-24">
      <h2 className="text-center mb-10 text-5xl text-primary bg-blue-200 py-3">
        There are Best coffee in the world
      </h2>
      <div className="grid grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            coffees={coffees}
            setCoffees={setCoffees}
            key={coffee._id}
            coffee={coffee}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
