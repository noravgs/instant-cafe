import React from 'react'
import Category from './components/Category'
import Drinks from './components/Drinks'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import SearchBox from './components/SearchBar'

function App() {
  return (
    <div className='bg-[#d8ceb3] font-poppins'>
      <Navbar />
      {/* <SearchBox /> */}
      <Hero />
      <HeadlineCards />
      <Drinks />
      <Category />
    </div>
  );
}

export default App;
