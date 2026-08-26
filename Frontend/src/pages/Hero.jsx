import React from "react";
import  HeroImage from '/homesmart.png'

function Hero(){
    return(
        <>
    
        <div className=" min-h-[80vh] lg:min-h-screen bg-[url('/homesmart.png')] bg-no-repeat bg-[length:90%_auto] bg-[center_top] md:bg-[length:65%_auto] md:bg-[85%_top]">
         <h1 className=" leading-tight font-bold  text-3xl  md:text-4xl lg:text-5xl px-6 pt-20 pb-5 md:px-20">Find Your <span className="text-teal-400">Perfect<br></br></span> Parking Spot in <span className="bg-linear-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Seconds</span> </h1>

           <p className=" px-6 md:px-20 pb-10 text-xl lg:text-2xl font-sans">SmartSpot uses AI-powered parking detection to help drivers <br ></br>find available parking spaces.</p>
           <span className="text-xl lg:text-2xl font-semibold px-6 md:px-20 pb-10 bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Find--->Book--->Park Smarter</span>

           <div className="flex gap-4 mt-20 md:mt-10 px-6 md:px-20 ">
            <button className="border bg-teal-600 py-3 px-6 font-bold text-black rounded-lg text-lg md:text-2xl  hover:scale-110 transition duration-700 ease-in-out cursor-pointer  hover:bg-teal-400  ">Book Now</button>
            <button className="border border-teal-600 text-teal-600 py-3 px-6 font-bold  rounded-lg text-lg md:text-2xl  hover:scale-110 transition duration-700 ease-in-out cursor-pointer  hover:bg-teal-400 hover:text-black ">Explore More</button>
           </div>
        </div> 
        </>
    )
}
export default Hero