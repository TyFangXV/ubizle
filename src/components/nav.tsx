import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/nav';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

 type RootStackParamList = {
  Downloader: {id : string};
};


const Nav = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Downloader', {id: '1'});
        }}
      >
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
