import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Nav from '../components/nav';

import navStyles from '../styles/nav';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={navStyles.container}>
      <Text>Home Screen</Text>
      <View style={navStyles.navContainer}>
        <Nav navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
