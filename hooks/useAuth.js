import React, { createContext, useContext, } from 'react';
import * as Google from 'expo-auth-session/providers/google';

// useContext is a hook that allows us to access the context object
// We can use this hook to access the context object in any component
// thin data layer -> you can have loads of these: auth, user , basket / slices of state
const AuthContext = createContext({});

const config = {
    androidClientId: "866592919874-e6rvn8n5a7mrql5bjuhsrreh9dja70pi.apps.googleusercontent.com",
    iosClientId: '866592919874-ls61271nefua0c1v7v5997chd556di5l.apps.googleusercontent.com',
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "gender", "location"],
}

export const AuthProvider = ({ children }) =>{

    const signInWithGoogle = async () => {
        await Google.logInAsync()
    }
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

