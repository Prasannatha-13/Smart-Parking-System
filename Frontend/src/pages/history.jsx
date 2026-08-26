import React from "react";
import { useState } from "react";
import Dashnav from "./dashnav";
import img from "../assets/img.png"

function History(){
       const [totalb,settotalb]=useState(0);
       const [activeb,setactiveb]=useState(0);
       const [completed,setcompleted]=useState(0);

    return(
        <>
        <Dashnav/>
        <div className="flex ">
            {/* Left Section */}
            <div className=" w-full lg:w-7/12  p-6 lg:p-15 sm:p-10">
              <h1 className="text-4xl font-bold">Bookings History</h1>
              <p className="py-3 sm:text-lg lg:text-2xl">View and manage your parking bookings </p>

              {/* SUmmary cards */}
              <div className="gird grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
                 <div className="border rounded-lg flex flex-col items-center text-xl font-semibold">
                   <h1>Total Bookings</h1> 
                   <p>4</p>
                 </div>
                 <div className="border rounded-lg flex flex-col items-center text-xl font-semibold">
                    <h1>Active Bookings</h1>
                    <p>1</p>
                    
                 </div>
                 <div className="border rounded-lg flex flex-col items-center text-xl font-semibold">
                    <h1>Completed Bookings</h1>
                    <p>3</p>
                 </div>
              </div>

            </div>

            {/* Right section */}
            <div className="w-full lg:w-5/12">
                <img src={img}/>
            </div>
        </div>
        </>
    )
}
export default History