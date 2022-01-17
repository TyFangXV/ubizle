import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View, Input, Button, NativeBaseProvider} from 'native-base';
import Nav from '../components/nav';

import navStyles from '../styles/nav';
import downloadStyles from '../styles/page/download'
import { HomeParamList } from '../types/types';

const DownlodScreen = ({navigation}:{navigation : StackNavigationProp<HomeParamList, 'Download'>}) => {
  return (
    <NativeBaseProvider>
    <View style={navStyles.container}>
      <Input placeholder='Enter your link' style={downloadStyles.input}/>
      <Button style={downloadStyles.button}>
        <Text style={downloadStyles.buttonText}>Download</Text>
      </Button>

      <View style={navStyles.navContainer}>
        <Nav navigation={navigation} />
      </View>
    </View>
    </NativeBaseProvider>
  );
};

export default DownlodScreen;
