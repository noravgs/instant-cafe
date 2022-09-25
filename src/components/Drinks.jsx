import React, { useState } from 'react'
import {data} from '../Data/data.js'

const Drinks = () => {

 const [drinks, setDrinks] = useState(data);

//filter type
const filterType = (type) => {
  setDrinks(
    data.filter((item) => {
     return item.type === type;
    })
  );
};

//filter by price
const filterPrice = (price) => {
 setDrinks(
  data.filter((item) => {
   return item.price === price;
  })
 )
}

 return (
  <div className='bg-[#dbb42c] max-w-[1640px] m-auto px-4 py-12'>
   <h1 className='text-[#a63c06] font-bold text-4xl text-center'>Top Rated Menu Items</h1>

   {/*Filter row */}
   <div className='flex flex-col lg:flex-row justify-between'>


    {/*filter type */}
    <div>
       <p className='font-bold text-gray-600'>Filter type</p>
       <div className='flex justify-between flex-wrap'>
        <button onClick={()=> setDrinks(data)} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>All</button>
        <button onClick={() => filterType('coffee')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>Coffee</button>
        <button onClick={() => filterType('tea')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>Tea</button>
        <button onClick={() => filterType('pastries')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>Pastries</button>

        </div>

    </div>
    {/*filter price */}
    <div>
       <p className='font-bold text-gray-600'>Filter Price</p>
       <div className='flex justify-between max-w-[390px] w-full'>
         <button onClick={() => filterPrice('$')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>$</button>
         <button onClick={() => filterPrice('$$')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>$$</button>
         <button onClick={() => filterPrice('$$$')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>$$$</button>
         <button onClick={() => filterPrice('$$$$')} className='m-1 border-[#a63c06] text-[#a63c06] hover:bg-[#a63c06] hover:text-white'>$$$$</button>
       </div>
    </div>
   </div>
   {/*Display drinks*/}
   <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {drinks.map((item, index) => (
       <div key={index} className='bg-[#ffe169] border shadow-lg rounded-lg hover:scale-105 duration-300'> 
         <img src={item.Image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
         <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{item.name}</p>
          <p>
           <span className='bg-[#a63c06] text-white p-1 rounded-full'>{item.price}</span>
          </p>
         </div>
       </div>
      ))}
   </div>
  </div>
 );
};

export default Drinks