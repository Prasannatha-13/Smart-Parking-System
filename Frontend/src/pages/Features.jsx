import React from 'react'

function Features(){
    return(
        <>
        <div className='bg-black'>
            <hr className="w-1/2 border-teal-400 border-t-2 mx-auto my-6" />
            <h1 className='text-center font-bold sm:text-3xl md:text-5xl lg:text-5xl sm:mt-0 mt-8 m-14 text-teal-200'>Features</h1>
            <div className='flex flex-col justify-center items-center gap-8 m-20'>
                <div className='max-w-fit flex flex-col items-center text-center border border-teal-400 p-5 rounded-lg shadow-2xl shadow-teal-500 hover:bg-teal-700/50 transition hover:scale-110'>
                  <h1 className='text-xl font-semibold text-teal-400'>Get started</h1>
                  <p className="mt-2 text-gray-300">Create an account and log in securely</p>
                </div>
                
                <div className='max-w-fit border border-teal-400 flex flex-col items-center text-center p-5 rounded-lg shadow-2xl shadow-teal-500 hover:bg-teal-700/50 transition hover:scale-110'>
                   <h1 className='max-w-fit text-xl font-semibold text-teal-400'>Smart Detetection</h1>
                   <p className="mt-2 text-gray-300">AI detects available and occupied parking spaces in real time.</p>
                </div>
                <div className='max-w-fit border border-teal-400 flex flex-col items-center text-center p-5 rounded-lg shadow-2xl shadow-teal-500 hover:bg-teal-700/50 transition hover:scale-110'>
                   <h1 className='text-xl font-semibold text-teal-400'>Pick Your Spot</h1>
                   <p className="mt-2 text-gray-300">Pick your preferred available parking slot.</p>
                </div>
                <div className=' max-w-fit border border-teal-400 flex flex-col text-center items-center p-5 rounded-lg shadow-2xl shadow-teal-500 hover:bg-teal-700/50 transition hover:scale-110'>
                   <h1 className='text-xl font-semibold text-teal-400'>Park Smarter</h1>
                   <p className="mt-2 text-gray-300">Reserve your parking space instantly with confirmation.</p>
                </div>
                
                <div className='max-w-fit border flex flex-col text-center items-center border-teal-400 p-5 rounded-lg shadow-2xl shadow-teal-500 hover:bg-teal-700/50 transition hover:scale-110'>
                   <h1 className='text-xl font-semibold text-teal-400 '>My Bookings</h1>
                   <p className="mt-2 text-gray-300">View and manage your current and past reservations.</p>
                </div>

            </div>

        </div>
        </>
    )
}
export default Features