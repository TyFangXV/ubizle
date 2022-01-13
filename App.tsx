import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Nav from './src/components/nav';
import HomeStack from './src/routes/homestack'
import navStyles from './src/styles/nav';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <HomeStack/>    
        <Nav/>    
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
