import React from "react";
import { useState } from "react";
import SmartSpot from '../assets/SmartSpot.png'
import {useNavigate} from 'react-router-dom'


function Dashnav(){
    const [open,setOpen]=useState(false);
    return(
        <>
          <nav className="h-18 md:h-20 lg:h-24 flex items-center justify-between px-4 md:px-8 ">
                 
                    <img className="h-18 w-auto md:h-20 lg:h-24" src={SmartSpot} alt="SmartSpot"/>
                    <div className="hidden md:flex gap-10 text-lg lg:text-xl text-white">
                      <h1>Dashboard</h1>
                      <h1>Booking Page</h1>
                      <h1>History</h1>
                      <h1>Home</h1>
                      
                     </div>
                     <div className="flex gap-4">
                       <button type="button"  className="border md:px-6 px-4 py-2 rounded-lg bg-teal-600 font-semibold text-black sm:text-sm md:text-lg lg:text-xl hover:scale-110 transition duration-700 ease-in-out cursor-pointer  hover:bg-teal-400 ">Profile</button> 
                      
                     </div>
                     <button  className="md:hidden text-white text-3xl"
                       onClick={() => setOpen(!open)}> {open ? "✕" : "☰"}</button>
         
                       {open && (
                 <div className="absolute top-20 left-0 w-full bg-zinc-900 text-white flex flex-col items-center gap-6 py-6 md:hidden">
         
                   <h1>Dashboard</h1>
                   <h1>Booking Page</h1>
                   <h1>History</h1>
                   <h1>Home</h1>
                  
         
                 
                 </div>
               )}
                 </nav>
        </>
    )
}
export default Dashnav