// you can use whatever authentification provider ~ Firebase / AWS
import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


// data layer
const AuthContext = createContext({
    // initial state 
    // like slices in Redux
})

export const AuthProvider = ({ children }) => {

    // const signIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         console.log("userInfo: ", userInfo);
    //     }catch(error){
    //         if(error.code === statusCodes.SIGN_IN_CANCELLED){
    //             // user cancelled the login flow
    //     } else if(error.code === statusCodes.IN_PROGRESS){
    //         // operation (e.g. sign in) is in progress already
    //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
    //         // play services not available or outdated
    //     } else {
    //         // some other error happened
    //     }

    //     }
    // }


    return (
        <AuthContext.Provider value={{ user: null }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext)
}