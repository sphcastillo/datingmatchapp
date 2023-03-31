import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

// import { authToken } from "./store/reducers";

const RootNavigation = () => {

  const [loading, setLoading] = useState(true)
  // const token = useSelector((state) => state);
  const token = null;
  console.log("token from useSelector: ", token)

  
  

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default RootNavigation;