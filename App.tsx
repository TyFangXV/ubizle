import React from 'react';
import { StyleSheet, View } from 'react-native';
import Nav from './src/components/nav';
import HomeStack from './src/routes/homestack'
import navStyles from './src/styles/nav';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeStack/>
      <View style={navStyles.navContainer}>
          <Nav/>        
      </View>
    </View>
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
