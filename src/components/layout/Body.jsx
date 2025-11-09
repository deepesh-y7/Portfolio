import React from 'react'
import Home from '../sections/Home';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import { Outlet } from 'react-router-dom';
import Contact from '../sections/Contact';
import CurrentlyMaking from '../sections/CurrentlyMaking';
const Body = () => {
  return (

    // color- bg-[#fffaf5]
    <div className='  w-full h-full max-[350px]:overflow-hidden  max-sm:mt-0' >
      <Home/>
      {/* <CurrentlyMaking/> */}
      <Projects/>
      <Skills/>
      <Contact/>  
    </div>
  )
}

export default Body