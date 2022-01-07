import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from '../page/home'
import DownloadScreen from '../page/download'
import {createAppContainer} from 'react-navigation';


const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions : {
            headerShown: false
        }
    },
    Downloader: {
        screen: DownloadScreen,

    },
});


export default createAppContainer(HomeStack);
