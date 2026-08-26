import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Aboutus from "./aboutus"

function Home(){
    return (
        <>
         <Navbar/>
         <Hero/>
         <Features/>
         <Aboutus/>
        </>
    )
}
export default Home