import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Nav from '../components/nav';

import navStyles from '../styles/nav';


const HomeScreen = () => { 
  
  
  return (
    <View>
      <View>
        <Text>Home Screen</Text>
        <View style={navStyles.navContainer}>
          <Nav/>        
      </View>
      </View>
    </View>
  );
};




export default HomeScreen;