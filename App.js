import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import tw from "tailwind-rn";
import { AuthProvider } from './hooks/useAuth';
import StackNavigator from './StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higher Order Component */}
      <AuthProvider>
        {/* Passes down the cool auth stuff to children ... */}
        <StackNavigator />
      </AuthProvider>

    </NavigationContainer>
  );
}


