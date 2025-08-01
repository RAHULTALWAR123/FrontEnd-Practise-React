// import React from 'react'

import { useState } from "react";

function Form() {

    const [field,setField] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors,setErrors] = useState({
        name: false,
        email: false,
        password: false
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(field);

        if(field.name === ""){
            setErrors((prev) => ({...prev, name: true}));
        }
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.email) === false){
            setErrors((prev) => ({...prev, email: true}));
        }

        if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/.test(field.password) === false){
            setErrors((prev) => ({...prev, password: true}));
        }
    }

  return (
    <div className="text-center p-20">
        <form className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4 items-center justify-center">
            <label className="block text-lg font-medium">Name:</label>
            <input value={field.name} onChange={(e) => {setField({...field,name: e.target.value}),setErrors({...errors,name: false})}} className="p-2 border border-gray-300 rounded" type="text" placeholder="Enter your name" />
            </div>

            {errors.name && <p className="text-red-500">Name is required</p>}

            <div className="flex gap-4 items-center justify-center">
            <label className="block text-lg font-medium">email:</label>
            <input value={field.email} onChange={(e) => {setField({...field,email: e.target.value}),setErrors({...errors,email: false})}} className="p-2 border border-gray-300 rounded" type="email" placeholder="Enter your name" />
            </div>

            {errors.email && <p className="text-red-500">Invalid Email</p>}

            <div className="flex gap-4 items-center justify-center">
            <label className="block text-lg font-medium">password:</label>
            <input value={field.password} onChange={(e) => {setField({...field,password: e.target.value}),setErrors({...errors,password: false})}} className="p-2 border border-gray-300 rounded" type="password" placeholder="Enter your name" />
            </div>

            {errors.password && <p className="text-red-500">Invalid Password</p>}

            <button type="submit" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>

        </form>
    </div>
  )
}

export default Form
