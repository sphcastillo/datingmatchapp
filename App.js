import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
      <NavigationContainer>
        {/* HOC - Higher Order Component */}

          {/* Passes down the cool auth stuff to children ... */}
          <StackNavigator />

      </NavigationContainer>
  );
}


