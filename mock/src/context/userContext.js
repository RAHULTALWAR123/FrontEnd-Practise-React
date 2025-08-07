import { createContext } from "react";

export const userContext = createContext();

const userProvider = ({children}) => {
    const user = {
        name: "John Doe",
        email: "john@gmail.com"
    };

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}
export default userProvider;