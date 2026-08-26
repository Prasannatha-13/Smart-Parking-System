// import React from "react"
// import Cards from "./cards"
// import logo from "../assets/SmartSpot.png"

// function Aboutus(){
//     return(
//         <>

// <section className="relative py-24 overflow-hidden bg-black">

//     {/* Background Glow */}
//     <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-teal-500/10 blur-[800px] rounded-full"></div>

//     <div className="relative max-w-6xl mx-auto px-6">

//         <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold">
//                 Why <span className="text-teal-400">SmartSpot?</span>
//             </h2>

//             <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
//                 SmartSpot combines AI-powered parking detection with an intuitive
//                 booking system to help you park faster, smarter, and stress-free.
//             </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

//             {/* LEFT */}

//             <div className="space-y-8">

//                 <Cards
//                     title="AI Detection"
//                     desc="Detects available parking spaces instantly."
//                     icon="🤖"
//                 />

//                 <Cards
//                     title="Instant Booking"
//                     desc="Reserve your parking slot within seconds."
//                     icon="⚡"
//                 />

//                 <Cards
//                     title="Save Time"
//                     desc="No more driving around searching for parking."
//                     icon="⏱"
//                 />

//             </div>

//             {/* CENTER */}

//             <div className="flex justify-center">

//                 <div className="relative">

//                     <div className="absolute inset-0 rounded-full bg-teal-500 blur-3xl opacity-20 animate-pulse"></div>

//                     <div className="relative h-64 w-64 rounded-full border-2 border-teal-400 bg-[#0f0f0f] flex flex-col justify-center items-center">
//                      <img src={logo} className="rounded-full" alt="SmartSpot"/>

//                     </div>

//                 </div>

//             </div>

//             {/* RIGHT */}

//             <div className="space-y-8">

//                <Cards
//                     title="Live Availability"
//                     desc="View real-time parking occupancy."
//                     icon="📍"
//                 />

//                 <Cards
//                     title="Secure Booking"
//                     desc="Safe and reliable parking reservations."
//                     icon="🔒"
//                 />

//                 <Cards
//                     title="Eco Friendly"
//                     desc="Reduce fuel waste and traffic congestion."
//                     icon="🌱"
//                 />

//             </div>

//         </div>

//     </div>

// </section>
// </>
//     )}
// export default Aboutus

import React from "react"
import Cards from "./cards"
import logo from "../assets/SmartSpot.png"
import "./about.css"

function Aboutus(){

return(
<section className="relative py-24 overflow-hidden bg-black">

    {/* Background Glow */}
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-teal-400 blur-[800px] rounded-full"></div>


    <div className="relative max-w-6xl mx-auto px-6">


        <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold">
                Why <span className="text-teal-400">SmartSpot?</span>
            </h2>

            <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                SmartSpot combines AI-powered parking detection with an intuitive
                booking system to help you park faster, smarter, and stress-free.
            </p>

        </div>



        {/* Circle Container */}

        <div className="relative  md:h-[850px] flex justify-center items-center">


            {/* CENTER LOGO */}

            <div className="relative">

                <div className="absolute inset-0 rounded-full bg-teal-500 blur-3xl opacity-20 animate-pulse"></div>

                <div className="relative h-64 w-64  rounded-full border-2 border-teal-400 bg-[#0f0f0f] flex justify-center items-center">

                    <img 
                    src={logo}
                    className="rounded-full h-full w-full object-cover"
                    alt="SmartSpot"
                    />

                </div>

            </div>



            {/* CARDS */}
         <div className="circle-animation">
            <div className="orbit-card card1">
                <Cards
                title="AI Detection"
                desc="Detects available parking spaces instantly."
                icon="🤖"
                />
            </div>


            <div className="orbit-card card2">
                <Cards
                title="Instant Booking"
                desc="Reserve your parking slot within seconds."
                icon="⚡"
                />
            </div>


            <div className="orbit-card card3">
                <Cards
                title="Save Time"
                desc="No more searching for parking."
                icon="⏱"
                />
            </div>



            <div className="orbit-card card4">
                <Cards
                title="Live Availability"
                desc="View real-time parking occupancy."
                icon="📍"
                />
            </div>



            <div className="orbit-card card5">

                <Cards
                title="Secure Booking"
                desc="Safe and reliable reservations."
                icon="🔒"
                />

            </div>



            <div className="orbit-card card6">

                <Cards
                title="Eco Friendly"
                desc="Reduce fuel waste and traffic."
                icon="🌱"
                />

            </div>
        </div>

        </div>


    </div>

</section>

)

}

export default Aboutus