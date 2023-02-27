import React, { 
    useState, 
    useEffect, 
    useContext, 
    createContext, 
    useMemo
} from 'react';
 import { View, Text } from 'react-native';
//  import { GoogleSignin } from '@react-native-google-signin/google-signin';

// import { auth } from '../firebase';
// import {
//     GoogleAuthProvider,
//     onAuthStateChanged,
//     signInWithCredential,
//     signOut
// } from "firebase/auth"


// useContext is a hook that allows us to access the context object
// We can use this hook to access the context object in any component
// thin data layer -> you can have loads of these: auth, user , basket / slices of state
const AuthContext = createContext({

});

export const AuthProvider = ({ children }) =>{
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}



// Let's only export the `useAuth` hook instead of the context
// We  only want to use the hook directly and never the context component

// export default function useAuth(){
//     return useContext(AuthContext);
// }

