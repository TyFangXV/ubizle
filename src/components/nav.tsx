import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/nav';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeParamList } from '../types/types';

const Nav = ({ navigation }:{navigation : StackNavigationProp<HomeParamList, 'Download'>}) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate('Download')}>
        <Ionicons name="md-download" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Ionicons name="md-home" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-settings" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
