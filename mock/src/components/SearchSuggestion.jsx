/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { useSearchHook } from "../hooks/useSearchHook"

function SearchSuggestion() {
    const {SearchUser,users} = useSearchHook();
    const [field,setField] = useState("");
    const [typing,setTyping] = useState(false);

    useEffect(() => {
        SearchUser();
    },[])

    const filteredUsers = users.filter((u) => u.name.toLowerCase().includes(field.toLowerCase()));

  return (
    <div className="text-center p-20 m-20">
       <h1 className="text-5xl font-mono">This is my Search Page</h1>
       <p className="font-mono text-xl">Search Users</p>

       <div>
        <input className="w-2/3 p-3 bg-gray-800 text-white rounded-2xl mt-10" type="text" placeholder="Search user ..." value={field} onChange={(e) => {setField(e.target.value),setTyping(true)}} />
       </div>

       {typing && field !== "" ? (
        <>
        {filteredUsers?.map((u) => (
            <div key={u.id} className="flex justify-between items-center mt-10 ">
                <p>{u.name}</p>
                <p>{u.email}</p>
            </div>
        ))}
        </>
       ) : (
        <>
        <p>stat typing ....</p>
        </>
       )}
    </div>
  )
}

export default SearchSuggestion
