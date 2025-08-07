// import React from 'react'

import { useState } from "react";

function Gift() {
    const [field, setField] = useState("");
    const [persons, setPersons] = useState([]);
    const [assigned,setAssigned] = useState(false);
    const [gifts,setGifts] = useState(["Watch", "Phone", "Laptop", "Book", "Pen"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(field);

        setPersons([...persons, field]);
        setField("");
    }

    
    const handleRemove = (index) => {
        const filtered = persons.filter((p,i) => i !== index);
        setPersons(filtered);
    }

    const handleAssign = () => {
        setAssigned(true);
    }

    const handleShuffle = () => {
        // gifts = gifts.reverse();
        setGifts([...gifts].reverse());
    }

    const handleReset = () => {
        setAssigned(false);
    }

  return (
    <div className="text-center p-20">
        <h1 className="text-4xl font-mono">Diwali Gifts</h1>
        <p className="text-2xl">Gift now</p>

        <form action="" className="flex items-center justify-center gap-3 mt-5">
            <input value={field} onChange={(e) => setField(e.target.value)} type="text" placeholder="Enter.." className="border py-2"/>
            <button onClick={handleSubmit} className="bg-blue-400 px-3 py-2">Add</button>
        </form>

        <div className="mt-10">
            {persons.length > 0 &&  (
                <>
                {persons.map((p,index) => (
                    <div key={index} className="border p-2 m-2 rounded-lg shadow-lg flex justify-around items-center">
                        <p className="text-xl font-bold">{p}</p>
                        {assigned ? (
                            <p className="text-lg">{gifts[index % gifts.length]}</p>
                        ) : (
                            <p className="text-lg">Not Assigned</p>
                        )}
                        <button onClick={() => handleRemove(index)} className="text-red-400">Remove</button>
                    </div>
                ))}

                <div className="mt-3 flex justify-center gap-5 items-center">
                    <button onClick={handleAssign} className="bg-green-400 p-4">Assign Gifts</button>
                    <button onClick={handleShuffle} className="bg-blue-400 p-4">Shuffle Gifts</button>
                    <button onClick={handleReset} className="bg-yellow-400 p-4">Reset Gifts</button>
                </div>
                </>
            )}
        </div>

      
    </div>
  )
}

export default Gift
