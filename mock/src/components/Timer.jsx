// import React from 'react'

import { useRef, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const handleStart = () => {

        if (intervalRef.current) return;
    
        intervalRef.current = setInterval(() => {
            setTime((prev) => (prev + 1));
        }, 1000);


    }

    const handleReset = () => {
         clearInterval(intervalRef.current);
    intervalRef.current = null;
        setTime(0);
    }
    
    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    
  return (
    <div className="text-center p-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl font-mono">{time}</h1>
        <p className="text-xl">Timer</p>
        <div className="flex gap-4">
        <button 
        onClick={handleReset}
        className="bg-red-500 p-5 rounded-full">Reset</button>
        <button 
        onClick={handleStart}
        className="bg-green-500 p-5 rounded-full">Start</button>
        <button 
        onClick={handleStop}
        className="bg-blue-500 p-5 rounded-full">Stop</button> 
        </div>
      </div>
    </div>
  )
}

export default Timer
