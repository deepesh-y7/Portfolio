import React from 'react'
import RgpvImg from '../../assets/rgpv.png'
import CurrentlyMaking from './CurrentlyMaking'

const Skills = () => {
  return (

    <>
    <div className='w-full flex justify-center mt-12'>
        <div className='w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8'>
        <div className='px-10'>
            <h1 className='text-[2rem] max-sm:text-2xl font-semibold  text-start max-sm:text-center '>Skills</h1>
        </div>
        {/* skills------------/ - */}
        <div className='flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-4 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-'>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>Javascript</span>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>Node</span>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>Reactjs</span>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>Tailwind</span>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>Redux</span>
            <span className=' text-[12px] max-sm:text-[10px] rounded-sm bg-black text-white dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 '>MongoDB</span>
        
        </div>
        </div>
    </div>

    {/* education== */}

    <div className='w-full flex justify-center mt-12'>
      <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-3 flex flex-col items-center mt-4 '>
        <div className='px-10'>
          <h1 className='text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center __className_a4bae9'>Education </h1>
        </div>
        <div className='group relative flex size-full overflow-hidden rounded-xl  border text-black  cursor-pointer mt-5  border-none'>
          <div className='relative z-10'>
            <div className='flex w-full px-5 max-sm:px-0 max-sm:pr-1 py-3'>
              <div className='w-24 flex items-center justify-center '>
                <a ><img src={RgpvImg}  alt='img'/></a>
              </div>

              <div className='w-full '>
                <div>
                  <div className='flex items-center w-[41vw] max-lg:w-full max-sm:w-full mt-4 px-2 justify-between '>
                    <h1 className='text-lg leading-4 mb-1 max-sm:text-base font-semibold'> Bachelor Of Information Technology &#40; B.Tech-IT &#41;</h1>
                    <span className='text-xs max-sm:text-[10px] max-sm:hidden'>SEP 2027</span>
                  </div>
                  <h2 className='text-sm max-sm:text-xs px-2'>RGPV University Bhopal</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

       <CurrentlyMaking/>
    </>
  )
}

export default Skills