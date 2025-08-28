/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts'
import ProductModal from './ProductModal';
import CartModal from './CartModal';
import { useCartStore } from '../stores/useCartStore';

function ProductFiltering() {
    const {getAllProducts,allProducts,setAllProducts} = useGetProducts();
    const {addCart,cart} = useCartStore();
    const [field,setField] = useState("");
    const [search,setSearch] = useState("");
    const [showModal,setShowModal] = useState(false);
    const [modalData,setModalData] = useState(null);
    const [showCartModal,setShowCartModal] = useState(false);


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
    const isAdded = (item) => {
      return cart.some((i) => i.id === item.id);
    }
    


     
  return (
    <>

      <div className='text-right mt-5 mr-5'>
        <button onClick={() => setShowCartModal(true)} className='px-10 py-4 bg-blue-500 rounded-2xl'>Cart</button>
      </div>
    <div className='text-center mt-10 p-10'>
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
          {showCartModal && <CartModal setShowCartModal={setShowCartModal}/>}

      <div className='mt-10 z-0 relative'>
        {filteredProducts.map((p) => (
    <div key={p.id} className='flex justify-between items-center '>
      <p onClick={() => {setModalData(p.description),setShowModal(true)}}>{p.title}</p>
      <div className='flex gap-5 items-center mb-2'>
      <p>{p.price}</p>
        <button disabled = {isAdded(p)} onClick={() => addCart(p)} className={`px-4 py-2 rounded-2xl bg-blue-500 ${isAdded(p) ? "cursor-not-allowed bg-white text-black" : "cursor-pointer"}`}>{isAdded(p) ? "Added" : "Add"}</button>
      </div>
    </div>
  ))}
      </div>

     
    </div>

    </>

    
  )
}

export default ProductFiltering
