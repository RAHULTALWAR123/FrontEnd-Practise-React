// https://jsonplaceholder.typicode.com/users?q=${field} 

import { useState } from "react";

export const useSearchHook = () => {
    const [users,setUsers] = useState([]);
    const SearchUser = async () => {
        try{

            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch(err) {
            console.log(err);
        }

    } 
    return {users,SearchUser}
}