// import React from 'react'

// import { useGetPhotos } from "../hooks/useGetPhotos";

function PhotoModal({id,photos}) {
    // const {photos} = useGetPhotos();
    const photo = photos.find(p => p.id === id);
  return (
    <div className=" bg-opacity-50 flex items-center justify-center ">
      {/* <img src={photo?.url} alt={photo?.title} className="w-1/2 h-auto rounded-lg shadow-lg" /> */}
      <p>{photo?.title}</p>
    </div>
  )
}

export default PhotoModal
