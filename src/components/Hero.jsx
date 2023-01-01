import React from 'react'
import hero from '../Assets/heroimg.jpg'


const Hero = () => {
 return(
   <div className='max-w-[1640px] mx-auto p-4'>
       <div className='max-h-[500px] relative'>
           {/*overlay */}
           <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
               <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The Best</h1>
               <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Coffee Delivered</h2>
           </div>
           <img className='w-full max-h-[500px] object-cover' src={hero} alt="/"/>
       </div>
   </div>
 )
}

export default Hero