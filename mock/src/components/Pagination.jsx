/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts"

function Pagination() {
    const {products,getProducts} = useGetProducts();
    const [i, setI] = useState(0);

    useEffect(() => {
        getProducts();
    }, []);
    

    const PageProducts = products.slice(i, i + 5);

    const handleNext = () => {
        if(i+5 < products.length){
            setI(i+5);
        }

    }
    const handlePrev = () => {
        if(i > 0){
            setI(i-5);
        }
    }




  return (
    <div className="p-10 m-10 flex flex-col items-center justify-center">
        {products.length > 0 ? (
            <>
            {PageProducts?.map((p) => (
                <div key={p.id} className="border p-4 m-2 rounded-lg shadow-lg w-1/3">
                    <h2 className="text-xl font-bold">{p.title}</h2>
                    <p className="text-gray-700">{p.description}</p>
                    <p className="text-gray-500">Price: ${p.price}</p>
                    <img src={p.thumbnail} alt={p.title} className="w-full h-48 object-cover mt-2 rounded" />
                </div>
            ))}
            </>
        ):(
            <div className="text-center">
                <h1 className="text-2xl font-bold">No Products Available</h1>
            </div>
        )}

        <div className="mt-10 flex justify-between w-1/3">
            <button 
            onClick={handlePrev}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Previous</button>
            <button 
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Next</button>
        </div>
    </div>
  )
}

export default Pagination
