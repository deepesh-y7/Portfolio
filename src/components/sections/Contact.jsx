import React from 'react'

const Contact = () => {
  return (
    <div className='w-full flex justify-center mt-18'>
        <div className='w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-6 pb-8'>
            <div className='px-10'>
                <h1 className='text-[1.8rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center'>Say Hello!</h1>
            </div>
            <div className='w-full flex flex-col gap-3 mt-6 px-36 max-sm:px-4 '>
                <div className='w-full flex justify-center'>
                    <div className='mt-4 w-full'>
                        <form className='flex flex-col gap-4'>
                            <div className='grid w-full gap-2'>
                                <label className='text-sm max-sm:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Your Email</label>
                                <input className='flex __className_f367f3 rounded-md border-[#374151] bg-transparent px-3 py-3 text-sm max-sm:text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed opacity-50 w-full h-full border' placeholder='example@xyz.com' required type='text'/>
                            </div>
                            <div className='grid w-full gap-2'>
                                <label className='text-sm max-sm:text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Your Message</label>
                                <textarea className='flex min-h-[100px] w-full __className_f367f3 rounded-md border border-[#374151] bg-transparent px-3 py-2 text-sm max-sm:text-xs shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring  opacity-50' placeholder='Type your msg here!'></textarea>
                            </div>
                            <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors
                            cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/75 h-9 px-4 py-2 mt-3'>Send Message</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact