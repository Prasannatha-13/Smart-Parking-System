
import React from "react";

function Cards( {title, desc, icon}){
    return(
        <>
        <div className="
        h-60
        w-60
        group
        bg-white/5
        backdrop-blur-md
        border border-teal-400
        rounded-full
        p-5
        flex flex-col
        justify-center
        items-center
        hover:border-teal-400
        hover:shadow-[0_0_60px_rgba(45,212,191,0.3)]
        transition-all
        duration-300
        hover:-translate-y-2 
        ">
        <div className="text-4xl mb-3 w-fit">
                {icon}
            </div>

            <h3 className="text-xl  w-fit font-semibold text-teal-400">
                {title}
            </h3>

            <p className="text-gray-400 w-fit text-center mt-2">
                {desc}
            </p>

        </div>
        </>
    )
}
export default Cards