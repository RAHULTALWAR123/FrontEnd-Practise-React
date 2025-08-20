import React, { useEffect, useRef, useState } from 'react'

function Otp() {

    const [inputArray,setInputArray] = useState(new Array(5).fill(""));

    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus();
    },[])

    const handleChange = (value,i) => {
         
        if(isNaN(value)) return;

        const newVal = value.trim();
        const newArray = [...inputArray];
        newArray[i] = newVal.slice(-1);
        setInputArray(newArray);

        newVal && refArr.current[i+1]?.focus();
    
    }

    const handleKeyDown = (e,i) => {
        if(!e.target.value && e.key === "Backspace"){
            refArr.current[i-1]?.focus();
        }
    }


  return (
    <div className='text-center mt-20'>
        <h1 className='font-mono text-5xl'>Welcome to my OTP</h1>
        <p className='text-xl text-gray-300 font-mono'>you can only type digits</p>

        <div className='mt-10'>
            {inputArray.map((inp,i) => {
                return <input
                key={i} 
                className='border w-20 text-center text-xl m-2 rounded-xl h-20' 
                type='text'
                value={inputArray[i]} 
                onChange={(e) => handleChange(e.target.value,i)}
                ref={(inp) => (refArr.current[i] = inp)}
                onKeyDown={(e) => handleKeyDown(e,i)}
                />
            })}
        </div>


    </div>
  )
}

export default Otp
