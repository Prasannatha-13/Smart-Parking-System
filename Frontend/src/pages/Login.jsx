import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Navbar from "./Navbar";


function LogIn(){
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const [error,setError]=useState("");
    const navigate=useNavigate();
     
    const handleSubmit=async (e)=>{
        e.preventDefault();

        try{
            const res=await fetch("http://localhost:5000/login",{
                method:'POST',
                headers:{ 'Content-Type':'application/json'},
                body:JSON.stringify({
                    email:email,
                    password:password
                })    

            })
            const data=await res.json()
            console.log(data);

            localStorage.setItem("token", data.token)
            localStorage.setItem(
                       "user",
               JSON.stringify(data.user)
            );

            if (res.ok) {
                navigate('/dashboard');
            } else {
              seterror(data.message || "Login failed");
            }



        }catch(err){
            console.error(err);
            setError("Something went wrong")
        }

    }

    return(
       <div>
        <Navbar/>
        <div className="flex items-center justify-center m-10">
        <div className="border border-teal-500 rounded-lg shadow-[0_0_20px] shadow-teal-700 flex items-center justify-center flex-col w-96 p-5">
            <h1 className="text-3xl font-semibold text-center ">Login</h1>
            <div></div>
            <div >
            <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-4">
                <span>
                    <p className="">Email</p>
                    <input 
                    type="email" 
                    name="email"
                    onChange={(e)=>setemail(e.target.value)} 
                    className="border border-teal-500 rounded h-8 w-64"/>
                </span>

                <span className="flex flex-col gap-1">
                    <p>Password</p>
                    <input 
                    type="password" 
                    name="password" 
                    onChange={(e)=>setpassword(e.target.value)}
                    className="border border-teal-500 rounded h-8 w-54 p-0 "></input>
                </span>
                <p className="text-teal-600">Didn't Signed Up ? <Link to="/Signup" className="underline text-white">Signup</Link></p>
                <button className="border bg-teal-700 py-1 px-4 text-2xl text-black font-semibold rounded hover:scale-125 transition duration-700">LogIn</button>
            </form>
            </div>
        </div>
        </div>
       </div>  
    )
}

export  default LogIn