import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/nav';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';



const Nav = ({navigation}:any) => {


  const moveToDownload = () => {
    navigation.navigate("Downloader")
  }

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={moveToDownload}>
        <Ionicons name="md-download" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-home" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-settings" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
