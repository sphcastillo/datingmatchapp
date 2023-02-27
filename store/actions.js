import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
    return async (dispatch) => {
        let token = await AsyncStorage.getItem('token')
        if (token !== null){
            console.log("Token has been found")
            dispatch({
                type: "LOGIN",
                payload: token
            })
        } 
    }
}

export const Login = (username, password) => {
    return async dispatch => {
        let token = null;
        if(username === "sophia" && password == "1234"){
            token = username + password
            // here we can use login api to get token and then store it 
            await AsyncStorage.setItem('token', token)
            console.log("Token has been stored")
        }
        dispatch({
            type: "LOGIN",
            payload: token
        })
    }
}

export const Logout = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        dispatch({
            type: "LOGOUT"
        })
    }
}