// import React from 'react'

import { useCartStore } from "../stores/useCartStore";

function CartModal({setShowCartModal}) {
    const {cart,deleteCart} = useCartStore();


  return (
   <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-center p-10 m-10 w-1/2 mx-auto rounded-lg relative overflow-y-auto max-h-[80vh]">
        <button onClick={()=>setShowCartModal(false)} className="absolute top-1 right-3 text-white text-2xl  font-bold cursor-pointer">
          Exit
        </button>
        {cart.length > 0 ? cart.map((c) => (
            <div key={c.id} className="border-b border-gray-700 mb-5 pb-5 flex justify-between items-center">
            <p className="text-lg font-mono">{c.title.slice(0,50)}</p>
            <div className="flex gap-2 items-center">
            <p className="text-blue-500 font-mono">{c.price}</p>
            <button onClick={() => deleteCart(c.id)} className="bg-red-500 px-3 py-2 rounded-2xl">delete</button>
            </div>
            </div>
        )) : (
            <p className="text-lg font-mono">No items in the cart</p>
        )}
      </div>
    </div>
  )
}

export default CartModal
