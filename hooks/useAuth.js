import React, { createContext, useContext, } from 'react';


// useContext is a hook that allows us to access the context object
// We can use this hook to access the context object in any component
// thin data layer -> you can have loads of these: auth, user , basket / slices of state
const AuthContext = createContext({});

export const AuthProvider = ({ children }) =>{
    return (
        <AuthContext.Provider value={{
            user: null
        }}>
            {children}
        </AuthContext.Provider>
    )
}



// Let's only export the `useAuth` hook instead of the context
// We  only want to use the hook directly and never the context component

export default function useAuth(){
    return useContext(AuthContext);
}

