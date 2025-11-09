import React from 'react'


const ProjectCard = ({plogo , title ,para , skills, website, source}) => {
  return (
    <>
   
    <div className='group relative flex size-full overflow-hidden  border bg-neutral-100  border-black/20 text-black cursor-pointer rounded-lg shadow-md w-[45%] max-sm:w-full h-[310px] bg-transparent'> 
  
    <div className='relative z-10'>
      <div className='min-h-[60px] min-w-[300px] place-items-center bg-white p-3 text-black border-black/20 h-full w-full relative rounded-lg flex flex-col justify-center items-start md:shadow-xl '>

      {/* ------------------logo---------------- */}
      <div className='px-3'>
        <img src={plogo} alt='noimg' className='w-18 h-6'/>
      </div>

      {/* ----------------projects Header/About-------------  */}

      <div className='px-3 mt-4 '>
        <a href={website} target='_blank'>
          <h1 className='text-xl text-black font-bold text-start whitespace-nowrap'>{title}  </h1>
        </a>
        <p className='mt-2 text-sm text-gray-500'>
          {para}
        </p>
      </div>


      {/* -------------tech used------------- */}
      <div className='flex gap-1 px-3 mt-4 flex-wrap '>
        {skills.map(skill=>(
        <span key={skill} className=' text-[12px] max-sm:text-[12px] rounded-sm border  text-black  py-1 px-2 cursor-pointer hover:bg-gray-800 hover: hover:text-white '>{skill}</span>
        ))}
      </div>

      {/* --------------------- web/source-----------  */}

      <div className='px-3 flex gap-1 mt-3'>
        <a href={website} target='_blank'>
             <span className=' text-[12px] max-sm:text-[12px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-700 '>Website</span>
        </a>
        <a href={source}>
             <span className=' text-[12px] max-sm:text-[12px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-700 '>Source</span>
        </a>
      </div>

      </div>
    </div>

    {/* ------------------------ */}
    <div>

    </div>

      </div>
    </>
  )
}

export default ProjectCard