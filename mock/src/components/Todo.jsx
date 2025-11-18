import React from 'react'

import { useEffect } from "react";
import { useState } from "react"

function Todo() {
  const [field,setField] = useState("");
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("my-todo")) || [];
    setTodos(saved);
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos,field]);
    localStorage.setItem("my-todo",JSON.stringify([...todos,field]));
  }

  const handleDelete = (index) => {
    const filteredTodo = todos.filter((t,id) => (id != index));
    setTodos(filteredTodo);
    localStorage.setItem("my-todo",JSON.stringify(filteredTodo));

  }

  return (
    <div className="text-center p-20 m-20">
      <h1 className="text-5xl font-mono">this is my todo app</h1>
      <p className="text-xl font-mono">welcome and enjoy!</p>

      <form className="">
        <input value={field} onChange={(e) => setField(e.target.value)} type="text" placeholder="enter the todo...." className="border p-2 rounded-xl mt-10 w-1/3" />
        <button onClick={handleSubmit} className="px-5 py-2 bg-blue-500 mx-3 rounded-xl">
          Add
        </button>
      </form>

      <div className="mt-10">
        <h1 className="text-5xl font-mono mb-3">todos</h1>
        {todos.length > 0 && todos?.map((t,index) =>(
          <div key={index} className="text-lg text-green-300 mb-2 flex justify-between">
            <p className="">{t}</p>
            <button  onClick={() => handleDelete(index)} className="bg-amber-300 px-4 py-1 rounded-2xl text-black">Delete</button>
          </div> 
        ))}

      </div>
      
    </div>
  )
}

export default Todo



// import React, { useEffect, useState } from 'react'

// function Todo() {
//   const [field,setField] = useState("");
//   const [todos,setTodos] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("local-todo")) || [];
//     setTodos(saved)
//   },[])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodos([...todos,field]);
//     localStorage.setItem("local-todo",JSON.stringify([...todos,field]));
//     console.log(field);
//   }

//   const handleDelete = (id) => {
//     const filteredTodo = todos.filter((_,i) => i != id);
//     localStorage.setItem("local-todo",filteredTodo);
//     setTodos(filteredTodo);
//   }

//   return ( 
//     <div className='p-10'>
//     <div className='text-center '>
//       <h1 className='text-4xl'>hello this is my todo</h1>
//       <p className='text-md'>start adding tasks !!</p>
//     </div>

//     <div className='flex items-center justify-center'>
//       <input type="text" value={field} onChange={(e) => setField(e.target.value)} placeholder='enter your todo' className='w-[30%] border rounded-2xl px-5 py-2' />
//       <button onClick={handleSubmit} className='p-5 rounded-2xl'>add</button> 
//     </div>

//     {todos?.length > 0 ? todos?.map((t,i) => (
//       <div key={i} className='flex justify-between items-center mt-10'>
//       <p className='text-md text-blue-400'>{t}</p>
//       <button onClick={() => handleDelete(i)} className='p-4 bg-blue-700 text-white'>Delete</button>
//     </div>
//     )) : (
//       <p>no todos yet, add a new todo</p>
//     )}
//     </div>
//   )
// }

// export default Todo

