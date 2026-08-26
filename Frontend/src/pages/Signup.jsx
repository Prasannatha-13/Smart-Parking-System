import React from "react"
import LogIn from "./Login"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import Navbar from "./Navbar"

function Signup({Data,setData}){
    const[error, seterror]=useState("");
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setData({
            ...Data,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        if(Data.password!=Data.confirmpw){
          seterror("Password do not Match");
          return;
        }
    

    try{
        const res=await fetch("http://localhost:5000/create",{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({
                username:Data.username,
                email:Data.email,
                password:Data.password
            })
        });

        const data=await res.json();
        console.log(data);

        navigate('/login');
    }catch(err){
        console.error("Error:",err);
        seterror("Something went wrong")
    }

   }

    return(
      <div>
        <Navbar/>
        <div className="flex items-center justify-center m-10">
        <div className=" border border-teal-700 flex items-center flex-col shadow-[0_0_20px] shadow-teal-700
        justify-center rounded-lg  w-96 p-5">
            <h1 className="text-3xl font-semibold text-center m-5">Create Your Account</h1>
            {error && <p className="text-red-600 text-center">{error}</p>}
           <div></div>
           <div>
            <form onSubmit={handleSubmit} className="flex items-center flex-col gap-4" >
                <span className="flex flex-col gap-1 ">
                <p>Name</p>
                <input 
                type="text" 
                name="username" 
                value={Data.username} 
                onChange={handleChange}
                className=" border rounded border-teal-500 h-8 w-50 " ></input>
                </span>

                <span className="flex flex-col gap-1">
                    <p className="ml-0">Email</p>
                    <input 
                    type="email" 
                    name="email" 
                    value={Data.email}
                    onChange={handleChange}
                    className="border border-teal-500 rounded h-8 w-64 "></input>
                </span>

                <span className="flex flex-col gap-1">
                    <p>Password</p>
                    <input 
                    type="password" 
                    name="password" 
                    value={Data.password}
                    onChange={handleChange}
                    className="border border-teal-500 rounded h-8 w-54 p-0 "></input>
                </span>

                 <span className="flex flex-col gap-1">
                    <p>Confirm Password</p>
                    <input 
                    type="password" 
                    name="confirmpw" 
                    value={Data.confirmpw}
                    onChange={handleChange}
                    className="border border-teal-500 rounded h-8 w-54 p-0 "></input>
                </span>
                <p className="text-teal-600">Already have an account?<Link to="/LogIn" className="underline text-white">Log In</Link></p>
                <button type="submit" className="border bg-teal-700 text-2xl font-semibold rounded px-5 text-black  hover:scale-125 transition duration-700">Create</button>
            </form>
           </div>
        </div>
        </div>
      </div>  
    )
}

export default Signup