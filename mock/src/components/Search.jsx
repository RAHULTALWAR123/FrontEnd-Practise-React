import { useState } from "react";

function Search(){

    const users = [
        {name: "John", age: 30},
        {name: "Jane", age: 25},
        {name: "Alice", age: 28},
        {name: "Bob", age: 35},
    ]

    const [field,setField] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(field);
        
    }

    return(
        <div className="text-center p-20">
            <h1 className="text-6xl font-mono">Search</h1>
            <p className="text-xl">This is a search component</p>

            <div className="flex items-center justify-center mt-10">
                <form action="" className="flex gap-4 items-center justify-center">
                    <input value={field} onChange={(e) => setField(e.target.value)} type="text" placeholder="search" className="border px-1 py-2 w-full"/>
                    <button onClick={handleSubmit} className="bg-blue-500 px-4 py-2 rounded">Submit</button>
                </form>
            </div>

            <div>
                {users.map((user,i) => (
                    <>
                    {user?.name == field && (
                        <div key={i} className="border p-4 m-2 rounded-lg shadow-lg w-1/3 mx-auto">
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-xl">Age: {user.age}</p>
                        </div>
                    )}
                    </>
                ))}
            </div>
        </div>
    )
}
export default Search;