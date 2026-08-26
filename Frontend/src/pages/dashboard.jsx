import React, { useEffect } from "react";
import { useState } from "react";
import car from "../assets/car.png";
import Dashnav from "./dashnav";
import { useNavigate } from "react-router-dom";

function Dashboard({PkData,setPkData}) {
        
        const navigate=useNavigate();    

        

        useEffect(()=>{
            fetch("http://localhost:5000/parking-status")
            .then((res)=>res.json())
            .then((data)=>{
                setPkData(data)
            })
            .catch((err)=>{
                console.error(err);
            })
        },[])

        const handleclick=()=>{
            navigate('/booking')
        }
        
    return (
        <>
            <Dashnav />

            <div className="min-h-screen ">
              
              <div className="flex flex-col lg:flex-row">
                {/* LEFT SECTION */} 
                <div className="w-full lg:w-7/12 px-6 sm:px-10 lg:px-15">

                    {/* Greeting */}
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 sm:mt-12 lg:mt-15 mb-10 flex flex-col gap-2">

                        <span className="flex flex-wrap gap-2">
                            <p>Hey</p>

                            <p className="bg-linear-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
                                Prasanna,
                            </p>
                        </span>

                        <span className="flex flex-wrap gap-2">
                            <p>Find Your Perfect</p>

                            <p className="bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                Parking Spot
                            </p>
                        </span>

                    </div>


                    {/* SLOT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 pt-10">

                        <div className="border border-teal-500 shadow-[0_0_18px] shadow-teal-500 text-center flex justify-center items-center flex-col gap-2 rounded-xl h-32 p-5">
                            <p className="text-xl sm:text-2xl font-semibold ">
                                Total Slots
                            </p>

                            <p className="lg:text-xl sm:text-xl hover:scale-200 hover:transition ease-in-out duration-700 cursor-pointer">
                                {PkData.total}
                            </p>
                        </div>


                        <div className="border border-teal-500 shadow-[0_0_18px] shadow-teal-500 text-center flex justify-center items-center flex-col gap-2 rounded-xl h-32 p-5">
                            <p className="lg:text-xl sm:text-2xl font-semibold">
                                Available Slots
                            </p>

                            <p className="lg:text-xl sm:text-xl hover:scale-200 hover:transition ease-in-out duration-700 hover:cursor-pointer">
                                {PkData.available}
                            </p>
                        </div>


                        <div className="border border-teal-500 shadow-[0_0_18px] shadow-teal-500 text-center flex justify-center items-center flex-col gap-2 rounded-xl h-32 p-5 sm:col-span-2 lg:col-span-1">
                            <p className="text-xl sm:text-2xl font-semibold">
                                Occupied Slots
                            </p>

                            <p className="lg:text-xl sm:text-xl hover:scale-200 hover:transition duration-700 ease-in-out cursor-pointer ">
                                {PkData.occupied}
                            </p>
                        </div>

                    </div>

                    <button onClick={handleclick} className="border px-8 py-3 rounded-lg text-2xl font-bold text-black bg-teal-600 m-10 ml-0 hover:scale-110 transition duration-700 ease-in-out cursor-pointer  hover:bg-teal-400 ">Book Now</button>

                </div>


                {/* RIGHT SECTION - CAR */}
                <div className="w-full lg:w-5/12  flex items-center justify-center px-4 sm:px-8 lg:px-0">

                    <img
                        src={car}
                        alt="SmartSpot parking car"
                        className="w-full max-w-md lg:max-w-xl object-contain"
                    />

                </div>
            </div>
         
                {/* LIVE STATUS */}
               <div className=" px-6 py-10 sm:p-10 lg:px-15">
                <h1 className="text-3xl font-semibold">Live Parking Status</h1>
                <div className="flex gap-6 py-10 ">
                  {PkData.slots.map((slot)=>(
                    <div key={slot._id} className="flex gap-1">
                      <p className="text-2xl">
                        {slot.status===1?"🟢":"🔴"}
                      </p>
                      <h3 className="font-semibold text-2xl">{slot.slotNumber}</h3>
                      
                    </div>
                ))}
                </div>

               </div>
            </div>

            
        </>
    );
}

export default Dashboard;