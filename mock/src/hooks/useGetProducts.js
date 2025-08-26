import { useState } from "react";

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [allProducts,setAllProducts] = useState([]);

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

    const getAllProducts = async() => {
        try{

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log(data);
            setAllProducts(data);
        }
        catch(err){
            console.error("Error fetching products:", err);
        }
    }

    return {products,getProducts,getAllProducts,allProducts,setAllProducts };

}