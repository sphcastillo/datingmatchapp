import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch} from 'react-redux';
// import { authToken } from "./store/reducers";
import { Init } from './store/actions';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import ModalScreen from './screens/ModalScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootNavigation = () => {

  const [loading, setLoading] = useState(true)
  // const token = useSelector((state) => state);
  const token = null;
  console.log("token from useSelector: ", token)
  const dispatch = useDispatch();
  
  

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default RootNavigation;