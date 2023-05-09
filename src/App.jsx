import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const coffees = useLoaderData();
  return (
    <div className='max-w-7xl mx-auto my-24'>
      <h2>There are Best coffee in the world</h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
        }
      </div>
    </div>
  )
}

export default App