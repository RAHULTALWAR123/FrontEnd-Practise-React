/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import { useGetPhotos } from "../hooks/useGetPhotos";
import PhotoModal from "./PhotoModal";

function Photos() {
  const {photos ,getPhotos } = useGetPhotos();
  const [show,setShow] = useState(null);

  useEffect(() => {
    getPhotos();
  }, []);

  const PaginatedPhotos = photos.slice(0, 20);
  
  return (
    <div className="text-center p-20">
      <h1 className="text-4xl font-mono">Album</h1>
      <p className="text-xl text-gray-100">This is my Album</p>

       {show && (
        <PhotoModal id={show} photos={photos}/>
      )} 

     
      <div className="grid grid-cols-3 gap-4 mt-10">
        {PaginatedPhotos?.map((p) => (
          <div  key={p?.id} className="border p-4 rounded-lg shadow-lg">
            {/* <img src={p?.thumbnailUrl} alt="pic" /> */}
            <p onClick={() => setShow(p?.id)}>{p?.title}</p>
          </div>
        ))}
         {show && (
        <PhotoModal id={show} photos={photos}/>
      )}

      </div>
    </div>
  )
}

export default Photos
