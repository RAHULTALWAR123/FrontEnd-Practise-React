/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { useGetPosts } from "../hooks/useGetPosts"

function Accordian() {

    const {posts,getPosts} = useGetPosts();
    const [show,setShow] = useState(null);

 
    useEffect(() => {
        getPosts();
    },[]);

    const handleClick = (id) => {
        show === id ? setShow(null) : setShow(id);
    }

  return (
    <div className="text-center p-20">
      <h1 className="text-4xl font-mono">Accordian</h1>

      {posts.map((p) => (
        <div key={p?.id}>
        <div className="border p-2 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between gap-5">
            <p className="text-sm">{p?.title}</p>
            <button
            onClick={() => handleClick(p?.id)}
            className="text-xs text-red-400 cursor-pointer">show</button>
        </div>
        {show === p.id &&
        <>
            <div className="border-b-2 border-white"></div>
            <p className="text-gray-700">{p?.body}</p>
        </> 
        } 
        </div>

        </div>
      ))}



    </div>
  )
}

export default Accordian
