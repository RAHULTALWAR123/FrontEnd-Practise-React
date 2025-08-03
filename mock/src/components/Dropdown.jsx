// import React from 'react'

import { useState } from "react";

function Dropdown() {
    const drop = ["Home","About","Contact","Services"];

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState("");
  return (
    <div className="text-center p-20">
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-6xl font-mono">Dropdown</h1>

            <div className="mt-10">
                <button 
                onClick={() => setShow(!show)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-t-2xl cursor-pointer">Menu</button>
                <div>
                    {show && 
                    <>
                    {drop.map((item,index) => (
                        <div>
                        <p 
                        onClick={() => setSelected(item)}
                        key={index} className={`bg-blue-300 hover:bg-blue-500 text-white font-bold py-3 px-6 ${selected === item ? "bg-blue-500" : ""} `}>{item}</p>
                        </div>
                    ))}
                    </>
                }
                </div>
            </div>
        </div>

        <div className="mt-10">
            <h2 className="text-3xl font-mono">Selected: {selected}</h2>
        </div>
      
    </div>
  )
}

export default Dropdown
