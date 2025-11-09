import React from 'react'

const Footer = () => {
  return (
    // <footer classname='w-full px-[400px] max-[1285px]:px-[350px] max-lg:px-64 max-sm:px-4 py-10 flex flex-col max-sm:text-center items-center mt-4 pb-8'>
    //     <div className='w-full'>
    //         <p className='text-sm max-sm:text-xs'>
    //             Designed and Developed By
    //             <a className='rt-Text rt-reset rt-Link rt-underline-auto '>Deepesh</a>
    //         </p>
    //     </div>
    // </footer>

    <footer className='w-full px-[400px] max-[1285px]:px-[350px] max-lg:px-64 max-sm:px-4 py-1 flex flex-col max-sm:text-center items-center mt-4 pb-4'>
      <div className='w-full'>
             <p className='text-sm max-sm:text-xs'>
                 Designed and Developed By
                 <a className=' underline cursor-pointer'> Deepesh</a>
             </p>
         </div>
    </footer>
  )
}

export default Footer