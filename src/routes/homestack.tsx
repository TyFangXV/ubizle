import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../page/home";
import download from "../page/download";
import { HomeParamList } from "../types/types";
interface RoutesProps {

}

const Stack = createStackNavigator<HomeParamList>();


export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
       <NavigationContainer>
           <Stack.Navigator screenOptions={{header : ()=> null}} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Download" component={download}/>
              </Stack.Navigator> 
       </NavigationContainer>
    )
}
