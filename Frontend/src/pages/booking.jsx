import React from "react";
import Dashnav from "./dashnav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Booking({PkData}){
    
    const token = localStorage.getItem("token");
    const navigate=useNavigate();
    const [error,setError]=useState("");
    const [book,setbook]=useState({
       
        slot:"",
        vehicleN:"",
        mobileN:"",
        status:"",
        startT:"",
        endT:""
    })

    const handleChange=(e)=>{
        setbook({
            ...book,
            [e.target.name]:e.target.value
            
        })
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
           const res=await fetch("http://localhost:5000/book",{
            method:"POST",
            headers:{"Content-Type":"application/json",
            Authorization:`Bearer ${token}`
            },
            body:JSON.stringify(book)
           })
        
           const data=await res.json();
           console.log(data);

           if(res.ok){
            navigate('/history')
           }
           else{
            setError("Something went wrong")
            return;
           }
        }catch(err){
            console.error(err);
            setError("Something went wrong")
        }
    }

    return(
        <>
        <Dashnav/>
         <div className="flex items-center justify-center p-15">
            <div className="border border-teal-500 flex items-center justify-center flex-col shadow-[0_0_20px] shadow-teal-700 rounded-lg p-4">
              <h1 className="text-3xl font-semibold mx-10 my-10">Book Your Slot Now</h1>
              {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center ">
                {/* <span className="flex flex-col gap-1">
                    <p >User</p>
                    <input 
                    type="text"
                    name="user"
                    value={book.user}
                    placeholder="eg : admin,user"
                    className="border w-43 h-7 text-center border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span> */}

                {/* <span className="flex flex-col gap-1">
                    <p>Slot</p>
                    <input 
                    type="button"
                    name="slot"
                    value={book.slot}
                    placeholder=""
                    className="border h-7 border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span> */}
               <p className="text-xl font-semibold">Choose Slot</p> 
               <div className="grid lg:flex  sm:grid-cols-2 gap-2">
                {PkData.slots
                .filter((slot) => slot.status === 1)
                .map((slot) => (
                <label key={slot._id} className="cursor-pointer">
                <input
                type="radio"
                name="slot"
                value={slot.slotNumber}
                className="hidden peer"
                onChange={handleChange}
                />

                <div className="border border-teal-500 rounded-lg px-5 py-3
                      peer-checked:bg-teal-500
                      peer-checked:text-black">
                {slot.slotNumber} 🟢
                </div>
             </label>
            ))}
            </div>

                <span className="flex flex-col gap-1">
                    <p>Vehcile Number</p>
                    <input 
                    type="text"
                    name="vehicleN"
                    value={book.vehicleN}
                    className="border w-53 h-7 border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span>

                <span className="flex flex-col gap-1">
                    <p>Mobile Number</p>
                    <input 
                    type="text"
                    name="mobileN"
                    value={book.mobileN}
                    className="border  w-60 h-7 border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span>

                 {/* <span className="flex flex-col gap-1">
                    <p>Status</p>
                    <input 
                    type="text"
                    name="status"
                    value={book.status}
                    placeholder="eg : active,completed,cancelled"
                    className="border w-60  h-7 text-center border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span> */}

                <span className="flex flex-col gap-1">
                    <p>Start Time</p>
                    <input 
                    type="datetime-local"
                    name="startT"
                    value={book.startT}
                    className="border h-7 border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span>

                <span className="flex flex-col gap-1">
                    <p>End Time</p>
                    <input 
                    type="datetime-local"
                    name="endT"
                    value={book.endT}
                    className="border h-7 border-teal-500 rounded-lg"
                    onChange={handleChange}
                     />
                </span>

               <button type="submit" className="border text-2xl font-semibold px-5 py-1 rounded-lg text-black bg-teal-700 hover:scale-110 transition duration-700 ease-in-out hover:cursor-pointer hover:bg-teal-500">Book</button>
            </form>
            </div>
         </div>
        </>

    ) 
}
export default Booking