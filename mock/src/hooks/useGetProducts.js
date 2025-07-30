import { useState } from "react";

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async() => {
        try {
            const res  = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            console.log(data.products);
            setProducts(data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }
    return {products,getProducts };

}