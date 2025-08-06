import { useState } from "react";

export const useGetPhotos = () => {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        console.log(data);
        setPhotos(data);
    }
    return {photos, getPhotos };
}