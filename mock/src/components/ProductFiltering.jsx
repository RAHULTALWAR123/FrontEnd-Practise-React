/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts'
import ProductModal from './ProductModal';

function ProductFiltering() {
    const {getAllProducts,allProducts,setAllProducts} = useGetProducts();
    const [field,setField] = useState("");
    const [search,setSearch] = useState("");
    const [showModal,setShowModal] = useState(false);
    const [modalData,setModalData] = useState(null);


    useEffect(() => {
        getAllProducts();
    },[])

    const handleHL = () => {
        const sorted = [...allProducts].sort((a,b) => b.price - a.price);
        setAllProducts(sorted);
    }

    const handleLH = () => {
        const sorted = [...allProducts].sort((a,b) => a.price - b.price);
        setAllProducts(sorted);
    }

    const filteredProducts  = field === "" && search === "" ?  allProducts : field !== "" ? allProducts.filter((p) => p.price > Number(field)) : allProducts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))


     
  return (
    <div className='text-center mt-20 p-10'>
      <h1 className='text-4xl font-mono'>This is my Products Filtering and Sorting Page</h1>
      <p className='font-mono text-lg'>Your Products Playground</p>

      <div className='flex justify-center gap-10 mt-10 items-center'>
        <button onClick={handleHL} className='bg-blue-500 px-5 py-2 rounded-2xl'>High to low</button>
        <button onClick={handleLH} className='bg-blue-500 px-5 py-2 rounded-2xl'>low to high</button>
        <div className='flex gap-3'>
        <input type="number" value={field} onChange={(e) => {setField(e.target.value),setSearch("")}} placeholder='Filter now' className='border px-5 py-2 rounded-2xl bg-gray-800' />
        </div>
      </div>

      <div className='flex justify-center gap-10 mt-10 items-center'>
        <input type="text" value={search} onChange={(e) => {setSearch(e.target.value),setField("")}} placeholder='Search now' className='border px-5 py-2 rounded-2xl w-1/2 bg-gray-800' />
      </div>

          {showModal &&  <ProductModal modalData={modalData} setShowModal={setShowModal} setModalData={setModalData} />}

      <div className='mt-10 z-0 relative'>
        {filteredProducts.map((p) => (
    <div key={p.id} className='flex justify-between items-center '>
      <p>{p.title}</p>
      <p>{p.price}</p>
    </div>
  ))}
      </div>
    </div>
  )
}

export default ProductFiltering
