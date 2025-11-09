import React from 'react'
import ProjectCard from './ProjectCard'
import projectCards from '../data/projectsData'


const Projects = () => {
  return (
   <>
   
    <div className=' w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center pb-8'>
   <div className='px-10 mt-34 max-sm:mt-28'>
    <h1 className='text-[1.8rem] max-sm:text-2xl  font-semibold tracking-tight text-start max-sm:text-center '>Proof Of Work</h1>
   </div>
   <div className='flex w-full flex-col mt-6 gap-4 lg:flex-row px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10'>
  
  {projectCards.map(card => (
  <ProjectCard key={card.id} {...card} />
  ))}

   </div>
   </div>
   </>
  )
}

export default Projects