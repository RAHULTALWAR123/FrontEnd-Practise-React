import React from 'react'

function ProductModal({modalData,setShowModal,setModalData}) {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-center p-10 m-10 w-1/2 mx-auto rounded-lg relative">
        <button onClick={() => {setShowModal(false),setModalData(null)}} className="absolute top-4 right-4 text-white text-2xl font-bold cursor-pointer">
          Exit
        </button>
        {modalData}
      </div>
    </div>
  )
}

export default ProductModal
